<?php
namespace App\Scouting\Entities\Challenges;

use App\Scouting\Entities\Users\User;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

/**
 * App\Scouting\Entities\Challenges\Challenge
 *
 * @property int $id
 * @property array $name
 * @property array $description
 * @property int $points
 * @property int $difficulty 0: low, 1:moderate, 2:high
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Users\User[] $users
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Challenges\Challenge whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Challenges\Challenge whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Challenges\Challenge whereDifficulty($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Challenges\Challenge whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Challenges\Challenge whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Challenges\Challenge wherePoints($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Challenges\Challenge whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Challenge extends Model
{

    use HasTranslations;
    public $translatable = ['name', 'description'];
    protected $fillable = ['name', 'description', 'points', 'difficulty'];
    protected $casts = [
        'points'     => 'integer',
        'difficulty' => 'integer',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'users_challenges');
    }
}