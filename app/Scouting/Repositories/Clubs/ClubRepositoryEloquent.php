<?php

namespace App\Scouting\Repositories\Clubs;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Clubs\ClubRepository;
use App\Scouting\Entities\Clubs\Club;

/**
 * Class ClubRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Clubs;
 */
class ClubRepositoryEloquent extends BaseRepository implements ClubRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Club::class;
    }
}
