<?php

namespace App\Scouting\Repositories\Events;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Events\EventReachRepository;
use App\Scouting\Entities\Events\EventReach;
/**
 * Class EventReachRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Events;
 */
class EventReachRepositoryEloquent extends BaseRepository implements EventReachRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return EventReach::class;
    }

}
