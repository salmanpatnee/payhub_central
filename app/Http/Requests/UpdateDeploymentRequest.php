<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\Http\Requests\Concerns\DeploymentRules;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateDeploymentRequest extends FormRequest
{
    use DeploymentRules;

    /**
     * A blank token means keep the stored one. The key and the switch are not accepted here.
     *
     * @return array<string, array<int, ValidationRule|Closure|string>>
     */
    public function rules(): array
    {
        return [
            'name' => $this->nameRules(),
            'base_url' => $this->baseUrlRules(),
            'token' => ['nullable', 'string', 'size:64'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function attributes(): array
    {
        return ['base_url' => 'base URL'];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return ['token.size' => 'The token must be exactly 64 characters.'];
    }

    protected function prepareForValidation(): void
    {
        $this->trimBaseUrl();
    }
}
