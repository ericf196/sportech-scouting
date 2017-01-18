<?php

namespace App\Scouting\Transformers\Scoutings;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Scoutings\Tag;

/**
 * Class TagTransformer
 * @package namespace App\Scouting\Transformers\Scoutings;
 */
class TagTransformer extends TransformerAbstract
{

    /**
     * Transform the Tag entity
     * @param Tag $model
     *
     * @return array
     */
    public function transform(Tag $model)
    {
        return [
            'id'       => (int)$model->id,
            'name'     => $model->name,
            'abbr'     => $model->abbr,
            'dropdown' => $model->dropdown
        ];
    }
}
