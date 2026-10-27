<?php

declare(strict_types=1);

namespace App\Actions\Pulls;

use App\Enums\PullFailureKind;

/**
 * What came back from the one call: either an answer (status, body, Retry-After) or a failure code.
 */
final readonly class FetchedSummary
{
    private function __construct(
        public ?int $status,
        public string $body,
        public ?string $retryAfter,
        public ?PullFailureKind $failure,
    ) {}

    public static function answered(int $status, string $body, ?string $retryAfter): self
    {
        return new self($status, $body, $retryAfter, null);
    }

    public static function failed(PullFailureKind $failure): self
    {
        return new self(null, '', null, $failure);
    }
}
