<?php

namespace App\Scouting\Transformers\Championships;

use App\Scouting\Transformers\Clubs\ClubTransformer;
use App\Scouting\Transformers\Events\EventTransformer;
use App\Scouting\Transformers\Locations\CountryTransformer;
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
        'clubs',
        'country'
    ];

    public function transform(Championship $model)
    {
        return [
            'id'              => $model->id,
            'sport_id'        => $model->sport_id,
            'country_id'      => $model->country_id,
            'name'            => $model->name,
            'slug'            => $model->slug,
            'description'     => $model->description,
            'init_date'       => $model->init_date ? $model->init_date->format('m/d/Y H:i') : '',
            'init_date_utc'   => $model->init_date ? $model->init_date->toAtomString() : '',
            'end_date_utc'    => $model->end_date ? $model->end_date->toAtomString() : '',
            'end_date'        => $model->end_date ? $model->end_date->format('m/d/Y H:i') : '',
            'image'           => $model->getFirstMediaUrl('poster', 'medium') ?: url('/images/missing/event/missing.png'),
            'translation'     => [
                'name'        => $model->getTranslations('name'),
                'description' => $model->getTranslations('description')
            ],
            'image_formatted' => [
                'thumbnail'  => $model->getFirstMediaUrl('poster', 'thumb') ? url($model->getFirstMediaUrl('poster', 'thumb')) : url('images/missing/event/missing.png'),
                'source'     => $model->getFirstMediaUrl('poster', 'medium') ? url($model->getFirstMediaUrl('poster', 'medium')) : url('images/missing/event/missing.png'),
                'title'      => $model->name,
                'notDefault' => $model->getFirstMediaUrl('poster', 'medium') ? true : false
            ],
            'created_at'      => $model->created_at ? $model->created_at->format('m/d/Y H:i') : '',

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

    public function includeCountry(Championship $model)
    {
        if ($model->country)
            return $this->item($model->country, new CountryTransformer(), 'parent');
    }
}
