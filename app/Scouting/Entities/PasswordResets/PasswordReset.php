<?php

namespace App\Scouting\Entities\PasswordResets;

use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    protected $fillable = ['email', 'token'];
}
