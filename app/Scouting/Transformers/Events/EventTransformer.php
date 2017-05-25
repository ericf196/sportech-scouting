<?php

namespace App\Scouting\Transformers\Events;

use App\Scouting\Transformers\Athletes\AthleteTransformer;
use App\Scouting\Transformers\Championships\ChampionshipTransformer;
use App\Scouting\Transformers\Sports\CategoryTransformer;
use App\Scouting\Transformers\Sports\SpecialtyTransformer;
use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Events\Event;

/**
 * Class EventTransformer
 * @package namespace App\Scouting\Transformers\Events;
 */
class EventTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'championship',
        'type',
        'reach',
        'specialty',
        'category',
        'athletes'
    ];

    public function transform(Event $model)
    {
        return [
            'id'             => $model->id,
            'name'           => $model->name,
            'slug'           => $model->slug,
            'description'    => $model->description,
            'gender'         => ['gender' => $model->gender, 'name' => trans('admin/athletes/athletes.' . $model->gender)],
            'init_date'      => $model->init_date ? $model->init_date->toDateTimeString() : '',
            'year_init'      => $model->init_date ? $model->init_date->format('Y') : '',
            'day_month_init' => $model->init_date ? $model->init_date->format('d/m') : '',
            'end_date'       => $model->end_date ? $model->end_date->toDateTimeString() : '',
            'init_date_utc'   => $model->init_date ? $model->init_date->toAtomString() : '',
            'end_date_utc'    => $model->end_date ? $model->end_date->toAtomString() : '',
            'image'          => $model->getFirstMediaUrl('poster', 'medium') ?: url('/images/missing/event/missing.png'),
            'result_url'     => $model->result_url ?: null,
            'translation'    => [
                'name'        => $model->getTranslations('name'),
                'description' => $model->getTranslations('description')
            ]
        ];
    }

    public function includeChampionship(Event $model)
    {
        if ($model->championship)
            return $this->item($model->championship, new ChampionshipTransformer(), 'parent');
    }

    public function includeReach(Event $model)
    {
        if ($model->reach)
            return $this->item($model->reach, new EventReachTransformer(), 'parent');
    }

    public function includeType(Event $model)
    {
        if ($model->type)
            return $this->item($model->type, new EventTypeTransformer(), 'parent');
    }

    public function includeCategory(Event $model)
    {
        if ($model->category) {
            return $this->item($model->category, new CategoryTransformer(), 'parent');
        }
    }

    public function includeSpecialty(Event $model)
    {
        if ($model->specialty) {
            return $this->item($model->specialty, new SpecialtyTransformer(), 'parent');
        }
    }

    public function includeAthletes(Event $model)
    {
        if ($model->athletes) {
            return $this->collection($model->athletes, new AthleteTransformer(), 'parent');
        }
    }
}
