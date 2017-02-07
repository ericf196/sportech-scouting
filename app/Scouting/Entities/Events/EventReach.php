<?php

namespace App\Scouting\Entities\Events;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Events\EventReach
 *
 * @property int $id
 * @property array $reach
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Events\Event[] $events
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\EventReach whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\EventReach whereReach($value)
 * @mixin \Eloquent
 */
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
