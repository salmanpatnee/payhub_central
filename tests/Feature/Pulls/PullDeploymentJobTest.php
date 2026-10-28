<?php

declare(strict_types=1);

use App\Enums\PullFailureKind;
use App\Enums\PullSource;
use App\Enums\PullStatus;
use App\Jobs\PullDeploymentJob;
use App\Models\Deployment;
use App\Models\Pull;
use Database\Factories\PullFactory;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

const SCHEDULED_TOKEN = 'SCHEDULEDTOKEN-bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';

/**
 * @param  array<string, mixed>  $attributes
 */
function scheduledDeployment(array $attributes = []): Deployment
{
    return Deployment::factory()->create([
        'slug' => 'payhub1',
        'base_url' => 'https://payhub1.example.test',
        'token' => SCHEDULED_TOKEN,
        ...$attributes,
    ]);
}

function runScheduledJob(int $deploymentId): void
{
    dispatch_sync(new PullDeploymentJob($deploymentId));
}

// covers: AC-2
it('saves a good pull marked as scheduled with nobody who triggered it', function () {
    $deployment = scheduledDeployment();
    Http::fake(['*' => Http::response(PullFactory::sampleBody(), 200)]);

    runScheduledJob($deployment->id);

    $pull = Pull::query()->where('deployment_id', $deployment->id)->sole();

    expect($pull->status)->toBe(PullStatus::Success)
        ->and($pull->source)->toBe(PullSource::Scheduled)
        ->and($pull->triggered_by)->toBeNull();
});

// covers: AC-2
it('saves a failed pull marked as scheduled when PayHub answers 503', function () {
    $deployment = scheduledDeployment();
    Http::fake(['*' => Http::response('down', 503)]);

    runScheduledJob($deployment->id);

    $pull = Pull::query()->where('deployment_id', $deployment->id)->sole();

    expect($pull->status)->toBe(PullStatus::Failed)
        ->and($pull->source)->toBe(PullSource::Scheduled)
        ->and($pull->triggered_by)->toBeNull()
        ->and($pull->failure_kind)->toBe(PullFailureKind::Unavailable)
        ->and($pull->http_status)->toBe(503);
});

// covers: AC-4
it('saves one failed pull on a timeout and does not throw so the queue does not retry', function () {
    $deployment = scheduledDeployment();
    Http::fake(['*' => fn () => throw new ConnectionException('cURL error 28: Operation timed out')]);

    runScheduledJob($deployment->id);

    $pull = Pull::query()->where('deployment_id', $deployment->id)->sole();

    expect($pull->status)->toBe(PullStatus::Failed)
        ->and($pull->source)->toBe(PullSource::Scheduled)
        ->and($pull->failure_kind)->toBeIn([PullFailureKind::Timeout, PullFailureKind::Network]);
});

// covers: AC-6
it('holds the deployment back after a 429 so the next dispatch skips it', function () {
    $deployment = scheduledDeployment();
    Http::fake(['*' => Http::response('', 429, ['Retry-After' => '120'])]);

    runScheduledJob($deployment->id);

    $deployment->refresh();

    expect($deployment->do_not_pull_before?->isFuture())->toBeTrue()
        ->and(Pull::query()->sole()->failure_kind)->toBe(PullFailureKind::RateLimited);
});

// covers: AC-3
it('makes no request and saves nothing when the deployment was paused after queueing', function () {
    $deployment = scheduledDeployment(['is_active' => false]);
    Http::fake();
    $log = Log::spy();

    runScheduledJob($deployment->id);

    Http::assertNothingSent();
    expect(Pull::query()->count())->toBe(0);
    $log->shouldHaveReceived('info')->with('Scheduled pull skipped: deployment paused.', ['deployment_id' => $deployment->id])->once();
});

// covers: AC-3, AC-6
it('makes no request when the deployment is waiting', function () {
    $deployment = scheduledDeployment(['do_not_pull_before' => now()->addMinutes(5)]);
    Http::fake();
    $log = Log::spy();

    runScheduledJob($deployment->id);

    Http::assertNothingSent();
    expect(Pull::query()->count())->toBe(0);
    $log->shouldHaveReceived('info')->with('Scheduled pull skipped: deployment waiting.', ['deployment_id' => $deployment->id])->once();
});

// covers: AC-3
it('skips quietly when another pull holds the lock for the deployment', function () {
    $deployment = scheduledDeployment();
    Http::fake();
    $log = Log::spy();
    $lock = Cache::lock("pull:deployment:{$deployment->id}", 30);
    $lock->get();

    runScheduledJob($deployment->id);

    Http::assertNothingSent();
    expect(Pull::query()->count())->toBe(0);
    $log->shouldHaveReceived('info')->with('Scheduled pull skipped: pull already running.', ['deployment_id' => $deployment->id])->once();
});

// covers: AC-3
it('skips quietly when the deployment is gone', function () {
    Http::fake();
    $log = Log::spy();

    runScheduledJob(9999);

    Http::assertNothingSent();
    expect(Pull::query()->count())->toBe(0);
    $log->shouldHaveReceived('info')->with('Scheduled pull skipped: deployment gone.', ['deployment_id' => 9999])->once();
});

// covers: AC-3
it('skips quietly when the deployment was soft deleted after queueing', function () {
    $deployment = scheduledDeployment();
    $deployment->delete();
    Http::fake();
    $log = Log::spy();

    runScheduledJob($deployment->id);

    Http::assertNothingSent();
    expect(Pull::query()->count())->toBe(0);
    $log->shouldHaveReceived('info')->with('Scheduled pull skipped: deployment gone.', ['deployment_id' => $deployment->id])->once();
});

// covers: AC-9
it('never writes the token to the log or the saved failure', function () {
    $deployment = scheduledDeployment();
    Http::fake(['*' => Http::response('token '.SCHEDULED_TOKEN, 503)]);
    $log = Log::spy();

    runScheduledJob($deployment->id);

    $log->shouldNotHaveReceived('error');
    $log->shouldNotHaveReceived('warning');

    $pull = Pull::query()->sole();
    expect(json_encode($pull->toArray()))->not->toContain(SCHEDULED_TOKEN);
});

// covers: AC-9
it('serialises to the job id and deployment id only', function () {
    $deployment = scheduledDeployment();

    $payload = serialize(new PullDeploymentJob($deployment->id));

    expect($payload)->not->toContain(SCHEDULED_TOKEN)
        ->and($payload)->not->toContain($deployment->base_url);
});
