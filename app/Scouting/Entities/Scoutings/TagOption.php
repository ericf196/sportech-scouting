<?php

namespace App\Scouting\Entities\Scoutings;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Scoutings\TagOption
 *
 * @property int $id
 * @property int $tag_id
 * @property array $name
 * @property string $value
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\TagOption whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\TagOption whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\TagOption whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\TagOption whereTagId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\TagOption whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\TagOption whereValue($value)
 * @mixin \Eloquent
 */
class TagOption extends Model implements Transformable
{
    use TransformableTrait;
    use HasTranslations;

    public $translatable = ['name'];
    protected $hidden = ['created_at','updated_at','tag_id'];
    protected $table = 'tags_options';
    protected $fillable = ['name', 'value'];

}
