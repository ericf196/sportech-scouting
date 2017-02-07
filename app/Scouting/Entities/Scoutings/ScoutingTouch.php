<?php

namespace App\Scouting\Entities\Scoutings;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Scoutings\ScoutingTouch
 *
 * @property int $id
 * @property int $scouting_id
 * @property array $title
 * @property int $start
 * @property int $end
 * @property int $duration
 * @property array $color
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Scoutings\ScoutingTouchAction[] $actions
 * @property-read \App\Scouting\Entities\Scoutings\Scouting $scouting
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouch whereColor($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouch whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouch whereDuration($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouch whereEnd($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouch whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouch whereScoutingId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouch whereStart($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouch whereTitle($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouch whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ScoutingTouch extends Model
{
    use HasTranslations;

    protected $table = 'scoutings_touches';

    public $translatable = ['title'];

    protected $fillable = ['title', 'start', 'end', 'duration', 'color'];
    protected $casts = [
        'end'      => 'integer',
        'start'    => 'integer',
        'duration' => 'integer',
        'color'    => 'json'
    ];

    public function scouting()
    {
        return $this->belongsTo(Scouting::class);
    }

    public function actions()
    {
        return $this->hasMany(ScoutingTouchAction::class, 'scouting_touch_id');
    }
}
