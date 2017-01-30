<?php

namespace App\Scouting\Repositories\Contracts\Athletes;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface AthleteRepository
 * @package namespace App\Scouting\Repositories\Contracts\Athletes;
 */
interface AthleteRepository extends RepositoryInterface
{
    /**
     * @param $except
     * @return mixed
     */
    public function datatable($except);
}
