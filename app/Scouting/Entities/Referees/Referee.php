<?php

namespace App\Scouting\Entities\Referees;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Webpatser\Countries\Countries;

/**
 * App\Scouting\Entities\Referees\Referee
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property int $country_id
 * @property string $federation_code
 * @property string $gender
 * @property \Carbon\Carbon $birth_date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Webpatser\Countries\Countries $country
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\MediaLibrary\Media[] $media
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Referees\Referee whereBirthDate($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Referees\Referee whereCountryId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Referees\Referee whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Referees\Referee whereFederationCode($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Referees\Referee whereFirstName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Referees\Referee whereGender($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Referees\Referee whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Referees\Referee whereLastName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Referees\Referee whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Referee extends Model
{
    use HasMediaTrait;

    protected $fillable = [
        'first_name', 'last_name', 'federation_code', 'country_id', 'gender', 'birth_date'
    ];

    protected $casts = [
        'country_id' => 'integer',
    ];

    protected $dates = ['birth_date'];

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

    public function country()
    {
        return $this->belongsTo(Countries::class);
    }
}
