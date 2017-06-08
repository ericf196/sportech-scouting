<?php

namespace App\Http\Controllers\Api\Auth;

use App\Mail\InviteCreated;
use App\Mail\ResetPassword;
use App\Scouting\Entities\Invites\Invite;
use App\Scouting\Entities\PasswordResets\PasswordReset;
use App\Scouting\Entities\Users\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Support\Facades\Mail;


class ForgotPasswordController extends Controller
{

    use SendsPasswordResetEmails;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

   /* public function getResetToken(Request $request)
    {
        $request_prueba=$request->only('email_recover');
        if ($request_prueba) {
            $user = User::where('email', $request['email_recover'])->first();

            try {
                if (!$user) {
                    return response()->json(['message' => 'Mail not sent']);
                }else{
                    $token = str_random();
                    $reset_password = PasswordReset::create([
                        'email' => $request['email_recover'],
                        'token' => $token
                    ]);
                    Mail::to($request['email_recover'])->send(new ResetPassword($reset_password));

                }
            } catch (Exception $e) {
                return response()->json(['message' => 'Mail not sent verify connection']);
            }
            return response()->json(['message' => 'Mail sent']);
        }

    }*/

    public function getResetToken(Request $request)
    {
        $isToken=true;
        $request_prueba=$request->only('email_recover');
        if ($request_prueba) {
            $user = User::where('email', $request['email_recover'])->first();
            try {
                if (!$user) {
                    return response()->json(['message' => 'Mail not sent']);
                }else{
                    while ($isToken){
                        $token = str_random();
                        $affectedRows = PasswordReset::where('token', $token)->first();
                        if($affectedRows==0){
                            $isToken=false;
                            $reset_password = PasswordReset::create([
                                'email' => $request['email_recover'],
                                'token' => $token
                            ]);
                            Mail::to($request['email_recover'])->send(new ResetPassword($reset_password));
                        }
                    }
                }
            } catch (Exception $e) {
                return response()->json(['message' => 'Mail not sent verify connection']);
            }
            return response()->json(['message' => 'Mail sent']);
        }

    }

}
