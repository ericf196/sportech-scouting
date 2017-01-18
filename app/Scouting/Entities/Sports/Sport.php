<?php

namespace App\Scouting\Entities\Sports;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

class Sport extends Model
{
    use HasTranslations;

    public $translatable = ['name'];

    protected $fillable = ['name'];

    public function specialties()
    {
        return $this->hasMany(Specialty::class);
    }
}
