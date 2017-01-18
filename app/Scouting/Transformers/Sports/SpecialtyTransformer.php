<?php

namespace App\Scouting\Transformers\Sports;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Sports\Specialty;

/**
 * Class SpecialtyTransformer
 * @package namespace App\Scouting\Transformers\Sports;
 */
class SpecialtyTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'sport'
    ];

    /**
     * Transform de Specialty Entity
     * @param Specialty $model
     * @return array
     */
    public function transform(Specialty $model)
    {
        return [
            'id'          => $model->id,
            'name'        => $model->name,
            'description' => $model->description
        ];
    }

    /**
     * @param Specialty $model
     * @return \League\Fractal\Resource\Item
     */
    public function includeSport(Specialty $model)
    {
        if ($model->sport) {
            return $this->item($model->sport, new SportTransformer(), 'parent');
        }
    }
}
