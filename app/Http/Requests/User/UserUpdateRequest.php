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
            'first_name'   => 'required',
            'last_name'    => 'required',
            'sport_id'     => 'required',
            'specialty_id' => 'required',
            'country_id'   => 'required',
            'gender'       => 'required',
        ];
    }
}