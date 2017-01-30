<?php

namespace App\Http\Requests\Scoutings;

use App\Http\Requests\BaseFormRequest;
use Illuminate\Foundation\Http\FormRequest;

class ScoutingCreateRequest extends BaseFormRequest
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
            'championship'     => 'required',
            'event'            => 'required',
            'leftAthlete'      => 'required',
            'rightAthlete'     => 'required',
            'translation.name' => 'required',
            'videoSrc'         => 'required|url'
        ];
    }
}