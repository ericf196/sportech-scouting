<?php

namespace App\Scouting\Transformers\Events;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Events\EventType;

/**
 * Class EventTypeTransformer
 * @package namespace App\Scouting\Transformers\Events;
 */
class EventTypeTransformer extends TransformerAbstract
{

    /**
     * Transform the \EventType entity
     * @param EventType $model
     *
     * @return array
     */
    public function transform(EventType $model)
    {
        return [
            'id'   => $model->id,
            'type' => $model->type
        ];
    }
}
