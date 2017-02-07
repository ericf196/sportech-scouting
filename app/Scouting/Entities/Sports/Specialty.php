<?php

namespace App\Scouting\Entities\Sports;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Sports\Specialty
 *
 * @property int $id
 * @property int $sport_id
 * @property array $name
 * @property string $description
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \App\Scouting\Entities\Sports\Sport $sport
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Specialty whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Specialty whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Specialty whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Specialty whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Specialty whereSportId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Sports\Specialty whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Specialty extends Model
{
    use HasTranslations;

    public $translatable = ['name'];

    protected $fillable = ['name', 'sport_id'];
    protected $casts = [
        'sport_id' => 'integer'
    ];

    public function sport()
    {
        return $this->belongsTo(Sport::class);
    }

}
