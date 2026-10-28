<?php

use App\Http\Controllers\DeploymentController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/dashboard')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', HomeController::class)->name('dashboard');
    Route::resource('deployments', DeploymentController::class)
        ->only(['create', 'store', 'show', 'edit', 'update', 'destroy'])
        ->where(['deployment' => '[a-z0-9-]+']);
    Route::patch('deployments/{deployment}/active', [DeploymentController::class, 'active'])
        ->where('deployment', '[a-z0-9-]+')->name('deployments.active');
});

require __DIR__.'/settings.php';
