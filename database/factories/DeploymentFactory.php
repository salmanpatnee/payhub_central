<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Deployment;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Deployment>
 */
class DeploymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'slug' => fake()->unique()->slug(2),
            'name' => fake()->company(),
            'base_url' => 'https://'.fake()->unique()->domainName(),
            'token' => fake()->sha256(),
            'is_active' => true,
            'do_not_pull_before' => null,
        ];
    }

    /**
     * Indicate that the deployment is paused.
     */
    public function paused(): static
    {
        return $this->state(['is_active' => false]);
    }
}
