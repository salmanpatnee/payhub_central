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
 * Only named fields are copied out, so no token or raw reply can reach the browser.
 */
class BuildDeploymentCards
{
    /**
     * @return list<array{
     *     id: int,
     *     name: string,
     *     state: string,
     *     reason: string|null,
     *     updatedAt: string|null,
     *     timezone: string|null,
     *     today: array{completed: object, pending: object}|null,
     *     thisMonth: array{completed: object, pending: object}|null,
     * }>
     */
    public function handle(): array
    {
        $pullColumns = [
            'pulls.id', 'pulls.deployment_id', 'pulls.pulled_at', 'pulls.status', 'pulls.timezone', 'pulls.failure_message',
        ];

        $deployments = Deployment::query()
            ->select(['id', 'name', 'is_active'])
            ->with([
                'latestPull' => fn ($query) => $query->select($pullColumns),
                'latestGoodPull' => fn ($query) => $query->select($pullColumns)->with([
                    'windows' => fn ($windows) => $windows
                        ->whereIn('name', [WindowName::Today->value, WindowName::ThisMonth->value])
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
                'state' => $state,
                'reason' => $state === 'unavailable' ? $latest?->failure_message : null,
                'updatedAt' => $good?->pulled_at->toIso8601String(),
                'timezone' => $good?->timezone,
                'today' => $good ? $this->section($good, WindowName::Today) : null,
                'thisMonth' => $good ? $this->section($good, WindowName::ThisMonth) : null,
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
     * @return array{completed: object, pending: object}
     */
    private function section(Pull $good, WindowName $name): array
    {
        $window = $good->windows->first(fn (PullWindow $w): bool => $w->name === $name);

        $money = [AmountKind::Completed->value => [], AmountKind::Pending->value => []];

        if ($window !== null) {
            foreach ($window->amounts as $amount) {
                $money[$amount->kind->value][$amount->currency] = $amount->cents;
            }
        }

        // (object) keeps an empty map as {} and a digit only currency as a key in the JSON.
        return [
            'completed' => (object) $money[AmountKind::Completed->value],
            'pending' => (object) $money[AmountKind::Pending->value],
        ];
    }
}
