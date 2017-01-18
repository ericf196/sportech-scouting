<?php

namespace App\Scouting\Transformers\Sports;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Sports\Category;

/**
 * Class CategoryTransformer
 * @package namespace App\Scouting\Transformers\Sports;
 */
class CategoryTransformer extends TransformerAbstract
{

    /**
     * Transform the Category entity
     * @param Category $model
     *
     * @return array
     */
    public function transform(Category $model)
    {
        return [
            'id'   => $model->id,
            'name' => $model->name
        ];
    }
}
