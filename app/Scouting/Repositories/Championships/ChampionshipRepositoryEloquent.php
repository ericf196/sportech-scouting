<?php

namespace App\Scouting\Repositories\Championships;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Championships\ChampionshipRepository;
use App\Scouting\Entities\Championships\Championship;

/**
 * Class ChampionshipRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Championships;
 */
class ChampionshipRepositoryEloquent extends BaseRepository implements ChampionshipRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Championship::class;
    }

}
