<?php

declare(strict_types=1);

namespace App\Actions\Deployments;

use App\Enums\PullStatus;
use App\Models\Deployment;
use App\Models\Pull;

/**
 * The status rules shared by the Home cards and the Deployment page, so they can never disagree.
 */
class DeploymentStatus
{
    /**
     * Paused wins, then no pull yet, then a failed latest pull, otherwise live.
     */
    public function state(Deployment $deployment, ?Pull $latest): string
    {
        return match (true) {
            ! $deployment->is_active => 'paused',
            $latest === null => 'new',
            $latest->status === PullStatus::Failed => 'unavailable',
            default => 'live',
        };
    }

    /**
     * The failure text is shown only for an unavailable deployment (never for a paused one).
     */
    public function reason(string $state, ?Pull $latest): ?string
    {
        return $state === 'unavailable' ? $latest?->failure_message : null;
    }

    /**
     * Only the host leaves PHP: no scheme, port, path or query.
     */
    public function domain(string $baseUrl): ?string
    {
        $host = parse_url($baseUrl, PHP_URL_HOST);

        return is_string($host) && $host !== '' ? strtolower($host) : null;
    }
}
