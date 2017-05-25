<?php

namespace App\Scouting\Repositories\Scoutings;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingRepository;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Validators\Scoutings\ScoutingValidator;
use Tymon\JWTAuth\Facades\JWTAuth;

/**
 * Class ScoutingRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Scoutings;
 */
class ScoutingRepositoryEloquent extends BaseRepository implements ScoutingRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Scouting::class;
    }

    public function latest()
    {
        return $this->model->newQuery()->orderBy('created_at','desc')->first();
    }
}
