<?php
namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Scouting\Transformers\User\UserTransformer;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\JWTAuth;

class AuthController extends Controller
{

    public function login(LoginRequest $request, JWTAuth $jwt)
    {
        $credentials = $request->only('email', 'password');
        try {
            // verify the credentials and create a token for the user
            if (!\Auth::attempt($credentials)) {
                return response()->json(['error' => 'The provided credentials does not match our records'], 401);
            }

            $user = \Auth::user();

            if ((int)!$user->active) {
                if (\Auth::check()) {
                    try {
                        \Auth::logout();
                    } catch (JWTException $e) {
                    }
                }
                return response()->json(['error' => 'This user is marked as inactive'], 401);
            }
            $token = $jwt->fromUser($user);
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could_not_create_token ' . $e->getMessage() . $e->getTraceAsString()], 500);
        }
        // if no errors are encountered we can return a JWT
        return response()->json(compact('token'))->header('Authorization', 'Bearer ' . $token);
    }


    public function logout(Request $request, JWTAuth $jwt)
    {
        $jwt->setRequest($request);
        $user = $jwt->parseToken()->authenticate();
        $jwt->invalidate($jwt->getToken());
        return response()->json(['success' => true]);
    }

    public function user(Request $request, JWTAuth $jwt)
    {
        $user = $jwt->parseToken()->authenticate();

        return $this->createItem($user, new UserTransformer());
    }
}