<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\Http\Requests\Concerns\StaffRules;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Unique;

class UpdateStaffRequest extends FormRequest
{
    use StaffRules;

    /**
     * @return array<string, array<int, Unique|string>>
     */
    public function rules(): array
    {
        /** @var User $target */
        $target = $this->route('user');

        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => $this->emailRules($target->id),
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->cleanEmail();
    }
}
