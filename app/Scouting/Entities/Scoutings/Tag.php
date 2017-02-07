<?php

namespace App\Scouting\Entities\Scoutings;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Scoutings\Tag
 *
 * @property int $id
 * @property array $name
 * @property string $abbr
 * @property bool $dropdown
 * @property array $category
 * @property string $color
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Scoutings\TagOption[] $options
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Tag whereAbbr($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Tag whereCategory($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Tag whereColor($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Tag whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Tag whereDropdown($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Tag whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Tag whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Scoutings\Tag whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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
