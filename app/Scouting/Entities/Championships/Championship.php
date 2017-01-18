<?php

namespace App\Scouting\Entities\Championships;

use App\Scouting\Entities\Clubs\Club;
use App\Scouting\Entities\Events\Event;
use App\Scouting\Entities\Locations\Location;
use App\Scouting\Entities\Sports\Sport;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\Translatable\HasTranslations;

class Championship extends Model
{
    use HasMediaTrait, HasTranslations;

    public $translatable = ['name', 'description'];

    protected $fillable = ['location_id', 'sport_id', 'name',
                           'description', 'slug', 'init_date', 'end_date'];
    protected $casts = [
        'location_id' => 'integer',
        'sport_id'    => 'integer',
    ];
    protected $dates = ['init_date', 'end_date'];

    /**
     * Register the conversions that should be performed.
     *
     * @return array
     */
    public function registerMediaConversions()
    {
        $this->addMediaConversion('thumb')
            ->setManipulations(['w' => 75, 'h' => 100, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('poster');
        $this->addMediaConversion('small')
            ->setManipulations(['w' => 150, 'h' => 200, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('poster');
        $this->addMediaConversion('medium')
            ->setManipulations(['w' => 300, 'h' => 400, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('poster');
        $this->addMediaConversion('large')
            ->setManipulations(['w' => 1024, 'h' => 768, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('poster');
    }

    public function events()
    {
        return $this->hasMany(Event::class);
    }

    public function clubs()
    {
        return $this->belongsToMany(Club::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function sport()
    {
        return $this->belongsTo(Sport::class);
    }
}
