<?php

declare(strict_types=1);

namespace App\Actions\Pulls;

use App\Enums\AmountKind;
use App\Enums\PullSource;
use App\Enums\PullStatus;
use App\Enums\WindowName;
use App\Models\Deployment;
use App\Models\Pull;
use App\Models\PullWindow;
use Carbon\CarbonImmutable;
use Carbon\CarbonInterface;
use Illuminate\Support\Facades\DB;
use InvalidArgumentException;

/**
 * The only place that writes a good pull. The pull, its four windows and their
 * money rows are saved in one transaction, so a success pull never exists without them.
 *
 * The reply is expected to be already checked against contract v1 (feature 7).
 * This class still refuses a reply it cannot store safely.
 */
class SaveGoodPull
{
    private const CURRENCY_PATTERN = '/^[a-z0-9_]{1,16}$/';

    /**
     * @param  array<string, mixed>  $reply  The decoded v1 reply.
     * @param  string  $rawBody  The body exactly as received.
     */
    public function handle(
        Deployment $deployment,
        PullSource $source,
        ?int $triggeredBy,
        array $reply,
        string $rawBody,
        CarbonInterface $pulledAt,
    ): Pull {
        return DB::transaction(function () use ($deployment, $source, $triggeredBy, $reply, $rawBody, $pulledAt): Pull {
            $pull = Pull::query()->create([
                'deployment_id' => $deployment->id,
                'pulled_at' => $pulledAt->copy()->utc(),
                'status' => PullStatus::Success,
                'source' => $source,
                'triggered_by' => $source === PullSource::Manual ? $triggeredBy : null,
                'contract_version' => $this->string($reply, 'contract_version'),
                'generated_at' => CarbonImmutable::parse($this->string($reply, 'generated_at'))->utc(),
                'timezone' => $this->string($reply, 'timezone'),
                'app_release' => $this->array($reply, 'deployment')['app_release'] ?? null,
                'raw_reply' => $rawBody,
            ]);

            $this->storeWindows($pull, $reply);

            return $pull;
        });
    }

    /**
     * Write the four windows and their money rows for a pull. Call inside a transaction.
     *
     * @param  array<string, mixed>  $reply
     */
    public function storeWindows(Pull $pull, array $reply): void
    {
        $windows = $this->array($reply, 'windows');

        foreach (WindowName::cases() as $name) {
            $data = $this->array($windows, $name->value);
            $links = $this->array($data, 'links');
            $money = $this->array($data, 'money');

            $window = PullWindow::query()->create([
                'pull_id' => $pull->id,
                'name' => $name,
                'starts_at' => $this->edge($data, 'from', $name),
                'ends_at' => $this->edge($data, 'to', $name),
                'links_total' => $this->count($links, 'total'),
                'links_pending' => $this->count($links, 'pending'),
                'links_completed' => $this->count($links, 'completed'),
                'links_failed' => $this->count($links, 'failed'),
                'links_cancelled' => $this->count($links, 'cancelled'),
                'links_expired' => $this->count($links, 'expired'),
                'paid_count' => $this->count($money, 'paid_count'),
            ]);

            foreach (AmountKind::cases() as $kind) {
                foreach ($this->array($money, $kind->value) as $currency => $cents) {
                    $this->storeAmount($window, $kind, (string) $currency, $cents);
                }
            }
        }
    }

    private function storeAmount(PullWindow $window, AmountKind $kind, string $currency, mixed $cents): void
    {
        if (preg_match(self::CURRENCY_PATTERN, $currency) !== 1) {
            throw new InvalidArgumentException('A currency key in the reply is not storable.');
        }

        if (! is_int($cents) || $cents < 0) {
            throw new InvalidArgumentException('A money value in the reply is not whole, non negative cents.');
        }

        $window->amounts()->create(['kind' => $kind, 'currency' => $currency, 'cents' => $cents]);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    private function edge(array $data, string $key, WindowName $name): ?string
    {
        if ($name === WindowName::AllTime) {
            return null;
        }

        return $this->string($data, $key);
    }

    /**
     * @param  array<array-key, mixed>  $data
     * @return array<array-key, mixed>
     */
    private function array(array $data, string $key): array
    {
        $value = $data[$key] ?? null;

        if (! is_array($value)) {
            throw new InvalidArgumentException("The reply is missing an object at [{$key}].");
        }

        return $value;
    }

    /**
     * @param  array<array-key, mixed>  $data
     */
    private function string(array $data, string $key): string
    {
        $value = $data[$key] ?? null;

        if (! is_string($value) || $value === '') {
            throw new InvalidArgumentException("The reply is missing a text value at [{$key}].");
        }

        return $value;
    }

    /**
     * @param  array<array-key, mixed>  $data
     */
    private function count(array $data, string $key): int
    {
        $value = $data[$key] ?? null;

        if (! is_int($value) || $value < 0) {
            throw new InvalidArgumentException("The reply is missing a whole count at [{$key}].");
        }

        return $value;
    }
}
