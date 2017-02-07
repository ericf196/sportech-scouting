<?php
namespace App\Scouting\Entities\Challenges;

use App\Scouting\Entities\Users\User;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

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