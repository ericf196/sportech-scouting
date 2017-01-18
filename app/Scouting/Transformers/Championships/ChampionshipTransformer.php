<?php

namespace App\Scouting\Transformers\Championships;

use App\Scouting\Transformers\Clubs\ClubTransformer;
use App\Scouting\Transformers\Events\EventTransformer;
use App\Scouting\Transformers\Locations\LocationTransformer;
use App\Scouting\Transformers\Sports\SportTransformer;
use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Championships\Championship;

/**
 * Class ChampionshipTransformer
 * @package namespace App\Scouting\Transformers\Championships;
 */
class ChampionshipTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'events',
        'location',
        'sport',
        'clubs'
    ];

    public function transform(Championship $model)
    {
        return [
            'id'          => $model->id,
            'name'        => $model->name,
            'slug'        => $model->slug,
            'description' => $model->description,
            'init_date'   => $model->init_date ? $model->init_date->toDateTimeString() : '',
            'end_date'    => $model->end_date ? $model->end_date->toDateTimeString() : ''
        ];
    }

    public function includeEvents(Championship $model)
    {
        if ($model->events)
            return $this->collection($model->events, new EventTransformer(), 'parent');
    }

    public function includeClubs(Championship $model)
    {
        if ($model->clubs)
            return $this->collection($model->clubs, new ClubTransformer(), 'parent');
    }

    public function includeLocation(Championship $model)
    {
        if ($model->location)
            return $this->item($model->location, new LocationTransformer(), 'parent');
    }

    public function includeSport(Championship $model)
    {
        if ($model->sport)
            return $this->item($model->sport, new SportTransformer(), 'parent');
    }
}
