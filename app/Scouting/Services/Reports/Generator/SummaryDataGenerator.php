<?php
namespace App\Scouting\Services\Reports\Generator;

use App\Scouting\Entities\Scoutings\ScoutingTouch;
use App\Scouting\Repositories\Contracts\Scoutings\TagRepository;
use App\Scouting\Services\Reports\Contracts\GlobalDataGeneratorContract;
use Illuminate\Support\Collection;

class SummaryDataGenerator implements GlobalDataGeneratorContract
{

    protected $tagRepository;
    protected $dataEffectiveness;
    protected $dataValid;
    protected $dataPerfection;
    protected $timeConsume;
    protected $dataConsumedTime;
    protected $dataAverage;

    public function __construct()
    {
        $this->tagRepository = app()->make(TagRepository::class);
        $this->dataEffectiveness = [
            'victories' => 0,
            'defeats'   => 0
        ];
        $this->dataValid = [
            'valid'    => 0,
            'noValid'  => 0,
            'given'    => 0,
            'received' => 0
        ];

        $this->dataPerfection = [
            'perfect'   => 0,
            'imperfect' => 0
        ];
        $this->timeConsume = 0;
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
        $touchTag = $this->tagRepository->findWhere(['abbr' => 'TOC'])->first();
        $validTouchOption = \DB::table('tags_options')->where('name->en', 'Valid')->first();
        $noValidTouchOption = \DB::table('tags_options')->where('name->en', 'No Valid')->first();
        $scoutings->each(function ($scouting) use ($pointTag, &$up, &$down, &$equal, $touchTag, $validTouchOption, $noValidTouchOption) {
            /** @var ScoutingTouch $touches */
            $touches = $scouting->scoutingTouches;
            $leftPoints = 0;
            $rightPoints = 0;
            $touches->each(function ($touch) use ($pointTag, &$leftPoints, &$rightPoints, $scouting, &$up, &$down, &$equal, $touchTag, $validTouchOption, $noValidTouchOption) {
                $isLeftPoint = false;
                $isRightPoint = false;
                $touch->actions->each(function ($action) use ($pointTag, &$leftPoints, &$rightPoints, &$isLeftPoint, &$isRightPoint, $touchTag, $validTouchOption, $noValidTouchOption) {
                    $isLeftPoint = $action->leftTags->contains('id', $pointTag->id);
                    $isRightPoint = $action->rightTags->contains('id', $pointTag->id);

                    $isValid = $action->leftTags->contains(function ($value) use ($touchTag, $validTouchOption) {
                        return $value->id == $touchTag->id && $value->pivot->tag_option_id == $validTouchOption->id;
                    });

                    $isNoValid = $action->leftTags->contains(function ($value) use ($touchTag, $noValidTouchOption) {
                        return $value->id == $touchTag->id && $value->pivot->tag_option_id == $noValidTouchOption->id;
                    });

                    $this->timeConsume = $isValid ? $this->timeConsume + $action->duration : $this->timeConsume;
                    $this->dataValid['valid'] = $isValid ? $this->dataValid['valid'] + 1 : $this->dataValid['valid'];
                    $this->dataValid['noValid'] = $isNoValid ? $this->dataValid['noValid'] + 1 : $this->dataValid['noValid'];
                });
                if ($isLeftPoint) {
                    $leftPoints = $leftPoints + 1;
                }
                if ($isRightPoint) {
                    $rightPoints = $rightPoints + 1;
                }
            });
            $this->dataValid['given'] = $leftPoints;
            $this->dataValid['received'] = $rightPoints;

            $this->effectiveness($leftPoints, $rightPoints);
            $this->perfection($leftPoints, $rightPoints);
        });

        $this->dataConsumedTime = $this->consumedTime();
        $totalValidInvalidTouches = $this->dataValid['valid'] + $this->dataValid['noValid'];
        $totalCombats = $this->dataEffectiveness['victories'] + $this->dataEffectiveness['defeats'];
        $totalPerfection = $this->dataPerfection['perfect'] + $this->dataPerfection['imperfect'];
        $this->dataValid['percentage'] = $totalValidInvalidTouches ? number_format($this->dataValid['valid'] / ($totalValidInvalidTouches) * 100, 2) : 0;
        $this->dataEffectiveness['percentage'] = $totalCombats ? number_format($this->dataEffectiveness['victories'] / ($totalCombats) * 100, 2) : 0;
        $this->dataPerfection['percentage'] = $totalPerfection ? number_format($this->dataPerfection['perfect'] / ($totalPerfection) * 100, 2) : 0;

        return [
            'consumedTime'  => $this->dataConsumedTime,
            'valid'         => $this->dataValid,
            'effectiveness' => $this->dataEffectiveness,
            'perfection'    => $this->dataPerfection,
            'average'       => $this->average($scoutings)
        ];

    }

    private function effectiveness($leftPoints, $rightPoints)
    {
        if ($leftPoints >= $rightPoints) {
            $this->dataEffectiveness['victories'] += 1;
            return;
        }

        $this->dataEffectiveness['defeats'] += 1;

    }

    private function perfection($leftPoints, $rightPoints)
    {
        if ($leftPoints - $rightPoints >= 4) {
            $this->dataPerfection['perfect'] += 1;
            return;
        }

        $this->dataPerfection['imperfect'] += 1;
    }

    private function average($scoutings)
    {
        /** @var \Illuminate\Database\Eloquent\Collection $scoutings */
        $combatsCount = $scoutings->count();
        $average = ($this->dataValid['valid'] / ($combatsCount * 5) + $this->dataEffectiveness['victories'] / $combatsCount) / 2;
        $this->dataAverage = [
            'percentage' => number_format($average * 100, 2),
            'given'      => $this->dataValid['given'],
            'received'   => $this->dataValid['received'],
        ];

        return $this->dataAverage;
    }

    private function consumedTime()
    {
        if ($this->timeConsume <= 180) {
            return [
                'timeConsumed' => toHHMMSS($this->timeConsume),
                'timeIdle'     => toHHMMSS(180 - $this->timeConsume),
                'percentage'   => number_format($this->timeConsume * 100 / 180, 2)
            ];
        }

        if ($this->timeConsume <= 240) {
            return [
                'timeConsumed' => toHHMMSS($this->timeConsume),
                'timeIdle'     => toHHMMSS(240 - $this->timeConsume),
                'percentage'   => number_format($this->timeConsume * 100 / 240, 2)

            ];
        }

        return [
            'timeConsumed' => toHHMMSS($this->timeConsume),
            'timeIdle'     => toHHMMSS(0),
            'percentage'   => number_format(100, 2)
        ];
    }
}