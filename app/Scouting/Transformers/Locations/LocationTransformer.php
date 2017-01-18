<?php

namespace App\Scouting\Transformers\Locations;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Locations\Location;

/**
 * Class LocationTransformer
 * @package namespace App\Scouting\Transformers\Locations;
 */
class LocationTransformer extends TransformerAbstract
{

    protected $defaultIncludes = [
        'country'
    ];

    /**
     * @param Location $model
     * @return array
     */
    public function transform(Location $model)
    {
        return [
            'id'          => $model->id,
            'latitude'    => $model->latitude,
            'longitude'   => $model->longitude,
            'name'        => $model->name,
            'description' => $model->description,
            'address'     => $model->address,
            'state'       => $model->state,
            'city'        => $model->city,
        ];
    }

    /**
     * @param Location $model
     * @return \League\Fractal\Resource\Item
     */
    public function includeCountry(Location $model)
    {
        if ($model->country) {
            return $this->item($model->country, new CountryTransformer(), 'parent');
        }
    }
}
