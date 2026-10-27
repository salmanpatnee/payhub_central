<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Create the first admin. Login is invite only, so this is how the first
     * person gets in. Safe to run again: it finds the admin by email.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@payhub.test'],
            [
                'name' => 'Admin',
                'password' => 'password',
                'email_verified_at' => Carbon::now(),
            ],
        );
    }
}
