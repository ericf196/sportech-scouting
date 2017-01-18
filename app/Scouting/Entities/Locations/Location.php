<?php

namespace App\Scouting\Entities\Locations;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Webpatser\Countries\Countries;

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
