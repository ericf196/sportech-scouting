<?php
namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class BaseFormRequest extends FormRequest
{

    /**
     * {@inheritdoc}
     */
    protected function formatErrors(Validator $validator)
    {
        return ['success' => false, 'errors' => $validator->errors()->all(), 'validation' => true];
    }
}