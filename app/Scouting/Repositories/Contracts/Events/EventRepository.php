<?php

namespace App\Scouting\Repositories\Contracts\Events;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface EventRepository
 * @package namespace App\Scouting\Repositories\Contracts\Events;
 */
interface EventRepository extends RepositoryInterface
{
    public function datatable();

    public function datatableIn($ids);
}
