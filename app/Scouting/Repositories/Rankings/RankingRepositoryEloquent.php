<?php

namespace App\Scouting\Repositories\Rankings;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Scouting\Repositories\Contracts\Rankings\RankingRepository;
use App\Scouting\Entities\Rankings\Ranking;
use App\Scouting\Validators\Rankings\RankingValidator;

/**
 * Class RankingRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Rankings;
 */
class RankingRepositoryEloquent extends BaseRepository implements RankingRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Ranking::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function ranking($perPage = 10)
    {
        return $this->model->newQuery()->orderBy('points', 'desc')->getWithRowNumber(['*'], $perPage);
    }
}
