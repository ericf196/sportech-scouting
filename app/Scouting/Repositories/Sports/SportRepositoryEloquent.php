<?php

namespace App\Scouting\Repositories\Sports;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Sports\SportRepository;
use App\Scouting\Entities\Sports\Sport;

/**
 * Class SportRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Sports;
 */
class SportRepositoryEloquent extends BaseRepository implements SportRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Sport::class;
    }

}
