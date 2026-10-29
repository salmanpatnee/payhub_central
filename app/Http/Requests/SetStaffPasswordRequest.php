<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\Http\Requests\Concerns\StaffRules;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SetStaffPasswordRequest extends FormRequest
{
    use StaffRules;

    /**
     * @return array<string, array<int, Password|string>>
     */
    public function rules(): array
    {
        return ['password' => $this->passwordRules()];
    }
}
