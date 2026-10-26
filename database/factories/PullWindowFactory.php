<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\WindowName;
use App\Models\Pull;
use App\Models\PullWindow;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<PullWindow>
 */
class PullWindowFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'pull_id' => Pull::factory(),
            'name' => WindowName::AllTime,
            'starts_at' => null,
            'ends_at' => null,
            'links_total' => 10,
            'links_pending' => 2,
            'links_completed' => 6,
            'links_failed' => 1,
            'links_cancelled' => 1,
            'links_expired' => 0,
            'paid_count' => 6,
        ];
    }
}
