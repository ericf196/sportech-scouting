<?php
namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserUpdateRequest;
use App\Scouting\Transformers\User\UserTransformer;
use Tymon\JWTAuth\JWTAuth;
use App\Scouting\Entities\Athletes\Athlete;
use Illuminate\Http\Request;
use App\Scouting\Entities\Users\User;

class UserController extends Controller
{

    /**
     * @param UserUpdateRequest $request
     * @param JWTAuth $jwt
     * @return array
     */
    public function update(UserUpdateRequest $request, JWTAuth $jwt)
    {
        $user = $jwt->parseToken()->authenticate();

        $user->load('athlete');
        $user->first_name = $request->get('first_name');
        $user->last_name = $request->get('last_name');
        $user->email = $request->get('email');
        $user->save();

        if ($request->file('profile_picture')) {
            if ($user->getMedia('profile')->count()) {
                $user->clearMediaCollection('profile');
            }
            $user->addMedia($request->file('profile_picture'))->preservingOriginal()->toCollection('profile');
        }

        /** @var Athlete $athlete */
        $athlete = $user->athlete;
        $athleteData = $request->except(['email']);
        if ($athlete) {
            $athlete->fill($athleteData);
            $athlete->save();
            if ($request->file('profile_picture')) {
                if ($athlete->getMedia('profile')->count()) {
                    $athlete->clearMediaCollection('profile');
                }
                $athlete->addMedia($request->file('profile_picture'))->preservingOriginal()->toCollection('profile');
            }
            return response()->json(['message' => trans('admin/users/users.updated_successfully')]);
        }

        $athlete = $user->athlete()->create($athleteData);
        if ($request->file('profile_picture')) {
            $athlete->addMedia($request->file('profile_picture'))->preservingOriginal()->toCollection('profile');
        }

        return response()->json(['message' => trans('admin/users/users.updated_successfully')]);
    }

    public function create(Request $request)
    {
        return User::create([
            'username' => $request['user_name'],
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
            'number_invitations' => 10,
            'active' => 1,
        ]);
    }


}