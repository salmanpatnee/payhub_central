<?php

declare(strict_types=1);

namespace App\Actions\Deployments;

use App\Enums\PullStatus;
use App\Models\Deployment;
use App\Models\Pull;

/**
 * The 10 newest pulls of one deployment for its page, good and failed, in one query.
 * Only five safe columns are read, so no raw reply, failure body or token can reach the browser.
 * A removed or unknown slug matches nothing (its page is a 404 anyway).
 */
class BuildRecentPulls
{
    private const LIMIT = 10;

    /**
     * @return list<array{id: int, at: string, ok: bool, source: string, reason: string|null}>
     */
    public function handle(string $slug): array
    {
        $rows = Pull::query()
            ->select(['id', 'pulled_at', 'status', 'source', 'failure_message'])
            ->whereIn('deployment_id', Deployment::query()->select('id')->where('slug', $slug))
            ->orderByDesc('pulled_at')
            ->orderByDesc('id')
            ->limit(self::LIMIT)
            ->get()
            ->map(function (Pull $pull): array {
                $ok = $pull->status === PullStatus::Success;

                return [
                    'id' => $pull->id,
                    'at' => $pull->pulled_at->toIso8601String(),
                    'ok' => $ok,
                    'source' => $pull->source->value,
                    'reason' => $ok ? null : ($pull->failure_message ?: null),
                ];
            })
            ->all();

        return array_values($rows);
    }
}
