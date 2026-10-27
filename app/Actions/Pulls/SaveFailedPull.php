<?php

declare(strict_types=1);

namespace App\Actions\Pulls;

use App\Enums\PullFailureKind;
use App\Enums\PullSource;
use App\Enums\PullStatus;
use App\Models\Deployment;
use App\Models\Pull;
use Carbon\CarbonInterface;

/**
 * The only place that writes a failed pull. It has no windows and no raw reply,
 * so it can never become the "last good" pull.
 */
class SaveFailedPull
{
    private const BODY_LIMIT = 2048;

    public function handle(
        Deployment $deployment,
        PullFailureKind $kind,
        ?int $httpStatus,
        string $body,
        CarbonInterface $pulledAt,
    ): Pull {
        return Pull::query()->create([
            'deployment_id' => $deployment->id,
            'pulled_at' => $pulledAt->copy()->utc(),
            'status' => PullStatus::Failed,
            'source' => PullSource::Manual,
            'triggered_by' => null,
            'failure_kind' => $kind,
            'http_status' => $httpStatus,
            'failure_message' => $kind->message(),
            'failure_body' => $kind->keepsBody() ? mb_strcut(mb_scrub($body, 'UTF-8'), 0, self::BODY_LIMIT, 'UTF-8') : null,
        ]);
    }
}
