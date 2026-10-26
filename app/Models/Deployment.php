<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\PullStatus;
use Database\Factories\DeploymentFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $slug
 * @property string $name
 * @property string $base_url
 * @property string|null $token
 * @property bool $is_active
 * @property Carbon|null $do_not_pull_before
 * @property Carbon|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable(['slug', 'name', 'base_url', 'token', 'is_active', 'do_not_pull_before'])]
#[Hidden(['token'])]
class Deployment extends Model
{
    /** @use HasFactory<DeploymentFactory> */
    use HasFactory, SoftDeletes;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'token' => 'encrypted',
            'is_active' => 'boolean',
            'do_not_pull_before' => 'datetime',
        ];
    }

    /**
     * The slug is stored lowercase so MySQL and SQLite treat "Acme" and "acme" as the same one.
     *
     * @return Attribute<string, string>
     */
    protected function slug(): Attribute
    {
        return Attribute::set(fn (string $value): string => strtolower($value));
    }

    /**
     * @return HasMany<Pull, $this>
     */
    public function pulls(): HasMany
    {
        return $this->hasMany(Pull::class);
    }

    /**
     * The newest good pull. The id breaks ties inside the same second.
     *
     * @return HasOne<Pull, $this>
     */
    public function latestGoodPull(): HasOne
    {
        return $this->hasOne(Pull::class)->ofMany(
            ['pulled_at' => 'max', 'id' => 'max'],
            fn ($query) => $query->where('status', PullStatus::Success->value),
        );
    }

    /**
     * The newest pull of any status.
     *
     * @return HasOne<Pull, $this>
     */
    public function latestPull(): HasOne
    {
        return $this->hasOne(Pull::class)->ofMany(['pulled_at' => 'max', 'id' => 'max']);
    }
}
