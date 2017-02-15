<?php

namespace App\Scouting\Transformers\Rankings;

use App\Scouting\Transformers\User\UserTransformer;
use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Rankings\Ranking;

/**
 * Class RankingTransformer
 * @package namespace App\Scouting\Transformers\Rankings;
 */
class RankingTransformer extends TransformerAbstract
{

    protected $availableIncludes = ['user'];

    /**
     * Transform the \Ranking entity
     * @param Ranking $model
     *
     * @return array
     */
    public function transform(Ranking $model)
    {
        return [
            'id'         => (int)$model->id,
            'points'     => $model->points,
            'rank'       => $model->row ? ordinal($model->row) : 0,
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }

    public function includeUser(Ranking $model)
    {
        return $this->item($model->user, new UserTransformer(), 'parent');
    }
}
