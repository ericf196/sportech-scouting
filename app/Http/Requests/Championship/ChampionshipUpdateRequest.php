<?php
namespace App\Http\Requests\Championship;

use App\Http\Requests\BaseFormRequest;

class ChampionshipUpdateRequest extends BaseFormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'      => 'required',
            'sport_id'  => 'required',
            'init_date' => 'required',
            'end_date'  => 'required',
        ];
    }

}