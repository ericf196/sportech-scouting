<?php

namespace App\Scouting\Entities\Scoutings;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

class TagOption extends Model implements Transformable
{
    use TransformableTrait;
    use HasTranslations;

    public $translatable = ['name'];
    protected $hidden = ['created_at','updated_at','tag_id'];
    protected $table = 'tags_options';
    protected $fillable = ['name', 'value'];

}
