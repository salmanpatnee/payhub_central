<?php

declare(strict_types=1);

namespace App\Actions\Pulls;

use App\Enums\PullFailureKind;
use App\Enums\PullSource;
use App\Models\Deployment;
use App\Models\Pull;
use Carbon\CarbonInterface;
use DateTimeImmutable;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Crypt;
use JsonException;
use Throwable;

/**
 * One pull for one deployment (manual or scheduled): check the rules, make the call, check the reply, save a good or failed pull.
 * Messages are fixed text. Nothing from an exception or a response header is ever saved or shown.
 */
class PullDeployment
{
    private const MAX_BODY_BYTES = 65536;

    private const DEFAULT_WAIT = 60;

    private const MAX_WAIT = 3600;

    public function __construct(
        private readonly FetchSummary $fetch,
        private readonly CheckSummaryReply $check,
        private readonly SaveGoodPull $saveGood,
        private readonly SaveFailedPull $saveFailed,
    ) {}

    /**
     * @throws PullRefused when the pull is not started, or not saved because the deployment was removed
     */
    public function handle(Deployment $deployment, PullSource $source = PullSource::Manual): Pull
    {
        $this->assertPullable($this->reload($deployment));

        $lock = Cache::lock("pull:deployment:{$deployment->id}", 30);

        if (! $lock->get()) {
            throw new PullRefused('A pull is already running for this deployment.');
        }

        try {
            $fresh = $this->reload($deployment);
            $this->assertPullable($fresh);

            return $this->pull($fresh, $source);
        } finally {
            $lock->release();
        }
    }

    private function reload(Deployment $deployment): Deployment
    {
        return Deployment::query()->find($deployment->id)
            ?? throw new PullRefused('This deployment was removed.');
    }

    private function assertPullable(Deployment $deployment): void
    {
        if (! $deployment->is_active) {
            throw new PullRefused('This deployment is paused. Turn it on first.');
        }

        if ($deployment->do_not_pull_before?->isFuture()) {
            throw new PullRefused("This deployment is waiting until {$deployment->do_not_pull_before->format('Y-m-d H:i:s T')}.");
        }
    }

    private function pull(Deployment $deployment, PullSource $source): Pull
    {
        $token = $this->readToken($deployment);

        if ($token === null || $token === '') {
            return $this->saveFailed->handle($deployment, PullFailureKind::TokenUnreadable, null, '', now(), $source);
        }

        try {
            $fetched = $this->fetch->handle($deployment->base_url, $token);
        } catch (Throwable) {
            $fetched = FetchedSummary::failed(PullFailureKind::Network);
        }

        $pulledAt = now();

        if (! Deployment::query()->whereKey($deployment->id)->exists()) {
            throw new PullRefused('This deployment was removed while the call was running. Nothing was saved.');
        }

        if ($fetched->failure !== null) {
            return $this->saveFailed->handle($deployment, $fetched->failure, null, '', $pulledAt, $source);
        }

        $status = (int) $fetched->status;

        if ($status === 200) {
            try {
                return $this->saveReply($deployment, $fetched->body, $pulledAt, $source);
            } catch (Throwable) {
                // Nothing from the error is kept: its text can carry the token or the URL.
                return $this->saveFailed->handle($deployment, PullFailureKind::InvalidReply, 200, $fetched->body, $pulledAt, $source);
            }
        }

        $kind = match (true) {
            $status >= 300 && $status < 400 => PullFailureKind::Redirect,
            $status === 401 => PullFailureKind::Unauthenticated,
            $status === 403 => PullFailureKind::HttpsRequired,
            $status === 404 => PullFailureKind::NotFound,
            $status === 429 => PullFailureKind::RateLimited,
            default => PullFailureKind::Unavailable,
        };

        if ($kind === PullFailureKind::RateLimited) {
            $this->holdBack($deployment, $fetched->retryAfter);
        }

        return $this->saveFailed->handle($deployment, $kind, $status, '', $pulledAt, $source);
    }

    private function readToken(Deployment $deployment): ?string
    {
        try {
            $stored = $deployment->getRawOriginal('token');

            return is_string($stored) ? Crypt::decryptString($stored) : null;
        } catch (DecryptException) {
            return null;
        }
    }

    private function saveReply(Deployment $deployment, string $body, CarbonInterface $pulledAt, PullSource $source): Pull
    {
        $invalid = fn (): Pull => $this->saveFailed->handle($deployment, PullFailureKind::InvalidReply, 200, $body, $pulledAt, $source);

        if (strlen($body) > self::MAX_BODY_BYTES) {
            return $invalid();
        }

        $reply = $this->decode($body);

        if ($reply === null) {
            return $invalid();
        }

        if (($reply['contract_version'] ?? null) !== 'v1') {
            return $this->saveFailed->handle($deployment, PullFailureKind::BadVersion, 200, $body, $pulledAt, $source);
        }

        $key = is_array($reply['deployment'] ?? null) ? ($reply['deployment']['key'] ?? null) : null;

        if ($key !== $deployment->slug) {
            return $this->saveFailed->handle($deployment, PullFailureKind::KeyMismatch, 200, $body, $pulledAt, $source);
        }

        if (! $this->check->passes($reply)) {
            return $invalid();
        }

        return $this->saveGood->handle($deployment, $source, null, $reply, $body, $pulledAt);
    }

    /**
     * @return array<string, mixed>|null null when the body is not a JSON object
     */
    private function decode(string $body): ?array
    {
        try {
            if (! json_decode($body, false, 512, JSON_THROW_ON_ERROR) instanceof \stdClass) {
                return null;
            }

            /** @var array<string, mixed> */
            return json_decode($body, true, 512, JSON_THROW_ON_ERROR);
        } catch (JsonException) {
            return null;
        }
    }

    /**
     * Stop pulling this deployment until PayHub's Retry-After time has passed.
     */
    private function holdBack(Deployment $deployment, ?string $retryAfter): void
    {
        Deployment::query()->whereKey($deployment->id)->update([
            'do_not_pull_before' => now()->addSeconds($this->waitSeconds($retryAfter))->utc(),
        ]);
    }

    private function waitSeconds(?string $retryAfter): int
    {
        $value = trim((string) $retryAfter);

        if ($value !== '' && ctype_digit($value)) {
            return strlen($value) > 9 ? self::MAX_WAIT : min((int) $value, self::MAX_WAIT);
        }

        $date = DateTimeImmutable::createFromFormat(DATE_RFC7231, $value);
        $seconds = $date === false ? 0 : $date->getTimestamp() - now()->getTimestamp();

        return $seconds > 0 ? min($seconds, self::MAX_WAIT) : self::DEFAULT_WAIT;
    }
}
