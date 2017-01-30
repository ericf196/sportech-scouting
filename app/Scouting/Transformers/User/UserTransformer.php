<?php

namespace App\Scouting\Transformers\User;

use App\Scouting\Entities\Users\User;
use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Sports\Sport;

/**
 * Class SportTransformer
 * @package namespace App\Scouting\Transformers\Sports;
 */
class UserTransformer extends TransformerAbstract
{
    /**
     * Transform the User entity
     * @param User $model
     *
     * @return array
     */
    public function transform(User $model)
    {
        return [
            'id'         => $model->id,
            'username'   => $model->username,
            'full_name'  => $model->first_name . ' ' . $model->last_name,
            'first_name' => $model->first_name,
            'last_name'  => $model->last_name
        ];
    }

}
