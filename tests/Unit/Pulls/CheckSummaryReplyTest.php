<?php

declare(strict_types=1);

use App\Actions\Pulls\CheckSummaryReply;
use App\Enums\PullFailureKind;
use Database\Factories\PullFactory;

/**
 * @param  Closure(array<string, mixed>): array<string, mixed>|null  $change
 * @return array<string, mixed>
 */
function checkedReply(?Closure $change = null): array
{
    $reply = PullFactory::sampleReply();

    return $change === null ? $reply : $change($reply);
}

// covers: AC-3
it('accepts the sample reply', function () {
    expect((new CheckSummaryReply)->passes(checkedReply()))->toBeTrue();
});

// covers: AC-3
it('accepts unknown keys and unknown currencies', function () {
    $reply = checkedReply(function (array $r) {
        $r['extra'] = ['anything' => true];
        $r['windows']['today']['money']['completed']['eur'] = 500;
        $r['windows']['today']['money']['pending']['jpy'] = 0;

        return $r;
    });

    expect((new CheckSummaryReply)->passes($reply))->toBeTrue();
});

// covers: AC-3
it('accepts a null app_release and empty money objects', function () {
    $reply = checkedReply(function (array $r) {
        $r['deployment']['app_release'] = null;
        $r['windows']['all_time']['money']['completed'] = [];

        return $r;
    });

    expect((new CheckSummaryReply)->passes($reply))->toBeTrue();
});

// covers: AC-6
it('refuses a reply that breaks a rule', function (string $label, Closure $change) {
    expect((new CheckSummaryReply)->passes(checkedReply($change)))->toBeFalse();
})->with([
    'generated_at missing' => ['generated_at missing', function (array $r) {
        unset($r['generated_at']);

        return $r;
    }],
    'generated_at not a date' => ['generated_at not a date', fn (array $r) => [...$r, 'generated_at' => 'not a real date at all !!']],
    'generated_at not text' => ['generated_at not text', fn (array $r) => [...$r, 'generated_at' => 12345]],
    'timezone empty' => ['timezone empty', fn (array $r) => [...$r, 'timezone' => '']],
    'timezone 65 characters' => ['timezone 65 characters', fn (array $r) => [...$r, 'timezone' => str_repeat('a', 65)]],
    'deployment missing' => ['deployment missing', function (array $r) {
        unset($r['deployment']);

        return $r;
    }],
    'app_release 65 characters' => ['app_release 65 characters', function (array $r) {
        $r['deployment']['app_release'] = str_repeat('a', 65);

        return $r;
    }],
    'app_release empty text' => ['app_release empty text', function (array $r) {
        $r['deployment']['app_release'] = '';

        return $r;
    }],
    'windows missing' => ['windows missing', function (array $r) {
        unset($r['windows']);

        return $r;
    }],
    'today window missing' => ['today window missing', function (array $r) {
        unset($r['windows']['today']);

        return $r;
    }],
    'today from missing' => ['today from missing', function (array $r) {
        unset($r['windows']['today']['from']);

        return $r;
    }],
    'today from null' => ['today from null', function (array $r) {
        $r['windows']['today']['from'] = null;

        return $r;
    }],
    'this_month to 41 characters' => ['this_month to 41 characters', function (array $r) {
        $r['windows']['this_month']['to'] = str_repeat('a', 41);

        return $r;
    }],
    'links total off by one' => ['links total off by one', function (array $r) {
        $r['windows']['today']['links']['total']++;

        return $r;
    }],
    'expired above pending' => ['expired above pending', function (array $r) {
        $r['windows']['today']['links']['expired'] = $r['windows']['today']['links']['pending'] + 1;

        return $r;
    }],
    'link count missing' => ['link count missing', function (array $r) {
        unset($r['windows']['today']['links']['failed']);

        return $r;
    }],
    'link count negative' => ['link count negative', function (array $r) {
        $r['windows']['today']['links']['pending'] = -1;

        return $r;
    }],
    'link count text' => ['link count text', function (array $r) {
        $r['windows']['today']['links']['failed'] = '1';

        return $r;
    }],
    'paid_count missing' => ['paid_count missing', function (array $r) {
        unset($r['windows']['today']['money']['paid_count']);

        return $r;
    }],
    'paid_count decimal' => ['paid_count decimal', function (array $r) {
        $r['windows']['today']['money']['paid_count'] = 1.5;

        return $r;
    }],
    'money negative' => ['money negative', function (array $r) {
        $r['windows']['today']['money']['completed']['usd'] = -5;

        return $r;
    }],
    'money decimal' => ['money decimal', function (array $r) {
        $r['windows']['today']['money']['completed']['usd'] = 1.5;

        return $r;
    }],
    'money text' => ['money text', function (array $r) {
        $r['windows']['today']['money']['completed']['usd'] = '100';

        return $r;
    }],
    'money pending missing' => ['money pending missing', function (array $r) {
        unset($r['windows']['today']['money']['pending']);

        return $r;
    }],
    'money as a list' => ['money as a list', function (array $r) {
        $r['windows']['today']['money']['completed'] = [100, 200];

        return $r;
    }],
    'currency key with a capital letter' => ['currency key with a capital letter', function (array $r) {
        $r['windows']['today']['money']['completed']['USD'] = 1;

        return $r;
    }],
    'currency key 17 characters' => ['currency key 17 characters', function (array $r) {
        $r['windows']['today']['money']['completed'][str_repeat('a', 17)] = 1;

        return $r;
    }],
]);

// covers: AC-4
it('has one fixed message per failure code and none is built from a response', function (PullFailureKind $kind) {
    expect($kind->message())->not->toBe('')
        ->and(strlen($kind->message()))->toBeLessThanOrEqual(255)
        ->and($kind->message())->not->toContain('http')
        ->and($kind->message())->not->toContain('Bearer');
})->with(PullFailureKind::cases());

// covers: AC-6
it('keeps the body only for the three codes that need it', function () {
    $keeping = collect(PullFailureKind::cases())->filter(fn (PullFailureKind $k) => $k->keepsBody())->map->value->values()->all();

    expect($keeping)->toEqualCanonicalizing(['bad_version', 'key_mismatch', 'invalid_reply']);
});
