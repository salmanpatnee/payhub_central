<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\Http\Requests\Concerns\DeploymentRules;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreDeploymentRequest extends FormRequest
{
    use DeploymentRules;

    public const KEY_TAKEN = 'That key is already used (it may belong to a removed deployment).';

    /**
     * @return array<string, array<int, ValidationRule|Closure|string>>
     */
    public function rules(): array
    {
        return [
            // No withoutTrashed(): a removed deployment still reserves its key.
            'slug' => ['required', 'string', 'regex:/^[a-z0-9-]{1,32}$/', 'unique:deployments,slug', 'not_in:create'],
            'name' => $this->nameRules(),
            'base_url' => $this->baseUrlRules(),
            'token' => ['required', 'string', 'size:64'],
            'is_active' => ['required', 'boolean'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function attributes(): array
    {
        return ['slug' => 'key', 'base_url' => 'base URL'];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'slug.unique' => self::KEY_TAKEN,
            'slug.not_in' => 'That key is reserved. Pick another one.',
            'slug.regex' => 'The key can only use lowercase letters, numbers and hyphens, up to 32 characters.',
            'token.size' => 'The token must be exactly 64 characters.',
        ];
    }

    /**
     * Trailing slashes come off the URL. A missing switch means off (an unchecked box sends nothing).
     */
    protected function prepareForValidation(): void
    {
        $this->trimBaseUrl();
        $this->merge(['is_active' => $this->has('is_active') ? $this->input('is_active') : false]);
    }
}
