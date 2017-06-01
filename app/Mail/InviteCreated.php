<?php

namespace App\Mail;

use App\Scouting\Entities\Users\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Scouting\Entities\Invites\Invite;

class InviteCreated extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new message instance.
     *
     * @param Invite $invite
     * @param User $user
     */
    public function __construct(Invite $invite, User $user)
    {
        $this->invite = $invite;
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(env('MAIL_SEND_ADDRESS'))->subject('You has been invited to scouting37!')
            ->markdown('emails.invite')->with('url',url())->with('image', url('/images/logo_small_white.png'))->with('invite', $this->invite)->with('user', $this->user);
    }
}
