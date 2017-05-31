<?php
namespace App\Scouting\Services\Reports\Generator;

use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Repositories\Contracts\Scoutings\TagRepository;
use App\Scouting\Services\Reports\Contracts\DataGeneratorContract;

class PointsVsTimeDataGenerator implements DataGeneratorContract
{
    protected $tagRepository;
    private $leftAthlete;
    private $rightAthlete;
    private $leftData;
    private $rightData;
    private $timeData;

    public function __construct()
    {

        $this->tagRepository = app()->make(TagRepository::class);
        $this->leftData = collect([0]);
        $this->rightData = collect([0]);
        $this->timeData = collect(['00:00']);
    }

    /**
     * Analize the scouting
     *
     * @param Scouting $scouting
     * @return mixed
     */
    public function analyze(Scouting $scouting)
    {
        $pointTag = $this->tagRepository->findWhere(['abbr' => 'PNT'])->first();
        $touches = $scouting->scoutingTouches;
        $leftPoints = 0;
        $rightPoints = 0;
        $touches->each(function ($touch) use ($pointTag, &$leftPoints, &$rightPoints, $scouting) {
            $isLeftPoint = false;
            $isRightPoint = false;
            $touch->actions->each(function ($action) use ($pointTag, &$leftPoints, &$rightPoints, &$isLeftPoint, &$isRightPoint) {
                $isLeftPoint = $action->leftTags->contains('id', $pointTag->id);
                $isRightPoint = $action->rightTags->contains('id', $pointTag->id);
            });
            if ($isLeftPoint) {
                $leftPoints = $leftPoints + 1;
                $this->leftData->push($leftPoints);
                $this->rightData->push($rightPoints);
            }
            if ($isRightPoint) {
                $rightPoints = $rightPoints + 1;
                $this->rightData->push($rightPoints);
                $this->leftData->push($leftPoints);
            }

            $this->timeData->push(toHHMMSS($touch->end));
        });

        return [
            'leftAthlete'  => 'Left' . ' ' . 'Athlete',
            'rightAthlete' => 'Right' . ' ' . 'Athlete',
            'left'         => $this->leftData->toArray(),
            'right'        => $this->rightData->toArray(),
            'time'         => $this->timeData->toArray()
        ];
    }
}