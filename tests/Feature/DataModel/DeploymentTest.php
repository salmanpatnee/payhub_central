<?php

declare(strict_types=1);

use App\Models\Deployment;
use App\Models\Pull;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

it('refuses a second deployment with the same slug', function () {
    Deployment::factory()->create(['slug' => 'payhub1']);

    expect(fn () => Deployment::factory()->create(['slug' => 'payhub1']))
        ->toThrow(QueryException::class);
});

it('refuses the same slug in another case', function () {
    Deployment::factory()->create(['slug' => 'payhub1']);

    expect(fn () => Deployment::factory()->create(['slug' => 'PayHub1']))
        ->toThrow(QueryException::class);
});

it('keeps a removed deployment slug reserved', function () {
    Deployment::factory()->create(['slug' => 'payhub1'])->delete();

    expect(fn () => Deployment::factory()->create(['slug' => 'payhub1']))
        ->toThrow(QueryException::class);
});

it('stores the token encrypted and hides it from serialized output', function () {
    $deployment = Deployment::factory()->create(['token' => 'plain-secret-token']);

    $stored = DB::table('deployments')->where('id', $deployment->id)->value('token');

    expect($stored)->not->toBe('plain-secret-token')
        ->and($stored)->not->toContain('plain-secret-token')
        ->and($deployment->fresh()->token)->toBe('plain-secret-token')
        ->and($deployment->toArray())->not->toHaveKey('token')
        ->and($deployment->toJson())->not->toContain('plain-secret-token');
});

it('lets the token be wiped', function () {
    $deployment = Deployment::factory()->create();

    $deployment->update(['token' => null]);

    expect(DB::table('deployments')->where('id', $deployment->id)->value('token'))->toBeNull();
});

it('keeps pulls when a deployment is soft deleted', function () {
    $deployment = Deployment::factory()->create();
    Pull::factory()->for($deployment)->create();

    $deployment->delete();

    expect(Deployment::query()->count())->toBe(0)
        ->and(Deployment::withTrashed()->count())->toBe(1)
        ->and(Pull::query()->count())->toBe(1);
});

it('refuses to hard delete a deployment that has pulls', function () {
    $deployment = Deployment::factory()->create();
    Pull::factory()->for($deployment)->create();

    expect(fn () => $deployment->forceDelete())->toThrow(QueryException::class);
    expect(Deployment::withTrashed()->count())->toBe(1);
});
