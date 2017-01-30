<?php

namespace App\Scouting\Repositories\Locations;

use App\Scouting\Repositories\Contracts\Locations\CountryRepository;
use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Entities\Locations\Location;
use Webpatser\Countries\Countries;

/**
 * Class LocationRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Locations;
 */
class CountryRepositoryEloquent extends BaseRepository implements CountryRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Countries::class;
    }
}
