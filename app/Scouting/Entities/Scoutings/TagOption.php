<?php

namespace App\Scouting\Entities\Scoutings;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class TagOption extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'tags_options';
    protected $fillable = ['name', 'value'];

}
