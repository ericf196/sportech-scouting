<?php
namespace App\Http\Requests\User;

use App\Http\Requests\BaseFormRequest;

class UserUpdateRequest extends BaseFormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'first_name'           => 'required',
            'last_name'            => 'required',
            'athlete.sport_id'     => 'required',
            'athlete.specialty_id' => 'required',
            'athlete.category_id'  => 'required',
            'athlete.country_id'   => 'required',
        ];
    }
}