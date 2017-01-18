<?php

namespace App\Scouting\Entities\Scoutings;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Tag extends Model implements Transformable
{
    use TransformableTrait;

    protected $casts = [
        'dropdown' => 'boolean'
    ];
    protected $fillable = ['name', 'abbr', 'dropdown'];

    public function options()
    {
        return $this->hasMany(TagOption::class);
    }
}
