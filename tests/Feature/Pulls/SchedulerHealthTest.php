<?php

declare(strict_types=1);

use App\Actions\Pulls\SaveFailedPull;
use App\Actions\Scheduler\SchedulerHealth;
use App\Enums\PullFailureKind;
use App\Enums\PullSource;
use App\Models\Deployment;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Testing\AssertableInertia as Assert;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

beforeEach(function () {
    Carbon::setTestNow('2026-10-28 12:00:00');
});

afterEach(fn () => Carbon::setTestNow());

function setHeartbeat(int $secondsAgo): void
{
    Cache::forever('scheduler:heartbeat', now()->getTimestamp() - $secondsAgo);
}

function addWaitingJob(int $secondsOld, bool $reserved = false): void
{
    DB::table('jobs')->insert([
        'queue' => 'default',
        'payload' => '{}',
        'attempts' => 0,
        'reserved_at' => $reserved ? now()->getTimestamp() : null,
        'available_at' => now()->getTimestamp(),
        'created_at' => now()->getTimestamp() - $secondsOld,
    ]);
}

function addFailedJob(int $secondsAgo): void
{
    DB::table('failed_jobs')->insert([
        'uuid' => (string) Str::uuid(),
        'connection' => 'database',
        'queue' => 'default',
        'payload' => '{}',
        'exception' => 'boom',
        'failed_at' => now()->subSeconds($secondsAgo)->utc(),
    ]);
}

// covers: AC-8
it('is stale when there is no heartbeat', function () {
    expect(app(SchedulerHealth::class)->isStale())->toBeTrue();
});

// covers: AC-8
it('is stale when the heartbeat is 11 minutes old', function () {
    setHeartbeat(11 * 60);

    expect(app(SchedulerHealth::class)->isStale())->toBeTrue();
});

// covers: AC-8
it('is not stale with a fresh heartbeat and nothing old in the queue', function () {
    setHeartbeat(120);

    expect(app(SchedulerHealth::class)->isStale())->toBeFalse();
});

// covers: AC-8
it('is not stale when the heartbeat is exactly at the 10 minute limit', function () {
    setHeartbeat(600);

    expect(app(SchedulerHealth::class)->isStale())->toBeFalse();
});

// covers: AC-8
it('is stale when a waiting job is 11 minutes old', function () {
    setHeartbeat(60);
    addWaitingJob(11 * 60);

    expect(app(SchedulerHealth::class)->isStale())->toBeTrue();
});

// covers: AC-8
it('is not stale when an old job is already being worked on', function () {
    setHeartbeat(60);
    addWaitingJob(11 * 60, reserved: true);

    expect(app(SchedulerHealth::class)->isStale())->toBeFalse();
});

// covers: AC-8
it('is not stale when a waiting job is young', function () {
    setHeartbeat(60);
    addWaitingJob(2 * 60);

    expect(app(SchedulerHealth::class)->isStale())->toBeFalse();
});

// covers: AC-8
it('is stale when a job failed 5 minutes ago', function () {
    setHeartbeat(60);
    addFailedJob(5 * 60);

    expect(app(SchedulerHealth::class)->isStale())->toBeTrue();
});

// covers: AC-8
it('is not stale when the only failed job is 11 minutes old', function () {
    setHeartbeat(60);
    addFailedJob(11 * 60);

    expect(app(SchedulerHealth::class)->isStale())->toBeFalse();
});

// covers: AC-8
it('ignores a heartbeat that is not a number', function () {
    Cache::forever('scheduler:heartbeat', 'yesterday');

    expect(app(SchedulerHealth::class)->isStale())->toBeTrue();
});

// covers: AC-8
it('beat stores a unix timestamp for now and clears a stale state', function () {
    app(SchedulerHealth::class)->beat();

    expect(Cache::get('scheduler:heartbeat'))->toBe(now()->getTimestamp())
        ->and(app(SchedulerHealth::class)->isStale())->toBeFalse();
});

// covers: AC-8
it('shares scheduler.stale as true with a logged in user when there is no heartbeat', function () {
    actingAs(User::factory()->create())
        ->get(route('dashboard'))
        ->assertInertia(fn (Assert $page) => $page->where('scheduler.stale', true));
});

// covers: AC-8
it('shares scheduler.stale as false with a logged in user after a heartbeat', function () {
    app(SchedulerHealth::class)->beat();

    actingAs(User::factory()->create())
        ->get(route('dashboard'))
        ->assertInertia(fn (Assert $page) => $page->where('scheduler.stale', false));
});

// covers: AC-8
it('shares scheduler as null for guests', function () {
    get(route('login'))
        ->assertInertia(fn (Assert $page) => $page->where('scheduler', null));
});

// ---------------------------------------------------------------- SaveFailedPull

it('saves a failed pull with the given source, no triggering user and no windows', function () {
    $deployment = Deployment::factory()->create();

    $pull = app(SaveFailedPull::class)->handle(
        $deployment,
        PullFailureKind::Unavailable,
        503,
        '',
        now(),
        PullSource::Scheduled,
    );

    expect($pull->source)->toBe(PullSource::Scheduled)
        ->and($pull->triggered_by)->toBeNull()
        ->and($pull->failure_kind)->toBe(PullFailureKind::Unavailable)
        ->and($pull->http_status)->toBe(503)
        ->and($pull->failure_body)->toBeNull();
});

// covers: AC-2
it('saves pulled_at in UTC', function () {
    $deployment = Deployment::factory()->create();

    $pull = app(SaveFailedPull::class)->handle(
        $deployment,
        PullFailureKind::Network,
        null,
        '',
        now()->setTimezone('Asia/Karachi'),
        PullSource::Scheduled,
    );

    expect($pull->pulled_at->getTimezone()->getName())->toBe('UTC')
        ->and($pull->pulled_at->toDateTimeString())->toBe('2026-10-28 12:00:00');
});

it('keeps at most 2048 bytes of a body for kinds that keep it, without cutting a character in half', function () {
    $deployment = Deployment::factory()->create();
    $kind = collect(PullFailureKind::cases())->first(fn (PullFailureKind $case) => $case->keepsBody());
    $body = str_repeat('é', 2000);

    $pull = app(SaveFailedPull::class)->handle($deployment, $kind, 200, $body, now(), PullSource::Scheduled);

    expect(strlen($pull->failure_body))->toBeLessThanOrEqual(2048)
        ->and(mb_check_encoding($pull->failure_body, 'UTF-8'))->toBeTrue();
});

it('saves no body for kinds that do not keep it', function () {
    $deployment = Deployment::factory()->create();
    $kind = collect(PullFailureKind::cases())->first(fn (PullFailureKind $case) => ! $case->keepsBody());

    $pull = app(SaveFailedPull::class)->handle($deployment, $kind, 500, 'secret body', now(), PullSource::Manual);

    expect($pull->failure_body)->toBeNull();
});
