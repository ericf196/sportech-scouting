<?php
namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserChangePasswordRequest;
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
        /** @var User $user */
        $user = $jwt->parseToken()->authenticate();
        $user->load('athlete');
        $athlete = $user->athlete;
        $data = $request->all();
        $athleteData = $request->get('athlete');
        $athleteData['first_name'] = $request->get('first_name');
        $athleteData['last_name'] = $request->get('last_name');
        $athleteData['created_by'] = $user->id;
        $athleteData['gender'] = $data['gender']['gender'];
        unset($athleteData['ranking']);
        $user->fill($data);
        $user->save();

        if ($athlete) {
            $user->athlete()->update($athleteData);
        } else {
            $athlete = $user->athlete()->create($athleteData);
        }

        if ($request->hasFile('image')) {
            $athlete->clearMediaCollection('profile');
            $user->clearMediaCollection('profile');
            $user->addMedia($request->file('image'))->preservingOriginal()->toMediaLibrary('profile');
            $athlete->addMedia($request->file('image'))->preservingOriginal()->toMediaLibrary('profile');
        } elseif ($request->has('removeImage')) {
            $user->clearMediaCollection('profile');
            $athlete->clearMediaCollection('profile');
        }
        return response()->json(['message' => trans('admin/users/users.updated_successfully')]);
    }

    public function create(Request $request)
    {
        return User::create([
            'username'           => $request['user_name'],
            'first_name'         => $request['first_name'],
            'last_name'          => $request['last_name'],
            'email'              => $request['email'],
            'password'           => bcrypt($request['password']),
            'number_invitations' => 10,
            'active'             => 1,
        ]);
    }

    public function changePassword(UserChangePasswordRequest $request)
    {
        $user = $this->loggedInUser();
        $oldPassword = $request->get('old_password');
        if (!\Hash::check($oldPassword, $user->password)) {
            return response()->json(['error' => 'The provided credentials does not match our records'], 401);
        }
        $user->password = bcrypt($request->get('new_password'));
        $user->save();

        return response()->json(['message' => 'Password Updated Succesfully']);
    }


}