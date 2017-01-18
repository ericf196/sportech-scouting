<?php

namespace App\Scouting\Transformers\Sports;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Sports\Sport;

/**
 * Class SportTransformer
 * @package namespace App\Scouting\Transformers\Sports;
 */
class SportTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'specialties'
    ];

    /**
     * Transform the \Sport entity
     * @param Sport $model
     *
     * @return array
     */
    public function transform(Sport $model)
    {
        return [
            'id'   => $model->id,
            'name' => trans('sports.' . str_slug(strtolower($model->name)))
        ];
    }

    /**
     * @param Sport $model
     * @return \League\Fractal\Resource\Collection
     */
    public function includeSpecialties(Sport $model)
    {
        if ($model->specialties) {
            return $this->collection($model->specialties, new SpecialtyTransformer(), 'parent');
        }
    }
}
