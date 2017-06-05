<?php
namespace App\Scouting\Entities\Users;

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Challenges\Challenge;
use App\Scouting\Entities\Championships\Championship;
use App\Scouting\Entities\Invites\Invitation;
use App\Scouting\Entities\Reports\Report;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Entities\Sports\Specialty;
use App\Scouting\Entities\Sports\Sport;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Kodeine\Acl\Models\Eloquent\Permission;
use Kodeine\Acl\Traits\HasRole;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\HasMedia\Interfaces\HasMediaConversions;
use Webpatser\Countries\Countries;


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
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Challenges\Challenge[] $challenges
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Challenges\Challenge[] $completedChallenges
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Challenges\Challenge[] $inProgressChallenges
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Reports\Report[] $reports
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Scoutings\Scouting[] $scoutings
 * @property int $country_id
 * @property int $sport_id
 * @property int $specialty_id
 * @property int $number_invitations
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Athletes\Athlete[] $athletes
 * @property-read \Webpatser\Countries\Countries $country
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Scouting\Entities\Championships\Championship[] $events
 * @property-read \App\Scouting\Entities\Sports\Specialty $specialty
 * @property-read \App\Scouting\Entities\Sports\Sport $sport
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereCountryId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereNumberInvitations($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereSpecialtyId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereSportId($value)
 * @property string $gender
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereGender($value)
 * @property \Carbon\Carbon $last_login
 * @method static \Illuminate\Database\Query\Builder|\App\Scouting\Entities\Users\User whereLastLogin($value)
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
        'username', 'first_name', 'last_name',
        'email', 'password', 'number_invitations', 'active',
        'sport_id', 'specialty_id', 'country_id', 'gender', 'last_login'
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

    protected $dates = [
        'last_login'
    ];

    public function registerMediaConversions()
    {
        $this->addMediaConversion('thumb')
            ->setManipulations(['w' => 75, 'h' => 75, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
        $this->addMediaConversion('small')
            ->setManipulations(['w' => 150, 'h' => 150, 'fit' => 'crop', 'bg' => 'white'])
            ->performOnCollections('profile');
        $this->addMediaConversion('medium')->setWidth(300)->setHeight(300)->setFit('crop')
            ->performOnCollections('profile');
        $this->addMediaConversion('large')
            ->setManipulations(['w' => 600, 'h' => 600, 'fit' => 'crop', 'bg' => 'white'])
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

    public function scoutings()
    {
        return $this->hasMany(Scouting::class, 'scouter_id');
    }

    public function reports()
    {
        return $this->hasMany(Report::class);
    }

    public function athletes()
    {
        return $this->hasMany(Athlete::class, 'created_by');
    }

    public function events()
    {
        return $this->hasMany(Championship::class, 'created_by');
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

    public function totalPoints()
    {
        if ($this->relationLoaded('completedChallenges')) {
            return $this->completedChallenges->sum('points');
        }

        return $this->completedChallenges()->sum('points');
    }

    /*  public function invitations()
      {
          return $this->hasMany(Invitation::class, 'user_id');
      }*/

    public function sport()
    {
        return $this->belongsTo(Sport::class);
    }

    public function specialty()
    {
        return $this->belongsTo(Specialty::class);

    }

    public function country()
    {
        return $this->belongsTo(Countries::class);

    }
}
