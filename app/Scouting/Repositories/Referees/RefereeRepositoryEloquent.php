<?php

namespace App\Scouting\Repositories\Referees;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Referees\RefereeRepository;
use App\Scouting\Entities\Referees\Referee;

/**
 * Class RefereeRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Referees;
 */
class RefereeRepositoryEloquent extends BaseRepository implements RefereeRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Referee::class;
    }
}
