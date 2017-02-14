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
        $up = 0;
        $down = 0;
        $equal = 0;
        $scoutings->each(function ($scouting) use ($pointTag, &$up, &$down, &$equal) {
            /** @var ScoutingTouch $touches */
            $touches = $scouting->scoutingTouches;
            $leftPoints = 0;
            $rightPoints = 0;
            $touches->each(function ($touch) use ($pointTag, &$leftPoints, &$rightPoints, $scouting, &$up, &$down, &$equal) {
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
                    $up++;
                } elseif ($leftPoints < $rightPoints) {
                    $down++;
                } else {
                    $equal++;
                }
            });
        });

        $total = $up + $down + $equal;
        return [
            [
                'name'  => 'EQUAL',
                'y'     => $total ? $equal / $total * 100 : 0,
                'color' => 'blue'
            ], [
                'name'  => 'UP',
                'y'     => $total ? $up / $total * 100 : 0,
                'color' => 'green'

            ], [
                'name'  => 'DOWN',
                'y'     => $total ? $down / $total * 100 : 0,
                'color' => 'red'

            ]
        ];
    }
}