<?php
namespace App\Scouting\Repositories\Users;

use App\Scouting\Entities\Users\User;
use App\Scouting\Repositories\Contracts\Users\UserRepository;
use Prettus\Repository\Eloquent\BaseRepository;

class UserRepositoryEloquent extends BaseRepository implements UserRepository
{

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }
}