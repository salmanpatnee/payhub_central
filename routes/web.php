<?php

use App\Http\Controllers\DeploymentController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\StaffController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/dashboard')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', HomeController::class)->name('dashboard');
    Route::resource('deployments', DeploymentController::class)
        ->only(['index', 'create', 'store', 'show', 'edit', 'update', 'destroy'])
        ->where(['deployment' => '[a-z0-9-]+']);
    Route::patch('deployments/{deployment}/active', [DeploymentController::class, 'active'])
        ->where('deployment', '[a-z0-9-]+')->name('deployments.active');
});

// `auth.session` logs out a session whose password hash is old, even if a request in flight wrote it back.
Route::middleware(['auth', 'verified', 'auth.session'])->group(function () {
    Route::resource('staff', StaffController::class)
        ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
        ->parameters(['staff' => 'user'])
        ->where(['user' => '[0-9]+']);
    Route::put('staff/{user}/password', [StaffController::class, 'password'])
        ->where('user', '[0-9]+')->name('staff.password');
});

require __DIR__.'/settings.php';
