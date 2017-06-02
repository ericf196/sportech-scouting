<?php

namespace App\Scouting\Entities\Invites;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Scouting\Entities\Invites\Invite
 *
 * @property int $id
 * @property string $email
 * @property string $token
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property \Carbon\Carbon $deleted_at
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Invites\Invite whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Invites\Invite whereDeletedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Invites\Invite whereEmail($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Invites\Invite whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Invites\Invite whereToken($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Invites\Invite whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Invite extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'email', 'token',
    ];
    protected $dates = ['deleted_at'];

}
