<?php
namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use App\Scouting\Entities\Users\User;
use App\Scouting\Repositories\Contracts\Challenges\ChallengeRepository;
use App\Scouting\Transformers\Challenges\ChallengeTransformer;
use Tymon\JWTAuth\JWTAuth;
use Yajra\Datatables\Datatables;

class UserChallengeController extends Controller
{

    public function completed(JWTAuth $jwt)
    {
        /** @var User $user */
        $user = $jwt->parseToken()->authenticate();
        $completedChallenges = $user->completedChallenges()->get();
        return $this->createCollection($completedChallenges, new ChallengeTransformer(), 'data');
    }

    public function inProgress(JWTAuth $jwt)
    {
        $user = $jwt->parseToken()->authenticate();
        $inProgressChallenges = $user->inProgressChallenges()->get();
        return $this->createCollection($inProgressChallenges, new ChallengeTransformer(), 'data');

    }

    public function available(JWTAuth $jwt, ChallengeRepository $repository)
    {
        $user = $jwt->parseToken()->authenticate();
        $userChallenges = $user->challenges()->get();
        $userChallengesIds = $userChallenges->pluck('id');
        return Datatables::of($repository->datatable($userChallengesIds))
            ->setTransformer(new ChallengeTransformer())
            ->make(true);
    }

}