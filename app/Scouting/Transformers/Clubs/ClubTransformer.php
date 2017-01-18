<?php

namespace App\Scouting\Transformers\Clubs;

use App\Scouting\Transformers\Athletes\AthleteTransformer;
use App\Scouting\Transformers\Championships\ChampionshipTransformer;
use App\Scouting\Transformers\Locations\CountryTransformer;
use App\Scouting\Transformers\Sports\SportTransformer;
use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Clubs\Club;

/**
 * Class ClubTransformer
 * @package namespace App\Scouting\Transformers\Clubs;
 */
class ClubTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'sport',
        'country',
        'athletes',
        'championships'
    ];

    public function transform(Club $model)
    {
        return [
            'id'  => $model->id,
            'code'  => $model->id,
            'name'  => $model->name,
            'image' => $model->getFirstMediaUrl('profile', 'medium') ?: url('/images/missing/athlete/missing.png')
        ];
    }

    public function includeSport(Club $model)
    {
        if ($model->sport) {
            return $this->item($model->sport, new SportTransformer(), 'parent');
        }
    }

    public function includeCountry(Club $model)
    {
        if ($model->country) {
            return $this->item($model->country, new CountryTransformer(), 'parent');
        }
    }

    public function includeAthletes(Club $model)
    {
        if ($model->athletes) {
            return $this->collection($model->athletes, new AthleteTransformer(), 'parent');
        }
    }

    public function includeChampionships(Club $model)
    {
        if ($model->championships) {
            return $this->collection($model->championships, new ChampionshipTransformer(), 'parent');
        }
    }
}
