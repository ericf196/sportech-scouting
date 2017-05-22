<?php

namespace App\Http\Controllers\Api\Invites;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Scouting\Entities\Invites\Invite;

use App\Mail\InviteCreated;
use Illuminate\Support\Facades\Mail;
use App\Scouting\Entities\Users\User;
class InviteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function invite()
    {
        return view('home');
    }

    public function process(Request $request)
    {
        try {
            $token = str_random();
            if(!Invite::where('token', $token)->first()){
                $invite = Invite::create([
                    'email' => $request->get('email'),
                    'token' => $token
                ]);
            }
            Mail::to($request->get('email'))->send(new InviteCreated($invite));
        } catch (ModelNotFoundException $e) {
            //response()->make(trans('admin/users/users.sms_invite'), 404);
        }

        return response()->json(['message' => trans('admin/users/users.sms_invite')]);
    }

    public function accept(Request $request)
    {
        if (!$invite = Invite::where('token', $request['token'])->first()) {
            // No existe la invitacion
            return response()->json(['message' => trans('admin/users/users.sms_invite_used')]);
        }
        User::create([
            'username' => $request['user_name'],
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'email' => $invite->email,
            'password' => bcrypt($request['password']),
            'number_invitations' => 10,
            'active' => 1,
        ]);
        //$this->destroy($request['token']);
        $invite->delete();

        // here you would probably log the user in and show them the dashboard, but we'll just prove it worked

        return response()->json(['message' => trans('admin/users/users.sms_invite')]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

   public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }
    public function update(Request $request, $id)
    {
        //
    }


}
