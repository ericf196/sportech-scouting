<?php

namespace App\Scouting\Repositories\Athletes;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Athletes\AthleteRepository;
use App\Scouting\Entities\Athletes\Athlete;

/**
 * Class AthleteRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Athletes;
 */
class AthleteRepositoryEloquent extends BaseRepository implements AthleteRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Athlete::class;
    }
}
