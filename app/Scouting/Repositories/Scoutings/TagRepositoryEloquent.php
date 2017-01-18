<?php

namespace App\Scouting\Repositories\Scoutings;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Scouting\Repositories\Contracts\Scoutings\TagRepository;
use App\Scouting\Entities\Scoutings\Tag;
use App\Scouting\Validators\Scoutings\TagValidator;

/**
 * Class TagRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Scoutings;
 */
class TagRepositoryEloquent extends BaseRepository implements TagRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Tag::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
