<?php

namespace App\Scouting\Entities\Sports;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Sports\Sport
 *
 * @property int $id
 * @property array $name
 * @property string $description
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Sports\Specialty[] $specialties
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Sport whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Sport whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Sport whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Sport whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Sport whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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
