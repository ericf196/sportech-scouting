<?php

namespace App\Scouting\Entities\Scoutings;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

class Tag extends Model implements Transformable
{
    use TransformableTrait;
    use HasTranslations;

    public $translatable = ['name', 'category'];
    protected $casts = [
        'dropdown' => 'boolean'
    ];
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['name', 'abbr', 'dropdown', 'category', 'color'];

    public function options()
    {
        return $this->hasMany(TagOption::class);
    }
}
