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

/**
 * App\Scouting\Entities\Events\Event
 *
 * @property int $id
 * @property int $championship_id related championship id
 * @property int $specialty_id
 * @property int $category_id
 * @property int $event_type_id
 * @property int $event_reach_id
 * @property array $name
 * @property string $slug
 * @property array $description
 * @property string $gender gender F: female, M:male
 * @property \Carbon\Carbon $init_date init date
 * @property \Carbon\Carbon $end_date end date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Athletes\Athlete[] $athletes
 * @property-read \App\Scouting\Entities\Sports\Category $category
 * @property-read \App\Scouting\Entities\Championships\Championship $championship
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\MediaLibrary\Media[] $media
 * @property-read \App\Scouting\Entities\Events\EventReach $reach
 * @property-read \App\Scouting\Entities\Sports\Specialty $specialty
 * @property-read \App\Scouting\Entities\Events\EventType $type
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereCategoryId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereChampionshipId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereEndDate($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereEventReachId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereEventTypeId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereGender($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereInitDate($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereSlug($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereSpecialtyId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property int $created_by
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Events\Event whereCreatedBy($value)
 */
class Event extends Model implements HasMediaConversions
{
    use HasMediaTrait, HasTranslations;

    public $translatable = ['name', 'description'];
    protected $fillable = [
        'created_by', 'championship_id', 'category_id', 'specialty_id', 'event_type_id', 'event_reach_id', 'name',
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
