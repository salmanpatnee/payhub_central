<?php

declare(strict_types=1);

namespace App\Http\Requests\Concerns;

use App\Http\Requests\StoreStaffRequest;
use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\Rules\Unique;

/**
 * The email, password and own row rules the Staff forms share, so they cannot drift apart.
 */
trait StaffRules
{
    /**
     * The logged in admin may not act on their own row. A hand made request for it is refused before validation.
     */
    public function authorize(): bool
    {
        $target = $this->route('user');

        return ! $target instanceof User || ! $target->is($this->user());
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return ['email.unique' => StoreStaffRequest::EMAIL_TAKEN];
    }

    /**
     * @return array<int, Unique|string>
     */
    protected function emailRules(?int $ignoreId = null): array
    {
        return ['required', 'string', 'email', 'max:255', Rule::unique('users', 'email')->ignore($ignoreId)];
    }

    /**
     * No `confirmed`: the admin types the password once.
     *
     * @return array<int, Password|string>
     */
    protected function passwordRules(): array
    {
        return ['required', 'string', Password::default()];
    }

    protected function cleanEmail(): void
    {
        $email = $this->input('email');

        $this->merge(['email' => is_string($email) ? mb_strtolower(trim($email)) : $email]);
    }
}
