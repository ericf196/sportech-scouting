<?php

namespace App\Scouting\Entities\Events;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

class EventReach extends Model
{
    use HasTranslations;

    public $translatable = ['reach'];

    protected $table = 'event_reaches';

    protected $fillable = ['reach'];

    public $timestamps = false;

    public function events()
    {
        return $this->hasMany(Event::class, 'event_reach_id');
    }
}
