<?php
namespace App\Scouting\Services\Reports\Generator;

use App\Scouting\Entities\Scoutings\ScoutingTouch;
use App\Scouting\Repositories\Contracts\Scoutings\TagRepository;
use App\Scouting\Services\Reports\Contracts\GlobalDataGeneratorContract;
use Illuminate\Support\Collection;

class CombatStatusDataGenerator implements GlobalDataGeneratorContract
{
    protected $tagRepository;

    public function __construct()
    {
        $this->tagRepository = app()->make(TagRepository::class);
    }

    /**
     * Analize the scouting
     *
     * @param Collection $scoutings
     * @return mixed
     */
    public function analyze(Collection $scoutings)
    {
        $pointTag = $this->tagRepository->findWhere(['abbr' => 'PNT'])->first();
        $upLeft = 0;
        $downLeft = 0;
        $upRight = 0;
        $downRight = 0;
        $equal = 0;
        $scoutings->each(function ($scouting) use ($pointTag, &$upLeft, &$downLeft, &$upRight, &$downRight, &$equal) {
            /** @var ScoutingTouch $touches */
            $touches = $scouting->scoutingTouches;
            $leftPoints = 0;
            $rightPoints = 0;
            $touches->each(function ($touch) use ($pointTag, &$leftPoints, &$rightPoints, $scouting, &$upLeft, &$downLeft, &$upRight, &$downRight, &$equal) {
                $isLeftPoint = false;
                $isRightPoint = false;
                $touch->actions->each(function ($action) use ($pointTag, &$leftPoints, &$rightPoints, &$isLeftPoint, &$isRightPoint) {
                    $isLeftPoint = $action->leftTags->contains('id', $pointTag->id);
                    $isRightPoint = $action->rightTags->contains('id', $pointTag->id);
                });
                if ($isLeftPoint) {
                    $leftPoints = $leftPoints + 1;
                }
                if ($isRightPoint) {
                    $rightPoints = $rightPoints + 1;
                }

                if ($leftPoints > $rightPoints) {
                    $upLeft++;
                    $downRight++;
                } elseif ($leftPoints < $rightPoints) {
                    $downLeft++;
                    $upRight++;
                } else {
                    $equal++;
                }
            });
        });

        $totalLeft = $upLeft + $downLeft + $equal;
        $totalRight = $upRight + $downRight + $equal;
        return [
            'left'  => [
                [
                    'name'  => 'EQUAL',
                    'y'     => $totalLeft ? $equal / $totalLeft * 100 : 0,
                    'color' => 'blue'
                ], [
                    'name'  => 'UP',
                    'y'     => $totalLeft ? $upLeft / $totalLeft * 100 : 0,
                    'color' => 'green'

                ], [
                    'name'  => 'DOWN',
                    'y'     => $totalLeft ? $downLeft / $totalLeft * 100 : 0,
                    'color' => 'red'

                ]
            ],
            'right' => [
                [
                    'name'  => 'EQUAL',
                    'y'     => $totalRight ? $equal / $totalRight * 100 : 0,
                    'color' => 'blue'
                ], [
                    'name'  => 'UP',
                    'y'     => $totalRight ? $upRight / $totalRight * 100 : 0,
                    'color' => 'green'

                ], [
                    'name'  => 'DOWN',
                    'y'     => $totalRight ? $downRight / $totalRight * 100 : 0,
                    'color' => 'red'

                ]
            ],
        ];
    }
}