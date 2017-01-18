<?php

namespace App\Scouting\Repositories\Scoutings;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingTouchActionRepository;
use App\Scouting\Entities\Scoutings\ScoutingTouchAction;
use App\Scouting\Validators\Scoutings\ScoutingTouchActionValidator;

/**
 * Class ScoutingTouchActionRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Scoutings;
 */
class ScoutingTouchActionRepositoryEloquent extends BaseRepository implements ScoutingTouchActionRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ScoutingTouchAction::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
