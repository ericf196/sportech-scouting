<?php

namespace App\Scouting\Transformers\Events;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Events\EventReach;

/**
 * Class EventReachTransformer
 * @package namespace App\Scouting\Transformers\Events;
 */
class EventReachTransformer extends TransformerAbstract
{

    /**
     * Transform the \EventReach entity
     * @param EventReach $model
     *
     * @return array
     */
    public function transform(EventReach $model)
    {
        return [
            'id'    => $model->id,
            'reach' => $model->reach
        ];
    }
}
