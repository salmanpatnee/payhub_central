<?php

declare(strict_types=1);

use App\Actions\Pulls\SaveGoodPull;
use App\Enums\PullFailureKind;
use App\Enums\PullSource;
use App\Enums\PullStatus;
use App\Models\Deployment;
use App\Models\Pull;
use App\Models\PullWindowAmount;
use Carbon\CarbonInterface;
use Database\Factories\PullFactory;
use GuzzleHttp\Exception\ConnectTimeoutException;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\Factory;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

const PULL_TOKEN = 'TESTTOKEN-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

/**
 * @param  Closure(array<string, mixed>): array<string, mixed>|null  $change
 */
function summaryBody(?Closure $change = null): string
{
    $reply = PullFactory::sampleReply();

    return json_encode($change === null ? $reply : $change($reply), JSON_THROW_ON_ERROR);
}

/**
 * @param  array<string, mixed>  $attributes
 */
function pullDeployment(array $attributes = []): Deployment
{
    return Deployment::factory()->create([
        'slug' => 'payhub1',
        'base_url' => 'https://payhub1.example.test',
        'token' => PULL_TOKEN,
        ...$attributes,
    ]);
}

/**
 * @return array{0: int, 1: string}
 */
function runPull(string $key = 'payhub1'): array
{
    $exit = Artisan::call('pulls:run', ['key' => $key]);

    return [$exit, trim(Artisan::output())];
}

function lastPull(Deployment $deployment): Pull
{
    return Pull::query()->where('deployment_id', $deployment->id)->latest('id')->firstOrFail();
}

// ---------------------------------------------------------------- a good pull

// covers: AC-1, AC-3
it('saves a good pull from the sample reply and prints one line', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response(PullFactory::sampleBody(), 200)]);

    [$exit, $output] = runPull();

    $pull = lastPull($deployment);

    expect($exit)->toBe(0)
        ->and($output)->toBe("Pull #{$pull->id} for payhub1: good")
        ->and($pull->status)->toBe(PullStatus::Success)
        ->and($pull->source)->toBe(PullSource::Manual)
        ->and($pull->triggered_by)->toBeNull()
        ->and($pull->windows()->count())->toBe(4)
        ->and($pull->raw_reply)->toBe(PullFactory::sampleBody());
});

// covers: AC-2
it('makes one GET call to the fixed path with the token and Accept header', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response(PullFactory::sampleBody(), 200)]);

    runPull();

    Http::assertSentCount(1);
    Http::assertSent(fn (Request $request) => $request->method() === 'GET'
        && $request->url() === $deployment->base_url.'/api/central/v1/summary'
        && $request->header('Authorization') === ['Bearer '.PULL_TOKEN]
        && str_contains(implode(',', $request->header('Accept')), 'application/json'));
});

// covers: AC-1
it('finds the deployment whatever the case of the key', function () {
    pullDeployment();
    Http::fake(['*' => Http::response(PullFactory::sampleBody(), 200)]);

    [$exit, $output] = runPull('PAYHUB1');

    expect($exit)->toBe(0)->and($output)->toContain('for payhub1: good');
});

// covers: AC-1
it('refuses an unknown key and a removed deployment without a call', function () {
    pullDeployment(['slug' => 'gone1'])->delete();
    Http::fake();

    [$unknownExit, $unknownOutput] = runPull('nope');
    [$removedExit, $removedOutput] = runPull('gone1');

    expect($unknownExit)->toBe(1)->and($unknownOutput)->toStartWith('Not pulled')
        ->and($removedExit)->toBe(1)->and($removedOutput)->toStartWith('Not pulled')
        ->and(Pull::query()->count())->toBe(0);
    Http::assertNothingSent();
});

// covers: AC-3
it('saves unknown keys and unknown currencies', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response(summaryBody(function (array $r) {
        $r['extra'] = ['anything' => true];
        foreach (array_keys($r['windows']) as $name) {
            $r['windows'][$name]['money']['completed']['eur'] = 100;
        }

        return $r;
    }), 200)]);

    [$exit] = runPull();

    $pull = lastPull($deployment);

    expect($exit)->toBe(0)
        ->and(PullWindowAmount::query()->whereIn('pull_window_id', $pull->windows()->pluck('id'))->where('currency', 'eur')->count())->toBe(4);
});

// covers: AC-3
it('saves a null app_release as null', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response(summaryBody(function (array $r) {
        $r['deployment']['app_release'] = null;

        return $r;
    }), 200)]);

    [$exit] = runPull();

    expect($exit)->toBe(0)
        ->and(lastPull($deployment)->app_release)->toBeNull()
        ->and(lastPull($deployment)->status)->toBe(PullStatus::Success);
});

// covers: AC-3
it('sets pulled_at when the call finishes', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response(PullFactory::sampleBody(), 200)]);
    Carbon::setTestNow(now()->startOfSecond());

    runPull();

    expect(lastPull($deployment)->pulled_at->equalTo(now()))->toBeTrue();
});

// ----------------------------------------------------------- status mapping

// covers: AC-4
it('saves a failed pull with the right code and status', function (int $status, string $code) {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response($status === 204 ? '' : 'x', $status)]);

    [$exit, $output] = runPull();

    $pull = lastPull($deployment);

    expect($exit)->toBe(1)
        ->and($output)->toBe("Pull #{$pull->id} for payhub1: failed ({$code}, HTTP {$status})")
        ->and($pull->status)->toBe(PullStatus::Failed)
        ->and($pull->failure_kind->value)->toBe($code)
        ->and($pull->http_status)->toBe($status)
        ->and($pull->failure_message)->toBe($pull->failure_kind->message())
        ->and($pull->windows()->count())->toBe(0)
        ->and($pull->raw_reply)->toBeNull()
        ->and($pull->failure_body)->toBeNull()
        ->and($pull->contract_version)->toBeNull()
        ->and($pull->generated_at)->toBeNull()
        ->and($pull->timezone)->toBeNull()
        ->and($pull->app_release)->toBeNull()
        ->and($pull->source)->toBe(PullSource::Manual)
        ->and($pull->triggered_by)->toBeNull();
})->with([
    '401' => [401, 'unauthenticated'],
    '403' => [403, 'https_required'],
    '404' => [404, 'not_found'],
    '429' => [429, 'rate_limited'],
    '500' => [500, 'unavailable'],
    '503' => [503, 'unavailable'],
    '201' => [201, 'unavailable'],
    '204' => [204, 'unavailable'],
]);

// covers: AC-2, AC-5
it('saves a redirect as failed and never follows it', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response('', 302, ['Location' => 'https://evil.example.test/steal'])]);

    [$exit, $output] = runPull();

    expect($exit)->toBe(1)
        ->and(lastPull($deployment)->failure_kind)->toBe(PullFailureKind::Redirect)
        ->and(lastPull($deployment)->http_status)->toBe(302)
        ->and($output)->not->toContain('evil.example.test');
    Http::assertSentCount(1);
});

// covers: AC-5
it('saves a timeout and other connection problems without an HTTP status', function (string $message, PullFailureKind $kind) {
    $deployment = pullDeployment();
    Http::fake(['*' => fn () => throw new ConnectionException($message)]);

    [$exit] = runPull();

    expect($exit)->toBe(1)
        ->and(lastPull($deployment)->failure_kind)->toBe($kind)
        ->and(lastPull($deployment)->http_status)->toBeNull();
})->with([
    'timed out' => ['cURL error 28: Operation timed out after 10001 milliseconds', PullFailureKind::Timeout],
    'name not found' => ['cURL error 6: Could not resolve host', PullFailureKind::Network],
    'connection refused' => ['cURL error 7: Failed to connect', PullFailureKind::Network],
    'tls error' => ['cURL error 60: SSL certificate problem', PullFailureKind::Network],
]);

// covers: AC-5
it('saves a timeout raised as a Guzzle timeout class', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => fn () => throw new ConnectionException(
        'Connection failed',
        0,
        new ConnectTimeoutException('x', new GuzzleHttp\Psr7\Request('GET', 'https://x.test')),
    )]);

    runPull();

    expect(lastPull($deployment)->failure_kind)->toBe(PullFailureKind::Timeout);
});

// ------------------------------------------------------------ reply checks

// covers: AC-6
it('saves a version problem as bad_version and keeps the body', function (Closure $change) {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response(summaryBody($change), 200)]);

    [$exit] = runPull();

    $pull = lastPull($deployment);

    expect($exit)->toBe(1)
        ->and($pull->failure_kind)->toBe(PullFailureKind::BadVersion)
        ->and($pull->http_status)->toBe(200)
        ->and($pull->failure_body)->not->toBeNull()
        ->and(strlen((string) $pull->failure_body))->toBeLessThanOrEqual(2048);
})->with([
    'v2' => [fn (array $r) => [...$r, 'contract_version' => 'v2']],
    'missing' => [function (array $r) {
        unset($r['contract_version']);

        return $r;
    }],
    'a number' => [fn (array $r) => [...$r, 'contract_version' => 1]],
    'capital V' => [fn (array $r) => [...$r, 'contract_version' => 'V1']],
]);

// covers: AC-6
it('saves a key problem as key_mismatch and keeps the body', function (mixed $key) {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response(summaryBody(function (array $r) use ($key) {
        $r['deployment']['key'] = $key;

        return $r;
    }), 200)]);

    runPull();

    expect(lastPull($deployment)->failure_kind)->toBe(PullFailureKind::KeyMismatch)
        ->and(lastPull($deployment)->failure_body)->not->toBeNull();
})->with([
    'another key' => ['other'],
    'different case' => ['PAYHUB1'],
    'null' => [null],
    'a number' => [1],
]);

// covers: AC-6
it('checks the version before the key', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response(summaryBody(fn (array $r) => [...$r, 'contract_version' => 'v2', 'deployment' => ['key' => 'other']]), 200)]);

    runPull();

    expect(lastPull($deployment)->failure_kind)->toBe(PullFailureKind::BadVersion);
});

// covers: AC-6
it('saves a broken reply as invalid_reply with no database error', function (string $body) {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response($body, 200)]);

    [$exit, $output] = runPull();

    $pull = lastPull($deployment);

    expect($exit)->toBe(1)
        ->and($pull->failure_kind)->toBe(PullFailureKind::InvalidReply)
        ->and($pull->http_status)->toBe(200)
        ->and(strlen((string) $pull->failure_body))->toBeLessThanOrEqual(2048)
        ->and($pull->windows()->count())->toBe(0)
        ->and($output)->not->toContain('SQL');
})->with([
    'not JSON' => ['this is not json'],
    'empty body' => [''],
    'a JSON list' => ['[1,2]'],
    'a JSON string' => ['"v1"'],
    'over 64 KB' => [fn () => summaryBody(fn (array $r) => [...$r, 'pad' => str_repeat('x', 70000)])],
    'links do not add up' => [fn () => summaryBody(function (array $r) {
        $r['windows']['today']['links']['total']++;

        return $r;
    })],
    'a negative money value' => [fn () => summaryBody(function (array $r) {
        $r['windows']['today']['money']['completed']['usd'] = -5;

        return $r;
    })],
    'a decimal money value' => [fn () => summaryBody(function (array $r) {
        $r['windows']['today']['money']['completed']['usd'] = 1.5;

        return $r;
    })],
    'a missing window' => [fn () => summaryBody(function (array $r) {
        unset($r['windows']['today']);

        return $r;
    })],
    'a 65 character timezone' => [fn () => summaryBody(fn (array $r) => [...$r, 'timezone' => str_repeat('a', 65)])],
]);

// covers: AC-6
it('keeps at most 2 KB of the body and always valid UTF-8', function (string $body) {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response($body, 200)]);

    runPull();

    $kept = (string) lastPull($deployment)->failure_body;

    expect(strlen($kept))->toBeLessThanOrEqual(2048)
        ->and(mb_check_encoding($kept, 'UTF-8'))->toBeTrue();
})->with([
    'bad bytes' => ["\xff\xfe not json \xc3"],
    'long multibyte text' => [fn () => str_repeat('é', 3000)],
]);

// -------------------------------------------------------------- 429 waiting

// covers: AC-7
it('waits after a 429 as long as Retry-After says, within 0 and 1 hour', function (?Closure $header, int $seconds) {
    $deployment = pullDeployment();
    Carbon::setTestNow(now()->startOfSecond());
    Http::fake(['*' => Http::response('x', 429, $header === null ? [] : ['Retry-After' => $header()])]);

    runPull();

    expect($deployment->fresh()->do_not_pull_before->equalTo(now()->addSeconds($seconds)))->toBeTrue();
})->with([
    'whole seconds' => [fn () => '120', 120],
    'an HTTP date' => [fn () => gmdate(DATE_RFC7231, now()->addSeconds(300)->getTimestamp()), 300],
    'no header' => [null, 60],
    'negative' => [fn () => '-5', 60],
    'unreadable text' => [fn () => 'soon', 60],
    'a past date' => [fn () => gmdate(DATE_RFC7231, now()->subSeconds(500)->getTimestamp()), 60],
    'more than an hour' => [fn () => '99999', 3600],
    'an absurdly long number' => [fn () => str_repeat('9', 30), 3600],
]);

// covers: AC-7
it('measures the 429 wait from the app clock', function () {
    $deployment = pullDeployment();
    Carbon::setTestNow(now()->addDay()->startOfSecond());
    Http::fake(['*' => Http::response('x', 429, ['Retry-After' => '120'])]);

    runPull();

    expect($deployment->fresh()->do_not_pull_before->equalTo(now()->addSeconds(120)))->toBeTrue();
});

// covers: AC-7, AC-8
it('refuses the next pull while the 429 wait lasts', function () {
    pullDeployment();
    Http::fake(['*' => Http::response('x', 429, ['Retry-After' => '120'])]);
    runPull();

    [$exit, $output] = runPull();

    expect($exit)->toBe(1)
        ->and($output)->toStartWith('Not pulled')
        ->and(Pull::query()->count())->toBe(1);
    Http::assertSentCount(1);
});

// covers: AC-7, AC-11
it('does not update or save anything when the deployment is removed during a 429', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => function () use ($deployment) {
        $deployment->delete();

        return Http::response('x', 429, ['Retry-After' => '120']);
    }]);

    [$exit, $output] = runPull();

    expect($exit)->toBe(1)
        ->and($output)->toStartWith('Not pulled')
        ->and(Pull::query()->count())->toBe(0)
        ->and(Deployment::withTrashed()->find($deployment->id)->do_not_pull_before)->toBeNull();
});

// ------------------------------------------------------------------ refusals

// covers: AC-8
it('does not call or save when the deployment is paused', function () {
    pullDeployment(['is_active' => false]);
    Http::fake();

    [$exit, $output] = runPull();

    expect($exit)->toBe(1)->and($output)->toStartWith('Not pulled: ')->and($output)->toContain('paused')
        ->and(Pull::query()->count())->toBe(0);
    Http::assertNothingSent();
});

// covers: AC-8
it('does not call or save while waiting, and names the time', function () {
    $until = now()->addMinutes(5)->startOfSecond();
    pullDeployment(['do_not_pull_before' => $until]);
    Http::fake();

    [$exit, $output] = runPull();

    expect($exit)->toBe(1)->and($output)->toStartWith('Not pulled: ')
        ->and($output)->toContain($until->format('Y-m-d H:i:s'))
        ->and(Pull::query()->count())->toBe(0);
    Http::assertNothingSent();
});

// covers: AC-8
it('pulls again once the wait has passed', function () {
    pullDeployment(['do_not_pull_before' => now()->subMinute()]);
    Http::fake(['*' => Http::response(PullFactory::sampleBody(), 200)]);

    [$exit] = runPull();

    expect($exit)->toBe(0);
});

// covers: AC-8
it('does not call or save while another pull holds the lock', function () {
    $deployment = pullDeployment();
    Http::fake();
    $lock = Cache::lock("pull:deployment:{$deployment->id}", 30);
    $lock->get();

    [$exit, $output] = runPull();
    $lock->release();

    expect($exit)->toBe(1)->and($output)->toContain('already running')
        ->and(Pull::query()->count())->toBe(0);
    Http::assertNothingSent();
});

// covers: AC-8
it('releases the lock after a pull so the next one can run', function () {
    pullDeployment();
    Http::fake(['*' => Http::response('x', 500)]);

    runPull();
    [$exit, $output] = runPull();

    expect($output)->not->toContain('already running')->and($exit)->toBe(1)
        ->and(Pull::query()->count())->toBe(2);
});

// ----------------------------------------------------- earlier good pull kept

// covers: AC-9
it('never changes or removes the last good pull when later pulls fail', function (Closure $response) {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response(PullFactory::sampleBody(), 200)]);
    runPull();
    $good = $deployment->fresh()->latestGoodPull;
    $before = $good->only(['id', 'raw_reply', 'generated_at', 'pulled_at']);

    Http::swap(new Factory);
    Http::fake(['*' => $response()]);
    Carbon::setTestNow(now()->addMinutes(5));
    runPull();

    $after = $deployment->fresh()->latestGoodPull;

    expect(lastPull($deployment)->status)->toBe(PullStatus::Failed)
        ->and($after->id)->toBe($good->id)
        ->and($after->only(['id', 'raw_reply', 'generated_at', 'pulled_at']))->toEqual($before)
        ->and($after->windows()->count())->toBe(4);
})->with([
    'a 500' => [fn () => fn () => Http::response('x', 500)],
    'a 401' => [fn () => fn () => Http::response('x', 401)],
    'a broken reply' => [fn () => fn () => Http::response('nope', 200)],
    'a wrong version' => [fn () => fn () => Http::response(summaryBody(fn (array $r) => [...$r, 'contract_version' => 'v9']), 200)],
    'a timeout' => [fn () => fn () => throw new ConnectionException('cURL error 28: timed out')],
]);

// ----------------------------------------------------------- token handling

// covers: AC-10
it('saves token_unreadable and makes no call when the token cannot be read', function (?string $raw) {
    $deployment = pullDeployment();
    DB::table('deployments')->where('id', $deployment->id)->update(['token' => $raw]);
    Http::fake();

    [$exit] = runPull();

    expect($exit)->toBe(1)
        ->and(lastPull($deployment)->failure_kind)->toBe(PullFailureKind::TokenUnreadable)
        ->and(lastPull($deployment)->http_status)->toBeNull();
    Http::assertNothingSent();
})->with([
    'null' => [null],
    'empty' => [''],
    'not encrypted' => ['garbage-not-encrypted'],
    'encrypted empty text' => [fn () => Crypt::encryptString('')],
]);

// covers: AC-10
it('puts no token or URL in any saved message, body or command output', function (Closure $response) {
    $deployment = pullDeployment();
    Http::fake(['*' => $response()]);
    $outputs = [];

    $outputs[] = runPull()[1];

    $pull = lastPull($deployment);
    $saved = $pull->failure_message.' '.$pull->failure_body;

    foreach ([PULL_TOKEN, 'payhub1.example.test'] as $secret) {
        expect($saved)->not->toContain($secret)->and($outputs[0])->not->toContain($secret);
    }
})->with([
    '401' => [fn () => fn () => Http::response('x', 401)],
    '429' => [fn () => fn () => Http::response('x', 429)],
    '500' => [fn () => fn () => Http::response('x', 500)],
    'a redirect' => [fn () => fn () => Http::response('', 302, ['Location' => 'https://payhub1.example.test/x'])],
    'a timeout' => [fn () => fn () => throw new ConnectionException('cURL error 28 for https://payhub1.example.test Bearer '.PULL_TOKEN)],
    'a connection error' => [fn () => fn () => throw new ConnectionException('cURL error 6 for https://payhub1.example.test')],
    'a broken reply' => [fn () => fn () => Http::response('nope', 200)],
]);

// covers: AC-10
it('saves a failed pull and shows no token when the call throws any error', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => fn () => throw new RuntimeException('boom '.PULL_TOKEN)]);

    [$exit, $output] = runPull();

    expect($exit)->toBe(1)
        ->and($output)->not->toContain(PULL_TOKEN)
        ->and(lastPull($deployment)->failure_kind)->toBe(PullFailureKind::Network)
        ->and((string) lastPull($deployment)->failure_message)->not->toContain(PULL_TOKEN);
});

// covers: AC-10
it('saves invalid_reply and shows no token when saving a good pull throws any error', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response(PullFactory::sampleBody(), 200)]);
    app()->bind(SaveGoodPull::class, fn () => new class extends SaveGoodPull
    {
        public function handle(Deployment $deployment, PullSource $source, ?int $triggeredBy, array $reply, string $rawBody, CarbonInterface $pulledAt): Pull
        {
            throw new RuntimeException('boom '.PULL_TOKEN);
        }
    });

    [$exit, $output] = runPull();

    $pull = lastPull($deployment);

    expect($exit)->toBe(1)
        ->and($output)->not->toContain(PULL_TOKEN)
        ->and($pull->failure_kind)->toBe(PullFailureKind::InvalidReply)
        ->and($pull->status)->toBe(PullStatus::Failed)
        ->and($pull->windows()->count())->toBe(0);
});

// ------------------------------------------------------------------ removed

// covers: AC-11
it('saves nothing when the deployment is removed during the call', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => function () use ($deployment) {
        $deployment->delete();

        return Http::response(PullFactory::sampleBody(), 200);
    }]);

    [$exit, $output] = runPull();

    expect($exit)->toBe(1)->and($output)->toStartWith('Not pulled')
        ->and(Pull::query()->count())->toBe(0);
});

// covers: AC-2
it('reads the base URL and token from the deployment each time', function () {
    $deployment = pullDeployment();
    Http::fake(['*' => Http::response(PullFactory::sampleBody(), 200)]);
    runPull();

    DB::table('deployments')->where('id', $deployment->id)->update([
        'base_url' => 'https://other-host.example.test',
        'token' => Crypt::encryptString('NEWTOKEN'),
        'do_not_pull_before' => null,
    ]);
    Http::swap(new Factory);
    Http::fake(['*' => Http::response(PullFactory::sampleBody(), 200)]);
    runPull();

    Http::assertSent(fn (Request $request) => $request->url() === 'https://other-host.example.test/api/central/v1/summary'
        && $request->header('Authorization') === ['Bearer NEWTOKEN']);
});
