<?php
namespace App\Scouting\Repositories\Contracts\Challenges;

use Illuminate\Support\Collection;
use Prettus\Repository\Contracts\RepositoryInterface;

interface ChallengeRepository extends RepositoryInterface
{

    public function datatable(Collection $excepts);
}