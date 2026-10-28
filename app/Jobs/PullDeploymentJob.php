<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Actions\Pulls\PullDeployment;
use App\Actions\Pulls\PullRefused;
use App\Enums\PullSource;
use App\Models\Deployment;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

/**
 * One scheduled pull for one deployment. It holds the id only, never the token.
 * It never retries: the next 5 minute run is the retry. Log lines are fixed text.
 */
class PullDeploymentJob implements ShouldBeUnique, ShouldQueue
{
    use Dispatchable, Queueable;

    public int $tries = 1;

    public int $timeout = 20;

    public bool $failOnTimeout = true;

    /** A backstop only: the lock is normally released when the job finishes or fails. */
    public int $uniqueFor = 3600;

    public function __construct(public readonly int $deploymentId) {}

    public function uniqueId(): string
    {
        return (string) $this->deploymentId;
    }

    public function handle(PullDeployment $pull): void
    {
        $deployment = Deployment::query()->find($this->deploymentId);

        if ($deployment === null) {
            $this->skip('deployment gone');

            return;
        }

        try {
            $pull->handle($deployment, PullSource::Scheduled);
        } catch (PullRefused $refused) {
            $this->skip(match (true) {
                str_contains($refused->getMessage(), 'already running') => 'pull already running',
                str_contains($refused->getMessage(), 'paused') => 'deployment paused',
                str_contains($refused->getMessage(), 'waiting') => 'deployment waiting',
                default => 'deployment removed',
            });
        }
    }

    private function skip(string $reason): void
    {
        Log::info("Scheduled pull skipped: {$reason}.", ['deployment_id' => $this->deploymentId]);
    }
}
