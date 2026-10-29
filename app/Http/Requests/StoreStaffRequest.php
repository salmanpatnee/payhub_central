<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\Http\Requests\Concerns\StaffRules;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\Rules\Unique;

class StoreStaffRequest extends FormRequest
{
    use StaffRules;

    public const EMAIL_TAKEN = 'That email is already used by another login.';

    /**
     * @return array<string, array<int, Password|Unique|string>>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => $this->emailRules(),
            'password' => $this->passwordRules(),
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->cleanEmail();
    }
}
