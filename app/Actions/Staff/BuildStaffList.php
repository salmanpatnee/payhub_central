<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Models\User;

/**
 * Turns every login into a small array of safe display values for the Staff list.
 * One query. Only four columns are selected, so the password hash and two factor secrets never load.
 */
class BuildStaffList
{
    /**
     * @return list<array{id: int, name: string, email: string, createdAt: string|null, isYou: bool}>
     */
    public function handle(int $actingId): array
    {
        $users = User::query()
            ->select(['id', 'name', 'email', 'created_at'])
            ->orderBy('name')
            ->orderBy('id')
            ->get();

        return array_values($users->map(fn (User $user): array => [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'createdAt' => $user->created_at?->toIso8601String(),
            'isYou' => $user->id === $actingId,
        ])->all());
    }
}
