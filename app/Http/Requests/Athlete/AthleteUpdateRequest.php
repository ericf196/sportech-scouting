<?php
namespace App\Http\Requests\Athlete;

use App\Http\Requests\BaseFormRequest;

class AthleteUpdateRequest extends BaseFormRequest
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
            'category_id'  => 'required',
            'country_id'   => 'required',
        ];
    }
}