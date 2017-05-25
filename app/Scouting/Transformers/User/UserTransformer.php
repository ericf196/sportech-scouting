<?php

namespace App\Scouting\Transformers\User;

use App\Scouting\Entities\Users\User;
use App\Scouting\Transformers\Athletes\AthleteTransformer;
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
            'image'           => url($model->getFirstMediaUrl('profile', 'medium')) ?: url('/images/missing/athlete/missing.png'),
            'superUser'       => $model->id == 1 ? true : false,
            'image_formatted' => [
                'thumbnail'  => url($model->getFirstMediaUrl('profile', 'thumb')) ?: url('/images/missing/athlete/missing.png'),
                'source'     => url($model->getFirstMediaUrl('profile', 'medium')) ?: url('/images/missing/athlete/missing.png'),
                'title'      => $model->first_name . ' ' . $model->last_name,
                'notDefault' => $model->getFirstMediaUrl('profile', 'medium') ? true : false
            ],
        ];
    }

    public function includeAthlete(User $model)
    {
        if ($model->athlete)
            return $this->item($model->athlete, new AthleteTransformer(), 'parent');
    }

}
