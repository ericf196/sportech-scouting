<?php

namespace App\Scouting\Transformers\Referees;

use App\Scouting\Transformers\Locations\CountryTransformer;
use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Referees\Referee;

/**
 * Class RefereeTransformer
 * @package namespace App\Scouting\Transformers\Referees;
 */
class RefereeTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'country'
    ];

    /**
     * @param Referee $model
     * @return array
     */
    public function transform(Referee $model)
    {

        return [
            'id'              => $model->id,
            'first_name'      => $model->first_name,
            'last_name'       => $model->last_name,
            'name'            => $model->first_name . ' ' . $model->last_name,
            'federation_code' => $model->federation_code,
            'gender'          => ['gender' => $model->gender, 'name' => trans('admin/athletes/athletes.' . $model->gender)],
            'image'           => $model->getFirstMediaUrl('profile', 'medium') ?: url('/images/missing/athlete/missing.png'),
            'birth_date'      => $model->birth_date,

        ];
    }

    /**
     * @param Referee $model
     * @return \League\Fractal\Resource\Item
     */
    public function includeCountry(Referee $model)
    {
        if ($model->country)
            return $this->item($model->country, new CountryTransformer(), 'parent');
    }

}
