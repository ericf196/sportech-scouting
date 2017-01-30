<?php

namespace App\Scouting\Repositories\Athletes;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Athletes\AthleteRepository;
use App\Scouting\Entities\Athletes\Athlete;

/**
 * Class AthleteRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Athletes;
 */
class AthleteRepositoryEloquent extends BaseRepository implements AthleteRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Athlete::class;
    }

    public function datatable($except)
    {
        if ($except) {
            return $this->model->with(['sport', 'specialty', 'category', 'country', 'user'])->whereNotIn('id', explode(',', $except))->select('athletes.*');
        }
        return $this->model->with(['sport', 'specialty', 'category', 'country', 'user'])->select('athletes.*');
    }
}
