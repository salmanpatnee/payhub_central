<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

it('has no public sign up route', function () {
    expect(Route::has('register'))->toBeFalse();
    $this->get('/register')->assertNotFound();
});

it('keeps the login page and sends guests away from the dashboard', function () {
    $this->get(route('login'))->assertOk();
    $this->get(route('dashboard'))->assertRedirect(route('login'));
});

it('runs without server side rendering', function () {
    expect(config('inertia.ssr.enabled'))->toBeFalse();
});

it('declares database backed queue, cache and sessions in .env.example', function () {
    $env = file_get_contents(base_path('.env.example'));

    expect($env)
        ->toContain('QUEUE_CONNECTION=database')
        ->toContain('CACHE_STORE=database')
        ->toContain('SESSION_DRIVER=database')
        ->toContain('DB_CONNECTION=mysql');
});

it('uses UTC for the app timezone', function () {
    expect(config('app.timezone'))->toBe('UTC');
});
