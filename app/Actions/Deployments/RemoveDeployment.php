<?php

declare(strict_types=1);

namespace App\Actions\Deployments;

use App\Models\Deployment;

/**
 * Removes a deployment: the token is wiped and the row is soft deleted in one statement.
 * The saved pulls stay, and the key stays reserved. Aborts with a 404 for an unknown or removed slug.
 */
class RemoveDeployment
{
    public function handle(string $slug): void
    {
        $changed = Deployment::query()
            ->where('slug', $slug)
            ->update(['token' => null, 'deleted_at' => now()]);

        abort_if($changed === 0, 404);
    }
}
