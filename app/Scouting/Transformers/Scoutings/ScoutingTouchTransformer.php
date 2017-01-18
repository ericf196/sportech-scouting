<?php

namespace App\Scouting\Transformers\Scoutings;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Scoutings\ScoutingTouch;

/**
 * Class ScoutingTouchTransformer
 * @package namespace App\Scouting\Transformers\Scoutings;
 */
class ScoutingTouchTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'actions'
    ];

    /**
     * Transform the \ScoutingTouch entity
     * @param ScoutingTouch $model
     *
     * @return array
     */
    public function transform(ScoutingTouch $model)
    {
        return [
            'id'         => (int)$model->id,
            'title'      => $model->title,
            'start'      => $model->start,
            'end'        => $model->end,
            'duration'   => $model->duration,
            'color'      => $model->color,
        ];
    }

    public function includeActions(ScoutingTouch $model)
    {
        if ($model->actions) {
            return $this->collection($model->actions, new ScoutingTouchActionTransformer(),'parent');
        }
    }
}
