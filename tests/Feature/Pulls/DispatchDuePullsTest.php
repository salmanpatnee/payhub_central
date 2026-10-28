<?php

declare(strict_types=1);

use App\Actions\Pulls\DispatchDuePulls;
use App\Jobs\PullDeploymentJob;
use App\Models\Deployment;
use Illuminate\Console\Scheduling\CallbackEvent;
use Illuminate\Console\Scheduling\Event;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Database\QueryException;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Schema;

/**
 * @return list<int>
 */
function queuedDeploymentIds(): array
{
    $ids = [];

    Queue::assertPushed(PullDeploymentJob::class, function (PullDeploymentJob $job) use (&$ids): bool {
        $ids[] = $job->deploymentId;

        return true;
    });

    sort($ids);

    return $ids;
}

beforeEach(function () {
    Queue::fake();
    Carbon::setTestNow('2026-10-28 12:00:00');
});

afterEach(fn () => Carbon::setTestNow());

// covers: AC-1
it('queues one job for each active deployment', function () {
    $first = Deployment::factory()->create();
    $second = Deployment::factory()->create();

    app(DispatchDuePulls::class)();

    expect(queuedDeploymentIds())->toBe([$first->id, $second->id]);
    Queue::assertPushed(PullDeploymentJob::class, 2);
});

// covers: AC-1
it('skips paused deployments', function () {
    $active = Deployment::factory()->create();
    Deployment::factory()->paused()->create();

    app(DispatchDuePulls::class)();

    expect(queuedDeploymentIds())->toBe([$active->id]);
});

// covers: AC-1
it('skips removed deployments', function () {
    $active = Deployment::factory()->create();
    Deployment::factory()->create()->delete();

    app(DispatchDuePulls::class)();

    expect(queuedDeploymentIds())->toBe([$active->id]);
});

// covers: AC-1, AC-6
it('skips a deployment that is waiting for a future time', function () {
    $active = Deployment::factory()->create();
    Deployment::factory()->create(['do_not_pull_before' => now()->addMinutes(2)]);

    app(DispatchDuePulls::class)();

    expect(queuedDeploymentIds())->toBe([$active->id]);
});

// covers: AC-6
it('queues a deployment again once its wait time has passed or is exactly now', function () {
    $passed = Deployment::factory()->create(['do_not_pull_before' => now()->subSecond()]);
    $exact = Deployment::factory()->create(['do_not_pull_before' => now()]);

    app(DispatchDuePulls::class)();

    expect(queuedDeploymentIds())->toBe([$passed->id, $exact->id]);
});

it('queues nothing and still writes the heartbeat when there are no deployments', function () {
    app(DispatchDuePulls::class)();

    Queue::assertNothingPushed();
    expect(Cache::get('scheduler:heartbeat'))->toBe(now()->getTimestamp());
});

// covers: AC-8
it('writes the heartbeat as a unix timestamp after dispatching', function () {
    Deployment::factory()->create();

    app(DispatchDuePulls::class)();

    expect(Cache::get('scheduler:heartbeat'))->toBeInt()->toBe(now()->getTimestamp());
});

// covers: AC-8
it('writes no heartbeat when the deployment query throws', function () {
    Schema::drop('deployments');

    expect(fn () => app(DispatchDuePulls::class)())->toThrow(QueryException::class);
    expect(Cache::get('scheduler:heartbeat'))->toBeNull();
});

// covers: AC-3, AC-9
it('puts only the deployment id on the job, never the token', function () {
    $deployment = Deployment::factory()->create(['token' => 'SECRET-TOKEN-VALUE']);

    app(DispatchDuePulls::class)();

    Queue::assertPushed(PullDeploymentJob::class, function (PullDeploymentJob $job) use ($deployment): bool {
        return $job->deploymentId === $deployment->id
            && ! str_contains(serialize($job), 'SECRET-TOKEN-VALUE');
    });
});

// covers: AC-3
it('makes a second job for the same deployment unique while the first waits', function () {
    $job = new PullDeploymentJob(7);

    expect($job)->toBeInstanceOf(ShouldBeUnique::class)
        ->and($job->uniqueId())->toBe('7')
        ->and((new PullDeploymentJob(8))->uniqueId())->not->toBe($job->uniqueId());
});

// covers: AC-4, AC-5, AC-7
it('has the cadence values from the spec', function () {
    $job = new PullDeploymentJob(1);

    expect($job->tries)->toBe(1)
        ->and($job->timeout)->toBe(20)
        ->and($job->failOnTimeout)->toBeTrue()
        ->and($job->uniqueFor)->toBe(3600);
});

// covers: AC-7
it('schedules the dispatcher every five minutes and the worker every minute', function () {
    /** @var list<Event> $events */
    $events = app(Schedule::class)->events();

    $dispatcher = collect($events)->first(fn (Event $event) => $event instanceof CallbackEvent && $event->description === 'pulls:dispatch');
    $worker = collect($events)->first(fn (Event $event) => str_contains($event->command ?? '', 'queue:work'));

    expect($dispatcher)->not->toBeNull()
        ->and($dispatcher->expression)->toBe('*/5 * * * *')
        ->and($worker)->not->toBeNull()
        ->and($worker->expression)->toBe('* * * * *')
        ->and($worker->command)->toContain('--stop-when-empty', '--max-time=50', '--tries=1')
        ->and($worker->withoutOverlapping)->toBeTrue()
        ->and($worker->expiresAt)->toBe(2);
});
