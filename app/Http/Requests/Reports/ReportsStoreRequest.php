<?php
namespace App\Http\Requests\Reports;

use Illuminate\Foundation\Http\FormRequest;

class ReportsStoreRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'      => 'required',
            'scoutings' => 'required',
        ];
    }
}