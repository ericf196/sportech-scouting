<?php
namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserUpdateRequest;
use App\Scouting\Entities\Users\User;
use App\Scouting\Transformers\User\UserTransformer;
use Tymon\JWTAuth\JWTAuth;
use App\Scouting\Entities\Athletes\Athlete;

class UserStatisticsController extends Controller
{

    /**
     * @param JWTAuth $jwt
     * @return array
     */
    public function summary(JWTAuth $jwt)
    {
        $user = $jwt->parseToken()->authenticate();

        $user = User::withCount(['scoutings', 'reports', 'athletes', 'events'])->find($user->id);
        return $this->createItem(['user' => $user->toArray()], function ($data) {
            $user = $data['user'];
            return [
                'scoutings' => $user['scoutings_count'],
                'reports'   => $user['reports_count'],
                'athletes'  => $user['athletes_count'],
                'events'    => $user['events_count'],
            ];
        });
    }


}