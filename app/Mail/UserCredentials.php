<?php

namespace App\Mail;

use App\Scouting\Entities\Users\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserCredentials extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * @var User
     */
    private $user;
    /**
     * @var
     */
    private $password;

    /**
     * Create a new message instance.
     *
     * @param User $user
     * @param $password
     */
    public function __construct(User $user, $password)
    {
        //
        $this->user = $user;
        $this->password = $password;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(env('MAIL_SEND_ADDRESS'))->subject('scouting37 is live!')
            ->markdown('emails.credentials')->with('url', url())->with('image', url('/images/logo_small_white.png'))
            ->with('user', $this->user)->with('password', $this->password);
    }
}
