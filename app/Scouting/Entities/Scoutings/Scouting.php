<?php

namespace App\Scouting\Entities\Scoutings;

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Championships\Championship;
use App\Scouting\Entities\Events\Event;
use App\Scouting\Entities\Users\User;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Scouting extends Model
{
    use HasTranslations;

    protected $table = 'scoutings';

    public $translatable = ['name', 'description'];

    protected $fillable = ['name', 'description', 'video_src', 'event_id',
                           'championship_id', 'scouter_id', 'left_athlete_id', 'right_athlete_id'];
    protected $casts = [
        'championship_id'  => 'integer',
        'event_id'         => 'integer',
        'scouter_id'       => 'integer',
        'left_athlete_id'  => 'integer',
        'right_athlete_id' => 'integer',
    ];

    public function scoutingTouches()
    {
        return $this->hasMany(ScoutingTouch::class);
    }

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function championship()
    {
        return $this->belongsTo(Championship::class);
    }

    public function leftAthlete()
    {
        return $this->belongsTo(Athlete::class, 'left_athlete_id');
    }

    public function rightAthlete()
    {
        return $this->belongsTo(Athlete::class, 'right_athlete_id');
    }

    public function scouter()
    {
        return $this->belongsTo(User::class, 'scouter_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
