<?php

namespace App\Scouting\Entities\Events;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

class EventType extends Model
{
    use HasTranslations;

    public $translatable = ['type'];

    protected $fillable = ['type'];
    public $timestamps = false;

    public function events()
    {
        return $this->hasMany(Event::class);
    }

}
