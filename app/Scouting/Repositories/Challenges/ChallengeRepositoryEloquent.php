<?php
namespace App\Scouting\Repositories\Challenges;

use App\Scouting\Entities\Challenges\Challenge;
use App\Scouting\Repositories\Contracts\Challenges\ChallengeRepository;
use Illuminate\Support\Collection;
use Prettus\Repository\Eloquent\BaseRepository;

class ChallengeRepositoryEloquent extends BaseRepository implements ChallengeRepository
{

    /**
     * Specify Model class name
     *
     * @return Challenge
     */
    public function model()
    {
        return Challenge::class;
    }

    public function datatable(Collection $excepts)
    {
        if ($excepts->count()) {
            return $this->model->newQuery()->whereNotIn('id', $excepts->toArray());
        }

        return $this->model->newQuery();
    }
}