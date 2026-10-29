<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Models\User;

/**
 * Creates a login that is already email verified, so it passes the `verified` middleware.
 * The model hashes the typed password.
 */
class CreateStaff
{
    /**
     * @param  array{name: string, email: string, password: string}  $data
     */
    public function handle(array $data): User
    {
        $user = new User($data);
        $user->forceFill(['email_verified_at' => now()])->save();

        return $user;
    }
}
