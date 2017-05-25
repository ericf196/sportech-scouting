<?php

namespace App\Scouting\Entities\Scoutings;

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Championships\Championship;
use App\Scouting\Entities\Events\Event;
use App\Scouting\Entities\Users\User;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Scoutings\Scouting
 *
 * @property int $id
 * @property int $scouter_id
 * @property int $event_id
 * @property int $championship_id
 * @property int $left_athlete_id
 * @property int $right_athlete_id
 * @property array $name
 * @property array $description
 * @property string $video_src
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \App\Scouting\Entities\Championships\Championship $championship
 * @property-read \App\Scouting\Entities\Events\Event $event
 * @property-read \App\Scouting\Entities\Athletes\Athlete $leftAthlete
 * @property-read \App\Scouting\Entities\Athletes\Athlete $rightAthlete
 * @property-read \App\Scouting\Entities\Users\User $scouter
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Scoutings\ScoutingTouch[] $scoutingTouches
 * @property-read \App\Scouting\Entities\Users\User $user
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Scouting whereChampionshipId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Scouting whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Scouting whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Scouting whereEventId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Scouting whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Scouting whereLeftAthleteId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Scouting whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Scouting whereRightAthleteId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Scouting whereScouterId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Scouting whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Scouting whereVideoSrc($value)
 * @mixin \Eloquent
 */
class Scouting extends Model
{
    use HasTranslations;

    protected $table = 'scoutings';

    public $translatable = ['name', 'description'];

    protected $fillable = ['name', 'description', 'video_src', 'scouter_id'];
    protected $casts = [
        'scouter_id' => 'integer',
    ];

    public function scoutingTouches()
    {
        return $this->hasMany(ScoutingTouch::class);
    }

    public function scouter()
    {
        return $this->belongsTo(User::class, 'scouter_id');
    }

}
