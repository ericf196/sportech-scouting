<?php

namespace App\Scouting\Repositories\Scoutings;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingRepository;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Validators\Scoutings\ScoutingValidator;

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
        $attributes = [
            'name'        => $attributes['name'],
            'description' => array_key_exists('description', $attributes) ? $attributes['description'] : [],
            'video_src'   => $attributes['videoSrc'],
        ];

        return parent::create($attributes);
    }

    public function update(array $attributes, $id)
    {
        $attributes = [
            'name'        => $attributes['name'],
            'description' => array_key_exists('description', $attributes) ? $attributes['description'] : [],
            'video_src'   => $attributes['videoSrc'],
        ];
        return parent::update($attributes, $id);
    }

}
