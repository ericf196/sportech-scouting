<?php
namespace App\Http\Requests\Events;

use App\Http\Requests\BaseFormRequest;

class EventUpdateRequest extends BaseFormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'translation'     => 'required',
            'championship_id' => 'required',
            'specialty_id'    => 'required',
            'category_id'     => 'required',
            'event_type_id'   => 'required',
            'event_reach_id'  => 'required',
            'gender'          => 'required',
            'init_date'       => 'required',
            'end_date'        => 'required',
        ];
    }

}