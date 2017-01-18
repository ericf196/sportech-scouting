<?php

namespace App\Http\Requests\Scoutings;

use Illuminate\Foundation\Http\FormRequest;

class ScoutingCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'leftAthlete'  => 'required',
            'rightAthlete' => 'required',
            'name'         => 'required',
            'videoSrc'     => 'required|url'
        ];
    }
}
