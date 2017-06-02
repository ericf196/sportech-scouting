<?php

namespace App\Scouting\Entities\Championships;

use App\Scouting\Entities\Clubs\Club;
use App\Scouting\Entities\Events\Event;
use App\Scouting\Entities\Locations\Location;
use App\Scouting\Entities\Sports\Sport;
use Webpatser\Countries\Countries;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\HasMedia\Interfaces\HasMediaConversions;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Championships\Championship
 *
 * @property int $id
 * @property int $sport_id
 * @property int $location_id
 * @property array $name
 * @property array $description
 * @property string $slug
 * @property \Carbon\Carbon $init_date
 * @property \Carbon\Carbon $end_date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Clubs\Club[] $clubs
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Events\Event[] $events
 * @property-read \App\Scouting\Entities\Locations\Location $location
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\MediaLibrary\Media[] $media
 * @property-read \App\Scouting\Entities\Sports\Sport $sport
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereEndDate($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereInitDate($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereLocationId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereSlug($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereSportId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property int $created_by
 * @property int $country_id
 * @property-read \Webpatser\Countries\Countries $country
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereCountryId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Championships\Championship whereCreatedBy($value)
 */
class Championship extends Model implements HasMediaConversions
{
    use HasMediaTrait, HasTranslations;

    public $translatable = ['name', 'description'];

    protected $fillable = ['created_by', 'location_id', 'country_id', 'sport_id', 'name',
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

    public function country()
    {
        return $this->belongsTo(Countries::class);
    }

    public function sport()
    {
        return $this->belongsTo(Sport::class);
    }
}
