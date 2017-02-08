<?php

namespace App\Scouting\Entities\Reports;

use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Entities\Users\User;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Report extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scouting()
    {
        return $this->belongsTo(Scouting::class);

    }
}
