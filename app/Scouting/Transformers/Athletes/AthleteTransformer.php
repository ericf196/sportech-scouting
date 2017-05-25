<?php

namespace App\Scouting\Transformers\Athletes;

use App\Scouting\Transformers\Events\EventTransformer;
use App\Scouting\Transformers\Locations\CountryTransformer;
use App\Scouting\Transformers\Sports\CategoryTransformer;
use App\Scouting\Transformers\Sports\SpecialtyTransformer;
use App\Scouting\Transformers\Sports\SportTransformer;
use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Athletes\Athlete;

/**
 * Class AthleteTransformer
 * @package namespace App\Scouting\Transformers\Athletes;
 */
class AthleteTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'sport',
        'specialty',
        'category',
        'country',
        'events'
    ];

    /**
     * Transform the \Athlete entity
     * @param Athlete $model
     * @return array
     */
    public function transform(Athlete $model = null)
    {
        return [
            'id'              => $model->id,
            'first_name'      => $model->first_name,
            'last_name'       => $model->last_name,
            'name'            => $model->first_name . ' ' . $model->last_name,
            'federation_code' => $model->federation_code,
            'national_code'   => $model->national_code,
            'gender'          => ['gender' => $model->gender, 'name' => trans('admin/athletes/athletes.' . $model->gender)],
            'alias'           => $model->alias,
            'condition'       => $model->condition,
            'professional'    => $model->professional ? true : false,
            'height'          => $model->height,
            'weight'          => $model->weight,
            'ranking'         => $model->ranking,
            'active'          => $model->active ? true : false,
            'image'           => $model->getFirstMediaUrl('profile', 'medium') ?: url('images/missing/athlete/missing.png'),
            'medal'           => $model->medal ? '/images/medals/' . $model->medal . '.png' : null,
            'event'           => $model->event ?: '',
            'country_id'      => $model->country_id,
            'sport_id'        => $model->sport_id,
            'specialty_id'    => $model->specialty_id,
            'category_id'     => $model->category_id,
            'image_formatted' => [
                'thumbnail'  => $model->getFirstMediaUrl('profile', 'thumb') ? url($model->getFirstMediaUrl('profile', 'thumb')) : url('images/missing/athlete/missing.png'),
                'source'     => $model->getFirstMediaUrl('profile', 'medium') ? url($model->getFirstMediaUrl('profile', 'medium')) : url('images/missing/athlete/missing.png'),
                'title'      => $model->first_name . ' ' . $model->last_name,
                'notDefault' => $model->getFirstMediaUrl('profile', 'medium') ? true : false
            ],

        ];
    }

    public function includeSport(Athlete $model)
    {
        if ($model->sport) {
            return $this->item($model->sport, new SportTransformer(), 'parent');
        }
    }

    public function includeCategory(Athlete $model)
    {
        if ($model->category) {
            return $this->item($model->category, new CategoryTransformer(), 'parent');
        }
    }

    public function includeSpecialty(Athlete $model)
    {
        if ($model->specialty) {
            return $this->item($model->specialty, new SpecialtyTransformer(), 'parent');
        }
    }

    public function includeCountry(Athlete $model)
    {
        if ($model->country) {
            return $this->item($model->country, new CountryTransformer(), 'parent');
        }
    }

    public function includeEvents(Athlete $model)
    {
        if ($model->events) {
            return $this->collection($model->events, new EventTransformer(), 'parent');
        }
    }
}
