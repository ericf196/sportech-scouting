<?php

namespace App\Scouting\Repositories\Contracts\Rankings;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface RankingRepository
 * @package namespace App\Scouting\Repositories\Contracts\Rankings;
 */
interface RankingRepository extends RepositoryInterface
{
    public function ranking($perPage = 10);
}
