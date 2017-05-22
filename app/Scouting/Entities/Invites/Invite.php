<?php

namespace App\Scouting\Entities\Invites;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Invite extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'email', 'token',
    ];
    protected $dates = ['deleted_at'];

}
