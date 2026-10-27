<?php

declare(strict_types=1);

namespace App\Actions\Pulls;

use App\Enums\PullFailureKind;
use GuzzleHttp\Exception\ConnectTimeoutException;
use GuzzleHttp\Exception\NetworkTimeoutException;
use GuzzleHttp\Exception\ResponseTimeoutException;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Http;
use SensitiveParameter;

/**
 * The one HTTP call to PayHub. It never retries, never follows a redirect and never keeps exception text.
 */
class FetchSummary
{
    private const SUMMARY_PATH = '/api/central/v1/summary';

    public function handle(string $baseUrl, #[SensitiveParameter] string $token): FetchedSummary
    {
        try {
            $response = Http::withToken($token)
                ->acceptJson()
                ->timeout(10)
                ->connectTimeout(10)
                ->withoutRedirecting()
                ->get($baseUrl.self::SUMMARY_PATH);
        } catch (ConnectionException $e) {
            return FetchedSummary::failed($this->isTimeout($e) ? PullFailureKind::Timeout : PullFailureKind::Network);
        }

        $retryAfter = $response->header('Retry-After');

        return FetchedSummary::answered($response->status(), $response->body(), $retryAfter === '' ? null : $retryAfter);
    }

    private function isTimeout(ConnectionException $e): bool
    {
        $previous = $e->getPrevious();

        if ($previous instanceof ConnectTimeoutException
            || $previous instanceof NetworkTimeoutException
            || $previous instanceof ResponseTimeoutException) {
            return true;
        }

        return str_contains($e->getMessage(), 'cURL error 28');
    }
}
