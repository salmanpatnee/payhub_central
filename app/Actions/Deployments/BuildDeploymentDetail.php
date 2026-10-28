<?php

declare(strict_types=1);

namespace App\Actions\Deployments;

use App\Enums\AmountKind;
use App\Enums\WindowName;
use App\Models\Deployment;
use App\Models\PullWindow;

/**
 * Turns one deployment into the safe display values for its page: header facts and all four windows.
 * Only named fields are copied out, so no token, full URL, slug or raw reply can reach the browser.
 * Throws ModelNotFoundException (a 404) for an unknown or removed slug.
 */
class BuildDeploymentDetail
{
    /** Key the page uses, mapped to the window it comes from. */
    private const WINDOWS = [
        'allTime' => WindowName::AllTime,
        'today' => WindowName::Today,
        'thisMonth' => WindowName::ThisMonth,
        'last30Days' => WindowName::Last30Days,
    ];

    public function __construct(private readonly DeploymentStatus $status) {}

    /**
     * @return array{
     *     name: string,
     *     domain: string|null,
     *     state: string,
     *     reason: string|null,
     *     updatedAt: string|null,
     *     timezone: string|null,
     *     windows: array<string, array<string, mixed>>|null,
     * }
     */
    public function handle(string $slug): array
    {
        $pullColumns = [
            'pulls.id', 'pulls.deployment_id', 'pulls.pulled_at', 'pulls.status', 'pulls.timezone', 'pulls.failure_message',
        ];

        $deployment = Deployment::query()
            ->select(['id', 'name', 'base_url', 'is_active'])
            ->where('slug', $slug)
            ->with([
                'latestPull' => fn ($query) => $query->select($pullColumns),
                'latestGoodPull' => fn ($query) => $query->select($pullColumns)->with('windows.amounts'),
            ])
            ->firstOrFail();

        $latest = $deployment->latestPull;
        $good = $deployment->latestGoodPull;
        $state = $this->status->state($deployment, $latest);

        return [
            'name' => $deployment->name,
            'domain' => $this->status->domain($deployment->base_url),
            'state' => $state,
            'reason' => $this->status->reason($state, $latest),
            'updatedAt' => $good?->pulled_at->toIso8601String(),
            'timezone' => $good?->timezone,
            'windows' => $good ? $this->windows($good->windows) : null,
        ];
    }

    /**
     * A missing window is never filled with zero: any gap makes the whole thing null.
     *
     * @param  iterable<PullWindow>  $saved
     * @return array<string, array<string, mixed>>|null
     */
    private function windows(iterable $saved): ?array
    {
        $byName = [];
        foreach ($saved as $window) {
            $byName[$window->name->value] = $window;
        }

        $windows = [];
        foreach (self::WINDOWS as $key => $name) {
            if (! isset($byName[$name->value])) {
                return null;
            }
            $windows[$key] = $this->window($byName[$name->value]);
        }

        return $windows;
    }

    /**
     * @return array<string, mixed>
     */
    private function window(PullWindow $window): array
    {
        $money = [AmountKind::Completed->value => [], AmountKind::Pending->value => []];

        foreach ($window->amounts as $amount) {
            $money[$amount->kind->value][$amount->currency] = $amount->cents;
        }

        // (object) keeps an empty map as {} and a digit only currency as a key in the JSON.
        return [
            'from' => $window->starts_at,
            'to' => $window->ends_at,
            'links' => [
                'total' => $window->links_total,
                'completed' => $window->links_completed,
                'pending' => $window->links_pending,
                'failed' => $window->links_failed,
                'cancelled' => $window->links_cancelled,
                'expired' => $window->links_expired,
            ],
            'paidCount' => $window->paid_count,
            'completed' => (object) $money[AmountKind::Completed->value],
            'pending' => (object) $money[AmountKind::Pending->value],
        ];
    }
}
