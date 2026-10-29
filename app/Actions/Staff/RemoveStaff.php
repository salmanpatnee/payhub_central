<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Models\User;
use Illuminate\Support\Facades\DB;

/**
 * Deletes a login and its sessions in one transaction.
 * Both rows are locked first, so two admins removing each other at the same moment cannot empty the table:
 * the second one finds its own row gone and is refused.
 */
class RemoveStaff
{
    public function handle(int $actingId, int $targetId): void
    {
        DB::transaction(function () use ($actingId, $targetId): void {
            $ids = User::query()
                ->whereIn('id', [$actingId, $targetId])
                ->orderBy('id')
                ->lockForUpdate()
                ->pluck('id');

            abort_unless($ids->contains($actingId), 403);
            abort_unless($ids->contains($targetId), 404);

            DB::table('sessions')->where('user_id', $targetId)->delete();
            User::query()->whereKey($targetId)->delete();
        });
    }
}
