<?php

namespace App\Scouting\Entities\Athletes;

use App\Scouting\Entities\Clubs\Club;
use App\Scouting\Entities\Events\Event;
use App\Scouting\Entities\Sports\Category;
use App\Scouting\Entities\Sports\Specialty;
use App\Scouting\Entities\Sports\Sport;
use App\Scouting\Entities\Users\User;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\HasMedia\Interfaces\HasMedia;
use Spatie\MediaLibrary\HasMedia\Interfaces\HasMediaConversions;
use Webpatser\Countries\Countries;

/**
 * App\Scouting\Entities\Athletes\Athlete
 *
 * @property int $id
 * @property int $user_id
 * @property int $sport_id
 * @property int $category_id
 * @property int $specialty_id
 * @property int $country_id
 * @property string $first_name
 * @property string $last_name
 * @property string $national_code
 * @property string $federation_code
 * @property string $alias
 * @property string $gender
 * @property bool $condition
 * @property bool $professional
 * @property float $ranking
 * @property float $height
 * @property float $weight
 * @property bool $profile_status
 * @property bool $active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \App\Scouting\Entities\Sports\Category $category
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Clubs\Club[] $clubs
 * @property-read \Webpatser\Countries\Countries $country
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Events\Event[] $events
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\MediaLibrary\Media[] $media
 * @property-read \App\Scouting\Entities\Sports\Specialty $specialty
 * @property-read \App\Scouting\Entities\Sports\Sport $sport
 * @property-read \App\Scouting\Entities\Users\User $user
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereActive($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereAlias($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereCategoryId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereCondition($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereCountryId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereFederationCode($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereFirstName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereGender($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereHeight($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereLastName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereNationalCode($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereProfessional($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereProfileStatus($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereRanking($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereSpecialtyId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereSportId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereUserId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Athletes\Athlete whereWeight($value)
 * @mixin \Eloquent
 */
class Athlete extends Model implements HasMediaConversions
{
    use HasMediaTrait;

    protected $table = 'athletes';

    protected $guarded = ['id', 'created_at', 'updated_at'];
    protected $fillable = ['created_by', 'first_name', 'last_name', 'sport_id', 'specialty_id',
                           'category_id', 'country_id', 'alias', 'user_id',
                           'gender', 'condition', 'professional',
                           'ranking', 'height', 'weight', 'active',
                           'federation_code', 'national_code'];

    protected $casts = [
        'professional' => 'boolean',
        'active'       => 'boolean',
        'category_id'  => 'integer',
        'specialty_id' => 'integer',
        'sport_id'     => 'integer',
        'country_id'   => 'integer',
        'user_id'      => 'integer',
    ];

    public function registerMediaConversions()
    {
        $this->addMediaConversion('thumb')
            ->setManipulations(['w' => 75, 'h' => 75, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
        $this->addMediaConversion('small')
            ->setManipulations(['w' => 150, 'h' => 150, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
        $this->addMediaConversion('medium')->setWidth(300)->setHeight(300)->setFit('crop')
            ->performOnCollections('profile');
        $this->addMediaConversion('large')
            ->setManipulations(['w' => 600, 'h' => 600, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
    }

    public function sport()
    {
        return $this->belongsTo(Sport::class);
    }

    public function specialty()
    {
        return $this->belongsTo(Specialty::class);

    }

    public function category()
    {
        return $this->belongsTo(Category::class);

    }

    public function country()
    {
        return $this->belongsTo(Countries::class);

    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function events()
    {
        return $this->belongsToMany(Event::class);
    }

    public function clubs()
    {
        return $this->belongsToMany(Club::class);
    }

}
