<?php

namespace App\Scouting\Repositories\Scoutings;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Scouting\Repositories\Contracts\Scoutings\TagOptionRepository;
use App\Scouting\Entities\Scoutings\TagOption;
use App\Scouting\Validators\Scoutings\TagOptionValidator;

/**
 * Class TagOptionRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Scoutings;
 */
class TagOptionRepositoryEloquent extends BaseRepository implements TagOptionRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return TagOption::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
