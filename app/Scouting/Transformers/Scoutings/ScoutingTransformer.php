<?php

namespace App\Scouting\Transformers\Scoutings;

use App\Scouting\Transformers\Athletes\AthleteTransformer;
use App\Scouting\Transformers\Championships\ChampionshipTransformer;
use App\Scouting\Transformers\Events\EventTransformer;
use App\Scouting\Transformers\Sports\UserTransformer;
use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Scoutings\Scouting;

/**
 * Class ScoutingTransformer
 * @package namespace App\Scouting\Transformers\Scoutings;
 */
class ScoutingTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'leftAthlete',
        'rightAthlete',
        'scouter',
        'event',
        'championship',
        'touches'
    ];

    /**
     * Transform the \Scouting entity
     * @param Scouting $model
     *
     * @return array
     */
    public function transform(Scouting $model)
    {
        return [
            'id'          => (int)$model->id,
            'name'        => $model->name,
            'description' => $model->descrption,
            'videoSrc'    => $model->video_src,
        ];
    }

    public function includeLeftAthlete(Scouting $model)
    {
        if ($model->leftAthlete)
            return $this->item($model->leftAthlete, new AthleteTransformer(),'parent');
    }

    public function includeRightAthlete(Scouting $model)
    {
        if ($model->rightAthlete)
            return $this->item($model->rightAthlete, new AthleteTransformer(),'parent');
    }

    public function includeScouter(Scouting $model)
    {
        if ($model->scouter)
            return $this->item($model->scouter, new UserTransformer(),'parent');
    }

    public function includeEvent(Scouting $model)
    {
        if ($model->event)
            return $this->item($model->event, new EventTransformer(),'parent');
    }

    public function includeChampionship(Scouting $model)
    {
        if ($model->championship)
            return $this->item($model->championship, new ChampionshipTransformer(),'parent');
    }

    public function includeTouches(Scouting $model)
    {
        if ($model->scoutingTouches)
            return $this->collection($model->scoutingTouches, new ScoutingTouchTransformer(),'parent');
    }
}
