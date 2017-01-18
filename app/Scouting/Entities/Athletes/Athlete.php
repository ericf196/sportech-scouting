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
use Webpatser\Countries\Countries;

class Athlete extends Model implements HasMedia
{
    use HasMediaTrait;

    protected $table = 'athletes';

    protected $guarded = ['id', 'created_at', 'updated_at'];
    protected $fillable = ['first_name', 'last_name', 'sport_id', 'specialty_id',
                           'category_id', 'country_id', 'alias',
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
