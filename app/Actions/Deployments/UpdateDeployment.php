<?php

declare(strict_types=1);

namespace App\Actions\Deployments;

use App\Models\Deployment;
use Illuminate\Support\Facades\Crypt;

/**
 * Saves an edit. The stored token is never read: a new one is only written, and a blank one leaves it alone.
 * The write is one scoped query update, so a removed row can never be touched or get its token back.
 * Throws ModelNotFoundException (a 404) for an unknown or removed slug.
 */
class UpdateDeployment
{
    /**
     * @param  array{name: string, base_url: string, token?: string|null}  $data
     */
    public function handle(string $slug, array $data): void
    {
        $current = Deployment::query()->select(['id', 'base_url'])->where('slug', $slug)->firstOrFail();

        $values = ['name' => $data['name'], 'base_url' => $data['base_url']];
        $token = $data['token'] ?? null;

        if ($token !== null) {
            // The query builder skips the `encrypted` cast, so encrypt the same way the cast does.
            $values['token'] = Crypt::encryptString($token);
        }

        // New address or new token: let the next scheduled run pull right away.
        if ($token !== null || $data['base_url'] !== $current->base_url) {
            $values['do_not_pull_before'] = null;
        }

        Deployment::query()->whereKey($current->id)->update($values);
    }
}
