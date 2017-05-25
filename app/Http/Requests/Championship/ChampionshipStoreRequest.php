<?php
namespace App\Http\Requests\Championship;

use App\Http\Requests\BaseFormRequest;

class ChampionshipStoreRequest extends BaseFormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'       => 'required',
            'country_id' => 'required',
            'sport_id'   => 'required',
            'init_date'  => 'required',
            'end_date'   => 'required',
        ];
    }

}