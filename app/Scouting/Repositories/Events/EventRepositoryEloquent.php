<?php

namespace App\Scouting\Repositories\Events;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Events\EventRepository;
use App\Scouting\Entities\Events\Event;

/**
 * Class EventRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Events;
 */
class EventRepositoryEloquent extends BaseRepository implements EventRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Event::class;
    }

}
