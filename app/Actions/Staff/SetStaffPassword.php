<?php

declare(strict_types=1);

namespace App\Actions\Staff;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

/**
 * Sets a new password, clears the remember me token and ends every open session, in one transaction.
 * Two factor is left as it is.
 */
class SetStaffPassword
{
    public function handle(User $user, string $password): void
    {
        DB::transaction(function () use ($user, $password): void {
            $user->forceFill(['password' => $password, 'remember_token' => Str::random(60)])->save();

            DB::table('sessions')->where('user_id', $user->id)->delete();
        });
    }
}
