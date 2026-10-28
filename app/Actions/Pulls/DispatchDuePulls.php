<?php

declare(strict_types=1);

namespace App\Actions\Pulls;

use App\Actions\Scheduler\SchedulerHealth;
use App\Jobs\PullDeploymentJob;
use App\Models\Deployment;

/**
 * Queues one pull job for each deployment that is on and not waiting.
 * The heartbeat is the last step, so a run that throws writes none.
 */
class DispatchDuePulls
{
    public function __construct(private readonly SchedulerHealth $health) {}

    public function __invoke(): void
    {
        Deployment::query()
            ->where('is_active', true)
            ->where(fn ($query) => $query->whereNull('do_not_pull_before')->orWhere('do_not_pull_before', '<=', now()->utc()))
            ->pluck('id')
            ->each(fn (int $id) => PullDeploymentJob::dispatch($id));

        $this->health->beat();
    }
}
