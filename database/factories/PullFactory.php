<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Actions\Pulls\SaveGoodPull;
use App\Enums\PullFailureKind;
use App\Enums\PullSource;
use App\Enums\PullStatus;
use App\Models\Deployment;
use App\Models\Pull;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * A good pull is built from docs/central-dashboard-sample.json, with its four windows
 * and money rows. Use failed() for a pull that has none.
 *
 * @extends Factory<Pull>
 */
class PullFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $reply = self::sampleReply();

        return [
            'deployment_id' => Deployment::factory(),
            'pulled_at' => now(),
            'status' => PullStatus::Success,
            'source' => PullSource::Scheduled,
            'triggered_by' => null,
            'contract_version' => $reply['contract_version'],
            'generated_at' => $reply['generated_at'],
            'timezone' => $reply['timezone'],
            'app_release' => $reply['deployment']['app_release'],
            'raw_reply' => self::sampleBody(),
        ];
    }

    public function configure(): static
    {
        return $this->afterCreating(function (Pull $pull): void {
            if ($pull->status === PullStatus::Success) {
                app(SaveGoodPull::class)->storeWindows($pull, self::sampleReply());
            }
        });
    }

    /**
     * A failed pull: a reason, no windows and no raw reply.
     */
    public function failed(PullFailureKind $kind = PullFailureKind::Unavailable, ?int $httpStatus = 503): static
    {
        return $this->state([
            'status' => PullStatus::Failed,
            'failure_kind' => $kind,
            'http_status' => $httpStatus,
            'failure_message' => 'The deployment did not give a usable reply.',
            'failure_body' => $kind->keepsBody() ? '{"error":"sample"}' : null,
            'contract_version' => null,
            'generated_at' => null,
            'timezone' => null,
            'app_release' => null,
            'raw_reply' => null,
        ]);
    }

    /**
     * A pull started by hand by a staff member.
     */
    public function manual(?User $user = null): static
    {
        return $this->state(fn (): array => [
            'source' => PullSource::Manual,
            'triggered_by' => ($user ?? User::factory()->create())->id,
        ]);
    }

    /**
     * The sample reply, decoded.
     *
     * @return array<string, mixed>
     */
    public static function sampleReply(): array
    {
        /** @var array<string, mixed> */
        return json_decode(self::sampleBody(), true, flags: JSON_THROW_ON_ERROR);
    }

    /**
     * The sample reply, exactly as the file holds it.
     */
    public static function sampleBody(): string
    {
        return (string) file_get_contents(base_path('docs/central-dashboard-sample.json'));
    }
}
