<?php

namespace App\Scouting\Entities\Referees;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Webpatser\Countries\Countries;

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
