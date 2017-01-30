<?php

namespace App\Scouting\Entities\Events;

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Championships\Championship;
use App\Scouting\Entities\Sports\Category;
use App\Scouting\Entities\Sports\Specialty;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\HasMedia\Interfaces\HasMediaConversions;
use Spatie\Translatable\HasTranslations;

class Event extends Model implements HasMediaConversions
{
    use HasMediaTrait, HasTranslations;

    public $translatable = ['name', 'description'];
    protected $fillable = [
        'championship_id', 'category_id', 'specialty_id', 'event_type_id', 'event_reach_id', 'name',
        'description', 'slug', 'gender', 'init_date', 'end_date'
    ];

    protected $casts = [
        'category_id'     => 'integer',
        'specialty_id'    => 'integer',
        'championship_id' => 'integer',
        'event_reach_id'  => 'integer',
        'event_type_id'   => 'integer',
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
            ->setManipulations(['w' => 600, 'h' => 800, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('poster');
    }

    public function championship()
    {
        return $this->belongsTo(Championship::class);
    }

    public function type()
    {
        return $this->belongsTo(EventType::class, 'event_type_id');
    }

    public function reach()
    {
        return $this->belongsTo(EventReach::class, 'event_reach_id');
    }

    public function specialty()
    {
        return $this->belongsTo(Specialty::class);

    }

    public function category()
    {
        return $this->belongsTo(Category::class);

    }

    public function athletes()
    {
        return $this->belongsToMany(Athlete::class, 'athlete_event');
    }
}
