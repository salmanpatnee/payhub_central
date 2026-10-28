<?php

declare(strict_types=1);

namespace App\Http\Requests\Concerns;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

/**
 * The name and URL rules the add form and the edit form share, so they cannot drift apart.
 */
trait DeploymentRules
{
    /**
     * @return array<int, ValidationRule|Closure|string>
     */
    protected function nameRules(): array
    {
        return ['required', 'string', 'max:255'];
    }

    /**
     * @return array<int, ValidationRule|Closure|string>
     */
    protected function baseUrlRules(): array
    {
        return ['required', 'string', 'max:255', 'url', $this->httpsUrlRule(...)];
    }

    /**
     * Trailing slashes come off the URL.
     */
    protected function trimBaseUrl(): void
    {
        $url = $this->input('base_url');

        $this->merge(['base_url' => is_string($url) ? rtrim($url, '/') : $url]);
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
