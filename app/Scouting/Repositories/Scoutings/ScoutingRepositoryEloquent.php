<?php

namespace App\Scouting\Repositories\Scoutings;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingRepository;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Validators\Scoutings\ScoutingValidator;
use Tymon\JWTAuth\Facades\JWTAuth;

/**
 * Class ScoutingRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Scoutings;
 */
class ScoutingRepositoryEloquent extends BaseRepository implements ScoutingRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Scouting::class;
    }

    public function create(array $attributes)
    {
        $hasTranslation = array_key_exists('translation', $attributes);
        $name = $hasTranslation ? $attributes['translation']['name'] : $attributes['name'];
        $description = $hasTranslation ? $attributes['translation'] : $attributes;
        $description = array_key_exists('description', $description) ? $description['description'] : null;
        $user = JWTAuth::parseToken()->authenticate();

        $attributes = [
            'scouter_id'       => $user->id,
            'name'             => $name,
            'description'      => $description,
            'video_src'        => $attributes['videoSrc'],
            'championship_id'  => $attributes['championship']['id'],
            'event_id'         => $attributes['event']['id'],
            'left_athlete_id'  => $attributes['leftAthlete']['id'],
            'right_athlete_id' => $attributes['rightAthlete']['id'],
        ];

        return parent::create($attributes);
    }

    public function update(array $attributes, $id)
    {
        $hasTranslation = array_key_exists('translation', $attributes);
        $name = $hasTranslation ? $attributes['translation']['name'] : $attributes['name'];
        $description = $hasTranslation ? $attributes['translation'] : $attributes;
        $description = array_key_exists('description', $description) ? $description['description'] : null;
        $user = JWTAuth::parseToken()->authenticate();

        $attributes = [
            'scouter_id'       => $user->id,
            'name'             => $name,
            'description'      => $description,
            'video_src'        => $attributes['videoSrc'],
            'championship_id'  => $attributes['championship']['id'],
            'event_id'         => $attributes['event']['id'],
            'left_athlete_id'  => $attributes['leftAthlete']['id'],
            'right_athlete_id' => $attributes['rightAthlete']['id'],
        ];
        return parent::update($attributes, $id);
    }

}
