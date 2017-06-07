<?php
/**
 * Created by PhpStorm.
 * User: Eric Freitez
 * Date: 31/05/2017
 * Time: 03:20 PM
 */

namespace App\Mail;


use App\Scouting\Entities\PasswordResets\PasswordReset;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetPassword extends Mailable
{

    use Queueable, SerializesModels;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(PasswordReset $passwordReset)
    {
        $this->passwordReset = $passwordReset;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('contact@scouting37.com')->subject('Reset Password')
            ->view('emails.password')->with('resetPassword',$this->passwordReset);
    }

}