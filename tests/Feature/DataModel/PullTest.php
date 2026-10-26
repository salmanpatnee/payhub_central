<?php

declare(strict_types=1);

use App\Actions\Pulls\SaveGoodPull;
use App\Enums\AmountKind;
use App\Enums\PullFailureKind;
use App\Enums\PullSource;
use App\Enums\PullStatus;
use App\Enums\WindowName;
use App\Models\Deployment;
use App\Models\Pull;
use App\Models\PullWindow;
use App\Models\PullWindowAmount;
use App\Models\User;
use Database\Factories\PullFactory;

/**
 * @param  array<string, mixed>|null  $reply
 */
function savePull(Deployment $deployment, ?array $reply = null, PullSource $source = PullSource::Scheduled, ?int $userId = null): Pull
{
    $reply ??= PullFactory::sampleReply();

    return app(SaveGoodPull::class)->handle(
        $deployment, $source, $userId, $reply, json_encode($reply, JSON_THROW_ON_ERROR), now(),
    );
}

it('saves the sample reply and reads every count and cent back unchanged', function () {
    $reply = PullFactory::sampleReply();
    $body = PullFactory::sampleBody();
    $deployment = Deployment::factory()->create(['slug' => 'payhub1']);

    $pull = app(SaveGoodPull::class)->handle(
        $deployment, PullSource::Scheduled, null, $reply, $body, now(),
    )->fresh();

    expect($pull->status)->toBe(PullStatus::Success)
        ->and($pull->raw_reply)->toBe($body)
        ->and($pull->contract_version)->toBe('v1')
        ->and($pull->timezone)->toBe('Asia/Karachi')
        ->and($pull->app_release)->toBe('1fde13c')
        ->and($pull->generated_at->toIso8601String())->toBe('2026-10-26T09:05:00+00:00')
        ->and($pull->windows)->toHaveCount(4);

    foreach (WindowName::cases() as $name) {
        $expected = $reply['windows'][$name->value];
        $window = $pull->windows->firstWhere('name', $name);

        expect($window->starts_at)->toBe($expected['from'])
            ->and($window->ends_at)->toBe($expected['to'])
            ->and($window->links_total)->toBe($expected['links']['total'])
            ->and($window->links_pending)->toBe($expected['links']['pending'])
            ->and($window->links_completed)->toBe($expected['links']['completed'])
            ->and($window->links_failed)->toBe($expected['links']['failed'])
            ->and($window->links_cancelled)->toBe($expected['links']['cancelled'])
            ->and($window->links_expired)->toBe($expected['links']['expired'])
            ->and($window->paid_count)->toBe($expected['money']['paid_count']);

        foreach (AmountKind::cases() as $kind) {
            $stored = $window->amounts->where('kind', $kind)->pluck('cents', 'currency')->all();

            expect($stored)->toEqual($expected['money'][$kind->value]);
        }
    }
});

it('stores zero values and an unknown currency like any other', function () {
    $reply = PullFactory::sampleReply();
    $reply['windows']['today']['money']['completed']['eur'] = 12345;
    $pull = savePull(Deployment::factory()->create(), $reply);

    $today = $pull->windows()->where('name', WindowName::Today->value)->firstOrFail();
    $completed = $today->amounts()->where('kind', AmountKind::Completed->value)->pluck('cents', 'currency');

    expect($completed['eur'])->toBe(12345)
        ->and($completed['pkr'])->toBe(0);
});

it('leaves the edges of all_time empty and keeps the others as received', function () {
    $pull = savePull(Deployment::factory()->create());

    $allTime = $pull->windows()->where('name', WindowName::AllTime->value)->firstOrFail();
    $today = $pull->windows()->where('name', WindowName::Today->value)->firstOrFail();

    expect($allTime->starts_at)->toBeNull()
        ->and($allTime->ends_at)->toBeNull()
        ->and($today->starts_at)->toBe('2026-10-26T00:00:00+05:00');
});

it('finds the latest good pull after a newer failed pull and when pulls share a second', function () {
    $deployment = Deployment::factory()->create();
    $at = now()->startOfSecond();

    $olderGood = Pull::factory()->for($deployment)->create(['pulled_at' => $at->copy()->subMinutes(10)]);
    $newerGood = Pull::factory()->for($deployment)->create(['pulled_at' => $at->copy()->subMinute()]);
    $sameSecond = Pull::factory()->for($deployment)->create(['pulled_at' => $at->copy()->subMinute()]);
    $failed = Pull::factory()->for($deployment)->failed()->create(['pulled_at' => $at]);

    $deployment = Deployment::query()->with(['latestGoodPull', 'latestPull'])->findOrFail($deployment->id);

    expect($deployment->latestGoodPull->id)->toBe($sameSecond->id)
        ->and($deployment->latestPull->id)->toBe($failed->id)
        ->and($olderGood->id)->not->toBe($newerGood->id);
});

it('has no latest good pull when only failed pulls exist', function () {
    $deployment = Deployment::factory()->create();
    Pull::factory()->for($deployment)->failed()->create();

    expect($deployment->latestGoodPull()->first())->toBeNull();
});

it('saves a failed pull with its reason and no windows or raw reply', function () {
    $deployment = Deployment::factory()->create();

    $pull = Pull::factory()->for($deployment)->failed(PullFailureKind::InvalidReply, 200)->create()->fresh();

    expect($pull->status)->toBe(PullStatus::Failed)
        ->and($pull->failure_kind)->toBe(PullFailureKind::InvalidReply)
        ->and($pull->http_status)->toBe(200)
        ->and($pull->failure_message)->not->toBeNull()
        ->and($pull->failure_body)->not->toBeNull()
        ->and($pull->raw_reply)->toBeNull()
        ->and($pull->windows)->toHaveCount(0);
});

it('keeps a body only for the three codes that allow it', function () {
    $kept = collect(PullFailureKind::cases())->filter->keepsBody()->map->value->sort()->values()->all();

    expect($kept)->toBe(['bad_version', 'invalid_reply', 'key_mismatch']);
});

it('leaves no pull behind when a window is missing', function () {
    $reply = PullFactory::sampleReply();
    unset($reply['windows']['last_30_days']);

    expect(fn () => savePull(Deployment::factory()->create(), $reply))
        ->toThrow(InvalidArgumentException::class);

    expect(Pull::query()->count())->toBe(0)
        ->and(PullWindow::query()->count())->toBe(0)
        ->and(PullWindowAmount::query()->count())->toBe(0);
});

it('leaves no pull behind when a money row is bad', function (string $currency, mixed $cents) {
    $reply = PullFactory::sampleReply();
    $reply['windows']['today']['money']['pending'][$currency] = $cents;

    expect(fn () => savePull(Deployment::factory()->create(), $reply))
        ->toThrow(InvalidArgumentException::class);

    expect(Pull::query()->count())->toBe(0)
        ->and(PullWindow::query()->count())->toBe(0);
})->with([
    'upper case currency' => ['EUR', 100],
    'float cents' => ['eur', 10.5],
    'negative cents' => ['eur', -1],
]);

it('deletes windows and amounts together with their pull', function () {
    $pull = savePull(Deployment::factory()->create());

    expect(PullWindow::query()->count())->toBe(4)
        ->and(PullWindowAmount::query()->count())->toBeGreaterThan(0);

    $pull->delete();

    expect(PullWindow::query()->count())->toBe(0)
        ->and(PullWindowAmount::query()->count())->toBe(0);
});

it('records the staff member for a manual pull and none for a scheduled pull', function () {
    $user = User::factory()->create();
    $deployment = Deployment::factory()->create();

    $manual = savePull($deployment, source: PullSource::Manual, userId: $user->id);
    $scheduled = savePull($deployment, source: PullSource::Scheduled, userId: $user->id);

    expect($manual->fresh()->triggered_by)->toBe($user->id)
        ->and($scheduled->fresh()->triggered_by)->toBeNull();
});

it('keeps a manual pull when its user is removed', function () {
    $user = User::factory()->create();
    $pull = Pull::factory()->for(Deployment::factory())->manual($user)->create();

    $user->delete();

    expect($pull->fresh())->not->toBeNull()
        ->and($pull->fresh()->triggered_by)->toBeNull();
});

it('does not keep an updated_at on a pull', function () {
    $pull = Pull::factory()->for(Deployment::factory())->create();

    expect($pull->getAttributes())->not->toHaveKey('updated_at')
        ->and($pull->created_at)->not->toBeNull();
});
