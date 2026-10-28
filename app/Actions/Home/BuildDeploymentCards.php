<?php

declare(strict_types=1);

namespace App\Actions\Home;

use App\Enums\AmountKind;
use App\Enums\PullStatus;
use App\Enums\WindowName;
use App\Models\Deployment;
use App\Models\Pull;
use App\Models\PullWindow;

/**
 * Turns every deployment into a small array of safe display values for the Home page.
 * Only named fields are copied out, so no token, full URL or raw reply can reach the browser.
 */
class BuildDeploymentCards
{
    /** Key the page uses, mapped to the window it comes from. */
    private const PERIODS = [
        'today' => WindowName::Today,
        'thisMonth' => WindowName::ThisMonth,
        'last30Days' => WindowName::Last30Days,
    ];

    /**
     * @return list<array{
     *     id: int,
     *     name: string,
     *     domain: string|null,
     *     state: string,
     *     reason: string|null,
     *     updatedAt: string|null,
     *     timezone: string|null,
     *     periods: array<string, array{
     *         links: array{total: int, pending: int, completed: int, failed: int, expired: int},
     *         paidCount: int,
     *         completed: object,
     *         pending: object,
     *     }>|null,
     * }>
     */
    public function handle(): array
    {
        $pullColumns = [
            'pulls.id', 'pulls.deployment_id', 'pulls.pulled_at', 'pulls.status', 'pulls.timezone', 'pulls.failure_message',
        ];

        $deployments = Deployment::query()
            ->select(['id', 'name', 'base_url', 'is_active'])
            ->with([
                'latestPull' => fn ($query) => $query->select($pullColumns),
                'latestGoodPull' => fn ($query) => $query->select($pullColumns)->with([
                    'windows' => fn ($windows) => $windows
                        ->whereIn('name', array_map(fn (WindowName $name): string => $name->value, self::PERIODS))
                        ->with('amounts'),
                ]),
            ])
            ->orderBy('name')
            ->orderBy('id')
            ->get();

        return array_values($deployments->map(function (Deployment $deployment): array {
            $latest = $deployment->latestPull;
            $good = $deployment->latestGoodPull;
            $state = $this->state($deployment, $latest);

            return [
                'id' => $deployment->id,
                'name' => $deployment->name,
                'domain' => $this->domain($deployment->base_url),
                'state' => $state,
                'reason' => $state === 'unavailable' ? $latest?->failure_message : null,
                'updatedAt' => $good?->pulled_at->toIso8601String(),
                'timezone' => $good?->timezone,
                'periods' => $good ? $this->periods($good) : null,
            ];
        })->all());
    }

    private function state(Deployment $deployment, ?Pull $latest): string
    {
        return match (true) {
            ! $deployment->is_active => 'paused',
            $latest === null => 'new',
            $latest->status === PullStatus::Failed => 'unavailable',
            default => 'live',
        };
    }

    /**
     * Only the host leaves PHP: no scheme, port, path or query.
     */
    private function domain(string $baseUrl): ?string
    {
        $host = parse_url($baseUrl, PHP_URL_HOST);

        return is_string($host) && $host !== '' ? strtolower($host) : null;
    }

    /**
     * @return array<string, array{
     *     links: array{total: int, pending: int, completed: int, failed: int, expired: int},
     *     paidCount: int,
     *     completed: object,
     *     pending: object,
     * }>
     */
    private function periods(Pull $good): array
    {
        $periods = [];

        foreach (self::PERIODS as $key => $name) {
            $window = $good->windows->first(fn (PullWindow $w): bool => $w->name === $name);
            $periods[$key] = $this->period($window);
        }

        return $periods;
    }

    /**
     * @return array{
     *     links: array{total: int, pending: int, completed: int, failed: int, expired: int},
     *     paidCount: int,
     *     completed: object,
     *     pending: object,
     * }
     */
    private function period(?PullWindow $window): array
    {
        $money = [AmountKind::Completed->value => [], AmountKind::Pending->value => []];

        if ($window !== null) {
            foreach ($window->amounts as $amount) {
                $money[$amount->kind->value][$amount->currency] = $amount->cents;
            }
        }

        // (object) keeps an empty map as {} and a digit only currency as a key in the JSON.
        return [
            'links' => [
                'total' => $window->links_total ?? 0,
                'pending' => $window->links_pending ?? 0,
                'completed' => $window->links_completed ?? 0,
                'failed' => $window->links_failed ?? 0,
                'expired' => $window->links_expired ?? 0,
            ],
            'paidCount' => $window->paid_count ?? 0,
            'completed' => (object) $money[AmountKind::Completed->value],
            'pending' => (object) $money[AmountKind::Pending->value],
        ];
    }
}
