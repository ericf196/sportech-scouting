<?php

namespace App\Scouting\Entities\Rankings;

use App\Scouting\Entities\Users\User;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Ranking extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable = ['points'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
