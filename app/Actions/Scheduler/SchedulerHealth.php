<?php

declare(strict_types=1);

namespace App\Actions\Scheduler;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * Is the scheduler healthy? The dispatcher writes a heartbeat every run, and the banner reads it,
 * together with the oldest waiting job and the newest failed job.
 */
class SchedulerHealth
{
    private const HEARTBEAT_KEY = 'scheduler:heartbeat';

    private const LIMIT_SECONDS = 600;

    public function beat(): void
    {
        Cache::forever(self::HEARTBEAT_KEY, now()->getTimestamp());
    }

    public function isStale(): bool
    {
        $now = now()->getTimestamp();
        $limit = $now - self::LIMIT_SECONDS;
        $heartbeat = Cache::get(self::HEARTBEAT_KEY);

        return ! is_int($heartbeat)
            || $heartbeat < $limit
            || DB::table('jobs')->whereNull('reserved_at')->where('created_at', '<', $limit)->exists()
            || DB::table('failed_jobs')->where('failed_at', '>=', now()->subSeconds(self::LIMIT_SECONDS)->utc())->exists();
    }
}
