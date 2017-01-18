<?php

namespace App\Scouting\Entities\Sports;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

class Category extends Model
{
    use HasTranslations;
    protected $fillable = ['name'];
    public $translatable = ['name'];

}
