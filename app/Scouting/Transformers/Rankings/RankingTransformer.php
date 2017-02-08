<?php

namespace App\Scouting\Transformers\Rankings;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Rankings\Ranking;

/**
 * Class RankingTransformer
 * @package namespace App\Scouting\Transformers\Rankings;
 */
class RankingTransformer extends TransformerAbstract
{

    /**
     * Transform the \Ranking entity
     * @param \Ranking $model
     *
     * @return array
     */
    public function transform(Ranking $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
