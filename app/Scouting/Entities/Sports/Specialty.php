<?php

namespace App\Scouting\Entities\Sports;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

class Specialty extends Model
{
    use HasTranslations;

    public $translatable = ['name'];

    protected $fillable = ['name', 'sport_id'];
    protected $casts = [
        'sport_id' => 'integer'
    ];

    public function sport()
    {
        return $this->belongsTo(Sport::class);
    }

}
