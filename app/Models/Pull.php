<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\PullFailureKind;
use App\Enums\PullSource;
use App\Enums\PullStatus;
use Database\Factories\PullFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * A pull row is written once and never changed, so it has no updated_at.
 *
 * @property int $id
 * @property int $deployment_id
 * @property Carbon $pulled_at
 * @property PullStatus $status
 * @property PullSource $source
 * @property int|null $triggered_by
 * @property PullFailureKind|null $failure_kind
 * @property int|null $http_status
 * @property string|null $failure_message
 * @property string|null $failure_body
 * @property string|null $contract_version
 * @property Carbon|null $generated_at
 * @property string|null $timezone
 * @property string|null $app_release
 * @property string|null $raw_reply
 * @property Carbon|null $created_at
 */
#[Fillable([
    'deployment_id', 'pulled_at', 'status', 'source', 'triggered_by', 'failure_kind', 'http_status',
    'failure_message', 'failure_body', 'contract_version', 'generated_at', 'timezone', 'app_release', 'raw_reply',
])]
class Pull extends Model
{
    /** @use HasFactory<PullFactory> */
    use HasFactory;

    public const UPDATED_AT = null;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'pulled_at' => 'datetime',
            'status' => PullStatus::class,
            'source' => PullSource::class,
            'failure_kind' => PullFailureKind::class,
            'http_status' => 'integer',
            'generated_at' => 'datetime',
        ];
    }

    /**
     * @return BelongsTo<Deployment, $this>
     */
    public function deployment(): BelongsTo
    {
        return $this->belongsTo(Deployment::class)->withTrashed();
    }

    /**
     * @return BelongsTo<User, $this>
     */
    public function triggeredBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'triggered_by');
    }

    /**
     * @return HasMany<PullWindow, $this>
     */
    public function windows(): HasMany
    {
        return $this->hasMany(PullWindow::class);
    }
}
