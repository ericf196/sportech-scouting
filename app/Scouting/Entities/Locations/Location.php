<?php

namespace App\Scouting\Entities\Locations;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Webpatser\Countries\Countries;

/**
 * App\Scouting\Entities\Locations\Location
 *
 * @property int $id
 * @property string $latitude
 * @property string $longitude
 * @property string $address
 * @property int $country_id
 * @property string $state
 * @property string $city
 * @property string $zip
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Webpatser\Countries\Countries $country
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Locations\Location whereAddress($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Locations\Location whereCity($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Locations\Location whereCountryId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Locations\Location whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Locations\Location whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Locations\Location whereLatitude($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Locations\Location whereLongitude($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Locations\Location whereState($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Locations\Location whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Locations\Location whereZip($value)
 * @mixin \Eloquent
 */
class Location extends Model
{
    use  HasTranslations;

    public $translatable = ['name', 'description'];
    protected $fillable = ['latitude', 'longitude', 'country_id', 'state', 'city', 'address'];
    protected $casts = [
        'country_id' => 'integer',
    ];

    public function country()
    {
        return $this->belongsTo(Countries::class);

    }
}
