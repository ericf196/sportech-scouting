<?php

namespace App\Scouting\Repositories\Sports;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Sports\SpecialtyRepository;
use App\Scouting\Entities\Sports\Specialty;

/**
 * Class SpecialtyRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Sports;
 */
class SpecialtyRepositoryEloquent extends BaseRepository implements SpecialtyRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Specialty::class;
    }
}
