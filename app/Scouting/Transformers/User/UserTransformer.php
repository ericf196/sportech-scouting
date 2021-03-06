<?php

namespace App\Scouting\Transformers\User;

use App\Scouting\Entities\Users\User;
use App\Scouting\Transformers\Athletes\AthleteTransformer;
use App\Scouting\Transformers\Locations\CountryTransformer;
use App\Scouting\Transformers\Sports\SpecialtyTransformer;
use App\Scouting\Transformers\Sports\SportTransformer;
use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Sports\Sport;

/**
 * Class SportTransformer
 * @package namespace App\Scouting\Transformers\Sports;
 */
class UserTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'athlete',
        'country',
        'sport',
        'specialty'
    ];

    /**
     * Transform the User entity
     * @param User $model
     *
     * @return array
     */
    public function transform(User $model)
    {
        return [
            'id'              => $model->id,
            'username'        => $model->username,
            'full_name'       => $model->first_name . ' ' . $model->last_name,
            'first_name'      => $model->first_name,
            'last_name'       => $model->last_name,
            'email'           => $model->email,
            'image'           => $model->getFirstMediaUrl('profile', 'medium') ? url($model->getFirstMediaUrl('profile', 'medium')) : url('/images/missing/athlete/missing.png'),
            'superUser'       => $model->id == 1 ? true : false,
            'image_formatted' => [
                'thumbnail'  => $model->getFirstMediaUrl('profile', 'thumb') ? url($model->getFirstMediaUrl('profile', 'thumb')) : url('/images/missing/athlete/missing.png'),
                'source'     => $model->getFirstMediaUrl('profile', 'medium') ? url($model->getFirstMediaUrl('profile', 'medium')) : url('/images/missing/athlete/missing.png'),
                'title'      => $model->first_name . ' ' . $model->last_name,
                'notDefault' => $model->getFirstMediaUrl('profile', 'medium') ? true : false
            ],
            'gender'          => ['gender' => $model->gender, 'name' => trans('admin/athletes/athletes.' . $model->gender)],
            'country_id'      => $model->country_id,
            'sport_id'        => $model->sport_id,
            'specialty_id'    => $model->specialty_id,
        ];
    }

    public function includeAthlete(User $model)
    {
        if ($model->athlete)
            return $this->item($model->athlete, new AthleteTransformer(), 'parent');
    }

    public function includeSport(User $model)
    {
        if ($model->sport) {
            return $this->item($model->sport, new SportTransformer(), 'parent');
        }
    }


    public function includeSpecialty(User $model)
    {
        if ($model->specialty) {
            return $this->item($model->specialty, new SpecialtyTransformer(), 'parent');
        }
    }

    public function includeCountry(User $model)
    {
        if ($model->country) {
            return $this->item($model->country, new CountryTransformer(), 'parent');
        }
    }
}
