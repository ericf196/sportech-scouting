<?php

namespace App\Scouting\Transformers\Scoutings;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Scoutings\ScoutingTouchAction;

/**
 * Class ScoutingTouchActionTransformer
 * @package namespace App\Scouting\Transformers\Scoutings;
 */
class ScoutingTouchActionTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'leftTags',
        'rightTags'
    ];

    /**
     * Transform the ScoutingTouchAction entity
     * @param ScoutingTouchAction $model
     *
     * @return array
     */
    public function transform(ScoutingTouchAction $model)
    {
        return [
            'id'         => (int)$model->id,
            'start'      => $model->start,
            'end'        => $model->end,
            'duration'   => $model->duration,
            'color'      => $model->color,
        ];
    }

    public function includeLeftTags(ScoutingTouchAction $model)
    {
        if ($model->leftTags) {
            return $this->collection($model->leftTags, new TagTransformer(),'parent');
        }
    }

    public function includeRightTags(ScoutingTouchAction $model)
    {
        if ($model->rightTags) {
            return $this->collection($model->rightTags, new TagTransformer(),'parent');
        }
    }
}
