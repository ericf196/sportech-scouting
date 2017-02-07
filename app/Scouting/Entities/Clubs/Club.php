<?php

namespace App\Scouting\Entities\Clubs;

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Championships\Championship;
use App\Scouting\Entities\Sports\Sport;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\Translatable\HasTranslations;
use Webpatser\Countries\Countries;

/**
 * App\Scouting\Entities\Clubs\Club
 *
 * @property int $id
 * @property array $name
 * @property int $sport_id
 * @property int $country_id
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Athletes\Athlete[] $athletes
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Championships\Championship[] $championships
 * @property-read \Webpatser\Countries\Countries $country
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\MediaLibrary\Media[] $media
 * @property-read \App\Scouting\Entities\Sports\Sport $sport
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Clubs\Club whereCountryId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Clubs\Club whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Clubs\Club whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Clubs\Club whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Clubs\Club whereSportId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Clubs\Club whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Club extends Model
{
    use HasMediaTrait, HasTranslations;

    protected $table = 'clubs';

    public $translatable = ['name'];
    protected $guarded = ['id', 'created_at', 'updated_at'];
    protected $fillable = ['name', 'sport_id', 'country_id'];
    protected $casts = [
        'sport_id'   => 'integer',
        'country_id' => 'integer',
    ];

    public function registerMediaConversions()
    {
        $this->addMediaConversion('thumb')
            ->setManipulations(['w' => 75, 'h' => 100, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
        $this->addMediaConversion('small')
            ->setManipulations(['w' => 150, 'h' => 200, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
        $this->addMediaConversion('medium')
            ->setManipulations(['w' => 300, 'h' => 400, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
        $this->addMediaConversion('large')
            ->setManipulations(['w' => 600, 'h' => 800, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
    }

    public function sport()
    {
        return $this->belongsTo(Sport::class);
    }

    public function country()
    {
        return $this->belongsTo(Countries::class);

    }

    public function athletes()
    {
        return $this->belongsToMany(Athlete::class);
    }

    public function championships()
    {
        return $this->belongsToMany(Championship::class);
    }
}
