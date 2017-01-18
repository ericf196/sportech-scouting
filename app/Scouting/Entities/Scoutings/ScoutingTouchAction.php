<?php

namespace App\Scouting\Entities\Scoutings;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

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
