<?php

namespace App\Scouting\Entities\Sports;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Sports\Category
 *
 * @property int $id
 * @property array $name
 * @property string $description
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Category whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Category whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Category whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Category whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Category extends Model
{
    use HasTranslations;
    protected $fillable = ['name'];
    public $translatable = ['name'];

}
