<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\WindowName;
use Database\Factories\PullWindowFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\WithoutTimestamps;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $pull_id
 * @property WindowName $name
 * @property string|null $starts_at
 * @property string|null $ends_at
 * @property int $links_total
 * @property int $links_pending
 * @property int $links_completed
 * @property int $links_failed
 * @property int $links_cancelled
 * @property int $links_expired
 * @property int $paid_count
 */
#[Fillable([
    'pull_id', 'name', 'starts_at', 'ends_at', 'links_total', 'links_pending', 'links_completed',
    'links_failed', 'links_cancelled', 'links_expired', 'paid_count',
])]
#[WithoutTimestamps]
class PullWindow extends Model
{
    /** @use HasFactory<PullWindowFactory> */
    use HasFactory;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'name' => WindowName::class,
            'links_total' => 'integer',
            'links_pending' => 'integer',
            'links_completed' => 'integer',
            'links_failed' => 'integer',
            'links_cancelled' => 'integer',
            'links_expired' => 'integer',
            'paid_count' => 'integer',
        ];
    }

    /**
     * @return BelongsTo<Pull, $this>
     */
    public function pull(): BelongsTo
    {
        return $this->belongsTo(Pull::class);
    }

    /**
     * @return HasMany<PullWindowAmount, $this>
     */
    public function amounts(): HasMany
    {
        return $this->hasMany(PullWindowAmount::class);
    }
}
