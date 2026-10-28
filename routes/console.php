<?php

use App\Actions\Pulls\DispatchDuePulls;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Schedule::call(DispatchDuePulls::class)->name('pulls:dispatch')->everyFiveMinutes();

// The 2 minute overlap expiry stops a killed worker from blocking pulls for the default 24 hours.
Schedule::command('queue:work --stop-when-empty --max-time=50 --tries=1')->everyMinute()->withoutOverlapping(2);
