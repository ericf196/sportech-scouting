<?php

namespace App\Http\Controllers\api\auth;

use App\Scouting\Entities\PasswordResets\PasswordReset;
use App\Scouting\Entities\Users\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ResetPasswordController extends Controller
{


    public function __construct()
    {
        $this->middleware('guest');
    }

    public function reset(Request $request, $token)
    {

        $user = PasswordReset::where('token', $token)->first();

        if(!$user){
            return response()->json(['message' => 'Your password has not been changed']);
        }else{

           // echo $request->password;
            $affectedRows = User::where('email', $user->email)->update(array('password' => bcrypt($request->password)));
            if($affectedRows>0){
                return response()->json(['message' => 'Your password has been changed']);
            }
        }

    }
}
