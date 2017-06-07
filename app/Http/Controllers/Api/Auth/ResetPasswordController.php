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

            return response()->make(trans('admin/events/events.not_found'), 404); // modifcar trans
        }else{
            $affectedRows = User::where('email', $user->email)->update(array('password' => bcrypt($request->new_password)));
            if($affectedRows>0)
                return response()->make(trans('admin/events/events.not_found'), 404); // modifcar trans
            //echo $affectedRows;
        }

    }
}
