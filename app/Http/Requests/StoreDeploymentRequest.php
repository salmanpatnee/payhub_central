<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreDeploymentRequest extends FormRequest
{
    public const KEY_TAKEN = 'That key is already used (it may belong to a removed deployment).';

    /**
     * @return array<string, array<int, ValidationRule|Closure|string>>
     */
    public function rules(): array
    {
        return [
            // No withoutTrashed(): a removed deployment still reserves its key.
            'slug' => ['required', 'string', 'regex:/^[a-z0-9-]{1,32}$/', 'unique:deployments,slug', 'not_in:create'],
            'name' => ['required', 'string', 'max:255'],
            'base_url' => ['required', 'string', 'max:255', 'url', $this->httpsUrlRule(...)],
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
        $url = $this->input('base_url');

        $this->merge([
            'base_url' => is_string($url) ? rtrim($url, '/') : $url,
            'is_active' => $this->has('is_active') ? $this->input('is_active') : false,
        ]);
    }

    /**
     * Must be https with a host, and carry no credentials, query or fragment.
     */
    private function httpsUrlRule(string $attribute, mixed $value, Closure $fail): void
    {
        $parts = is_string($value) ? parse_url($value) : false;

        if ($parts === false
            || strtolower($parts['scheme'] ?? '') !== 'https'
            || ($parts['host'] ?? '') === ''
            || isset($parts['user']) || isset($parts['pass'])
            || isset($parts['query']) || isset($parts['fragment'])
            || str_contains($value, '?') || str_contains($value, '#')) {
            $fail('The :attribute must start with https:// and have no username, password, query or fragment.');
        }
    }
}
