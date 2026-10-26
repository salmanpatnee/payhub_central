<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\AmountKind;
use Database\Factories\PullWindowAmountFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\WithoutTimestamps;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Money is whole cents. Different currencies are never added together.
 *
 * @property int $id
 * @property int $pull_window_id
 * @property AmountKind $kind
 * @property string $currency
 * @property int $cents
 */
#[Fillable(['pull_window_id', 'kind', 'currency', 'cents'])]
#[WithoutTimestamps]
class PullWindowAmount extends Model
{
    /** @use HasFactory<PullWindowAmountFactory> */
    use HasFactory;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'kind' => AmountKind::class,
            'cents' => 'integer',
        ];
    }

    /**
     * @return BelongsTo<PullWindow, $this>
     */
    public function window(): BelongsTo
    {
        return $this->belongsTo(PullWindow::class, 'pull_window_id');
    }
}
