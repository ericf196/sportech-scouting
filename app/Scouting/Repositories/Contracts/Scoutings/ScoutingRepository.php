<?php

namespace App\Scouting\Repositories\Contracts\Scoutings;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface ScoutingRepository
 * @package namespace App\Scouting\Repositories\Contracts\Scoutings;
 */
interface ScoutingRepository extends RepositoryInterface
{

    public function latest();
}
