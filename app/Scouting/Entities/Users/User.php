<?php
namespace App\Scouting\Entities\Users;

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Challenges\Challenge;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Kodeine\Acl\Models\Eloquent\Permission;
use Kodeine\Acl\Traits\HasRole;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\HasMedia\Interfaces\HasMediaConversions;


/**
 * App\Scouting\Entities\Users\User
 *
 * @property int $id
 * @property string $username
 * @property string $first_name
 * @property string $last_name
 * @property string $email
 * @property string $password
 * @property string $remember_token
 * @property bool $active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \App\Scouting\Entities\Athletes\Athlete $athlete
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\MediaLibrary\Media[] $media
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read \Illuminate\Database\Eloquent\Collection|\Kodeine\Acl\Models\Eloquent\Permission[] $permissions
 * @property-read \Illuminate\Database\Eloquent\Collection|\Kodeine\Acl\Models\Eloquent\Role[] $roles
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User role($role, $column = null)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereActive($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereEmail($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereFirstName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereLastName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User wherePassword($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereRememberToken($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereUsername($value)
 * @mixin \Eloquent
 */
class User extends Authenticatable implements HasMediaConversions
{
    use Notifiable, HasRole, HasMediaTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'active',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'active' => 'boolean'
    ];

    public function registerMediaConversions()
    {
        $this->addMediaConversion('thumb')
            ->setManipulations(['w' => 75, 'h' => 100, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
        $this->addMediaConversion('small')
            ->setManipulations(['w' => 150, 'h' => 200, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
        $this->addMediaConversion('medium')
            ->setManipulations(['w' => 300, 'h' => 400, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
        $this->addMediaConversion('large')
            ->setManipulations(['w' => 600, 'h' => 800, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'permission_user', 'user_id', 'permission_id');
    }

    public function athlete()
    {
        return $this->hasOne(Athlete::class);
    }

    public function challenges()
    {
        return $this->belongsToMany(Challenge::class, 'users_challenges')->withPivot(['completion_percentage', 'completed']);
    }

    public function completedChallenges()
    {
        return $this->belongsToMany(Challenge::class, 'users_challenges')->withPivot(['completion_percentage', 'completed'])->wherePivot('completed', '=', 1);
    }

    public function inProgressChallenges()
    {
        return $this->belongsToMany(Challenge::class, 'users_challenges')->withPivot(['completion_percentage', 'completed'])->wherePivot('completed', '=', 0);
    }


}
