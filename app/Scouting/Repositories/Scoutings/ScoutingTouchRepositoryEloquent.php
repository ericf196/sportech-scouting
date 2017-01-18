<?php

namespace App\Scouting\Repositories\Scoutings;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingTouchRepository;
use App\Scouting\Entities\Scoutings\ScoutingTouch;
use App\Scouting\Validators\Scoutings\ScoutingTouchValidator;

/**
 * Class ScoutingTouchRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Scoutings;
 */
class ScoutingTouchRepositoryEloquent extends BaseRepository implements ScoutingTouchRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ScoutingTouch::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
