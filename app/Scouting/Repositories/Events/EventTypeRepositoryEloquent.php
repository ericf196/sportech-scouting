<?php

namespace App\Scouting\Repositories\Events;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Events\EventTypeRepository;
use App\Scouting\Entities\Events\EventType;

/**
 * Class EventTypeRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Events;
 */
class EventTypeRepositoryEloquent extends BaseRepository implements EventTypeRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return EventType::class;
    }
}
