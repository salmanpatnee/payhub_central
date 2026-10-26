<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\AmountKind;
use App\Models\PullWindow;
use App\Models\PullWindowAmount;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<PullWindowAmount>
 */
class PullWindowAmountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'pull_window_id' => PullWindow::factory(),
            'kind' => AmountKind::Completed,
            'currency' => 'usd',
            'cents' => fake()->numberBetween(0, 1_000_000),
        ];
    }
}
