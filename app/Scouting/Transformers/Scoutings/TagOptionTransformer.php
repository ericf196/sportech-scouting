<?php

namespace App\Scouting\Transformers\Scoutings;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Scoutings\TagOption;

/**
 * Class TagOptionTransformer
 * @package namespace App\Scouting\Transformers\Scoutings;
 */
class TagOptionTransformer extends TransformerAbstract
{

    /**
     * Transform the TagOption entity
     * @param TagOption $model
     *
     * @return array
     */
    public function transform(TagOption $model)
    {
        return [
            'id'    => (int)$model->id,
            'name'  => $model->name,
            'value' => $model->value
        ];
    }
}
