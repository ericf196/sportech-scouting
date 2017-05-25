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

        $user = User::with('completedChallenges')->withCount(['scoutings', 'reports', 'completedChallenges'])->find($user->id);

        $rank = \DB::table(\DB::raw('
        (SELECT user_id, points, rank 
        FROM (SELECT user_id, points, 
        @curRank := IF(@prevRank = points, @curRank, @incRank) AS rank, 
        @incRank := @incRank + 1, 
        @prevRank := points
        FROM ranking p, (SELECT @curRank :=0, @prevRank := NULL, @incRank := 1) r 
        ORDER BY points desc) s) d'))
            ->select(\DB::raw('user_id,rank,points'))
            ->where('user_id', 1)->get();

        return $this->createItem(['user' => $user->toArray(), 'rank' => $rank->first()], function ($data) {
            $user = $data['user'];
            $rank = $data['rank'];

            return [
                'scoutings'           => $user['scoutings_count'],
                'reports'             => $user['reports_count'],
                'completedChallenges' => $user['completed_challenges_count'],
                'ranking'             => ordinal($rank->rank),
                'points'              => $rank->points,
                'invitations'              => $user['number_invitations']

            ];
        });
    }


}