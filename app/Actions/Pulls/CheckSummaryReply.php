<?php

declare(strict_types=1);

namespace App\Actions\Pulls;

use App\Enums\AmountKind;
use App\Enums\WindowName;
use Carbon\CarbonImmutable;
use Throwable;

/**
 * Checks a decoded v1 reply: required fields, text lengths and that the numbers add up.
 * Unknown keys and unknown currencies are allowed.
 */
class CheckSummaryReply
{
    private const LINK_KEYS = ['total', 'pending', 'completed', 'failed', 'cancelled', 'expired'];

    /**
     * @param  array<array-key, mixed>  $reply
     */
    public function passes(array $reply): bool
    {
        $deployment = $reply['deployment'] ?? null;
        $windows = $reply['windows'] ?? null;

        if (! $this->isDate($reply['generated_at'] ?? null)
            || ! $this->isText($reply['timezone'] ?? null, 64)
            || ! is_array($deployment)
            || ! is_array($windows)) {
            return false;
        }

        $release = $deployment['app_release'] ?? null;

        if ($release !== null && ! $this->isText($release, 64)) {
            return false;
        }

        foreach (WindowName::cases() as $name) {
            $window = $windows[$name->value] ?? null;

            if (! is_array($window) || ! $this->windowPasses($window, $name)) {
                return false;
            }
        }

        return true;
    }

    /**
     * @param  array<array-key, mixed>  $window
     */
    private function windowPasses(array $window, WindowName $name): bool
    {
        foreach (['from', 'to'] as $edge) {
            $value = $window[$edge] ?? null;

            if (! ($name === WindowName::AllTime && $value === null) && ! $this->isText($value, 40)) {
                return false;
            }
        }

        $links = $window['links'] ?? null;
        $money = $window['money'] ?? null;

        return is_array($links) && $this->linksPass($links)
            && is_array($money) && $this->moneyPasses($money);
    }

    /**
     * @param  array<array-key, mixed>  $links
     */
    private function linksPass(array $links): bool
    {
        foreach (self::LINK_KEYS as $key) {
            if (! $this->isCount($links[$key] ?? null)) {
                return false;
            }
        }

        /** @var array<string, int> $links */
        return $links['total'] === $links['pending'] + $links['completed'] + $links['failed'] + $links['cancelled']
            && $links['expired'] <= $links['pending'];
    }

    /**
     * @param  array<array-key, mixed>  $money
     */
    private function moneyPasses(array $money): bool
    {
        if (! $this->isCount($money['paid_count'] ?? null)) {
            return false;
        }

        foreach (AmountKind::cases() as $kind) {
            $amounts = $money[$kind->value] ?? null;

            if (! is_array($amounts) || ($amounts !== [] && array_is_list($amounts))) {
                return false;
            }

            foreach ($amounts as $currency => $cents) {
                if (preg_match('/^[a-z0-9_]{1,16}$/', (string) $currency) !== 1 || ! $this->isCount($cents)) {
                    return false;
                }
            }
        }

        return true;
    }

    private function isCount(mixed $value): bool
    {
        return is_int($value) && $value >= 0;
    }

    private function isText(mixed $value, int $max): bool
    {
        return is_string($value) && $value !== '' && strlen($value) <= $max;
    }

    private function isDate(mixed $value): bool
    {
        if (! is_string($value) || $value === '') {
            return false;
        }

        try {
            CarbonImmutable::parse($value);
        } catch (Throwable) {
            return false;
        }

        return true;
    }
}
