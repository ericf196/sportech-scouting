<?php

namespace App\Scouting\Repositories\Locations;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Locations\LocationRepository;
use App\Scouting\Entities\Locations\Location;

/**
 * Class LocationRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Locations;
 */
class LocationRepositoryEloquent extends BaseRepository implements LocationRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Location::class;
    }
}
