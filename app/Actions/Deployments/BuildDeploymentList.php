<?php

declare(strict_types=1);

namespace App\Actions\Deployments;

use App\Models\Deployment;

/**
 * Turns every deployment into a small array of safe display values for the Deployments list.
 * Two queries, no matter how many rows. The token is never selected, and the slug leaves PHP only inside paths.
 */
class BuildDeploymentList
{
    public function __construct(private readonly DeploymentStatus $status) {}

    /**
     * @return list<array{
     *     id: int,
     *     name: string,
     *     domain: string|null,
     *     state: string,
     *     href: string,
     *     editHref: string,
     *     activeHref: string,
     * }>
     */
    public function handle(): array
    {
        $deployments = Deployment::query()
            ->select(['id', 'name', 'slug', 'base_url', 'is_active'])
            ->with(['latestPull' => fn ($query) => $query->select([
                'pulls.id', 'pulls.deployment_id', 'pulls.pulled_at', 'pulls.status',
            ])])
            ->orderBy('name')
            ->orderBy('id')
            ->get();

        return array_values($deployments->map(fn (Deployment $deployment): array => [
            'id' => $deployment->id,
            'name' => $deployment->name,
            'domain' => $this->status->domain($deployment->base_url),
            'state' => $this->status->state($deployment, $deployment->latestPull),
            // The slug leaves PHP only here, as ready made paths.
            'href' => route('deployments.show', $deployment->slug, false),
            'editHref' => route('deployments.edit', $deployment->slug, false),
            'activeHref' => route('deployments.active', $deployment->slug, false),
        ])->all());
    }
}
