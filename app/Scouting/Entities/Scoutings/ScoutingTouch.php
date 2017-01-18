<?php

namespace App\Scouting\Entities\Scoutings;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

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
