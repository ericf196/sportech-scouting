<?php

namespace App\Scouting\Transformers\Challenges;

use App\Scouting\Entities\Challenges\Challenge;
use App\Scouting\Transformers\User\UserTransformer;
use League\Fractal\TransformerAbstract;

/**
 * Class AthleteTransformer
 * @package namespace App\Scouting\Transformers\Athletes;
 */
class ChallengeTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'users'
    ];

    /**
     * Transform the \Athlete entity
     * @param Challenge $model
     * @return array
     */
    public function transform(Challenge $model)
    {
        $difficultyColor = 'danger';
        $difficultyColor = $model->difficulty == 0 ? 'success' : $difficultyColor;
        $difficultyColor = $model->difficulty == 1 ? 'warning' : $difficultyColor;


        $data = [
            'id'              => $model->id,
            'name'            => $model->name,
            'description'     => $model->description,
            'difficulty'      => trans('admin/challenges/challenges.difficulty' . $model->difficulty),
            'difficultyColor' => $difficultyColor,
            'points'          => $model->points,
            'translation'     => [
                'name'        => $model->getTranslations('name'),
                'description' => $model->getTranslations('description')
            ]
        ];

        if ($model->pivot) {
            $data['completed'] = $model->pivot->completed ? true : false;
            $data['completion_percentage'] = $model->pivot->completion_percentage;
        }

        return $data;
    }

    public function includeUsers(Challenge $model)
    {
        if ($model->users) {
            return $this->collection($model->users, new UserTransformer(), 'parent');
        }
    }
}
