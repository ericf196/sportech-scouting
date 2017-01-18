<?php

namespace App\Scouting\Transformers\Locations;

use League\Fractal\TransformerAbstract;
use Webpatser\Countries\Countries;

/**
 * Class CountryTransformerTransformer
 * @package namespace App\Scouting\Transformers\Locations;
 */
class CountryTransformer extends TransformerAbstract
{

    /**
     * Transform the \CountryTransformer entity
     * @param Countries $model
     * @return array
     */
    public function transform(Countries $model)
    {
        return [
            'id'   => $model->id,
            'name' => $model->name,
            'code' => $model->iso_3166_2,
            'flag' => url('images/flags/' . $model->flag)
        ];
    }
}
