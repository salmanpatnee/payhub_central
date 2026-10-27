<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Actions\Pulls\PullDeployment;
use App\Actions\Pulls\PullRefused;
use App\Enums\PullStatus;
use App\Models\Deployment;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

#[Signature('pulls:run {key : The deployment key}')]
#[Description('Pull the summary for one deployment by hand')]
class PullDeploymentCommand extends Command
{
    public function handle(PullDeployment $pullDeployment): int
    {
        $deployment = Deployment::query()->where('slug', strtolower((string) $this->argument('key')))->first();

        if ($deployment === null) {
            $this->error('Not pulled: no deployment has that key.');

            return self::FAILURE;
        }

        try {
            $pull = $pullDeployment->handle($deployment);
        } catch (PullRefused $refused) {
            $this->error('Not pulled: '.$refused->getMessage());

            return self::FAILURE;
        }

        if ($pull->status === PullStatus::Success) {
            $this->line("Pull #{$pull->id} for {$deployment->slug}: good");

            return self::SUCCESS;
        }

        $status = $pull->http_status === null ? '' : ", HTTP {$pull->http_status}";
        $this->line("Pull #{$pull->id} for {$deployment->slug}: failed ({$pull->failure_kind?->value}{$status})");

        return self::FAILURE;
    }
}
