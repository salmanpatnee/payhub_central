<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Models\User;

/**
 * Changes a name and email. The password, two factor and sessions are not touched.
 * A login with an empty verified date gets it set, so an edited person never lands on the verify page.
 */
class UpdateStaff
{
    /**
     * @param  array{name: string, email: string}  $data
     */
    public function handle(User $user, array $data): void
    {
        $user->forceFill([
            'name' => $data['name'],
            'email' => $data['email'],
            'email_verified_at' => $user->email_verified_at ?? now(),
        ])->save();
    }
}
