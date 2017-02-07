<?php

namespace App\Scouting\Entities\Scoutings;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Scoutings\ScoutingTouchAction
 *
 * @property int $id
 * @property int $scouting_touch_id
 * @property int $start
 * @property int $end
 * @property int $duration
 * @property array $color
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Scoutings\Tag[] $leftTags
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Scoutings\Tag[] $rightTags
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouchAction whereColor($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouchAction whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouchAction whereDuration($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouchAction whereEnd($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouchAction whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouchAction whereScoutingTouchId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouchAction whereStart($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\ScoutingTouchAction whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ScoutingTouchAction extends Model
{
    use HasTranslations;

    protected $table = 'scoutings_touches_actions';

    protected $fillable = ['start', 'end', 'duration', 'color'];
    protected $casts = [
        'end'      => 'integer',
        'start'    => 'integer',
        'duration' => 'integer',
        'color'    => 'json'
    ];

    public function leftTags()
    {
        return $this->belongsToMany(Tag::class, 'scoutings_touches_actions_left_tags', 'scouting_action_id', 'tag_id')->withPivot('tag_option_id');
    }

    public function rightTags()
    {
        return $this->belongsToMany(Tag::class, 'scoutings_touches_actions_right_tags', 'scouting_action_id', 'tag_id')->withPivot('tag_option_id');
    }
}
