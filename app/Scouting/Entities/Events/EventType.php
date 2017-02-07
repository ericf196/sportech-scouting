<?php

namespace App\Scouting\Entities\Events;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Events\EventType
 *
 * @property int $id
 * @property array $type
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Events\Event[] $events
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\EventType whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\EventType whereType($value)
 * @mixin \Eloquent
 */
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
