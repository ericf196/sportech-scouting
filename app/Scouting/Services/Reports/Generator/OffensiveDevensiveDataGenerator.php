<?php
namespace App\Scouting\Services\Reports\Generator;

use App\Scouting\Entities\Scoutings\ScoutingTouch;
use App\Scouting\Repositories\Contracts\Scoutings\TagRepository;
use App\Scouting\Services\Reports\Contracts\GlobalDataGeneratorContract;
use Illuminate\Support\Collection;

class OffensiveDevensiveDataGenerator implements GlobalDataGeneratorContract
{

    /**
     * @var TagRepository
     */
    private $tagRepository;

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
        /** @var \Illuminate\Database\Eloquent\Collection $offensiveTagsIds */
        /** @var \Illuminate\Database\Eloquent\Collection $deffensiveTagsIds */
        /** @var \Illuminate\Database\Eloquent\Collection $counterOffensiveTagsIds */
        $offensiveTagsIds = $this->tagRepository->findWhere(['category->en' => 'Offensive'])->pluck('id');
        $deffensiveTagsIds = $this->tagRepository->findWhere(['category->en' => 'Defensive'])->pluck('id');
        $counterOffensiveTagsIds = $this->tagRepository->findWhere(['category->en' => 'Counter-offensive'])->pluck('id');
        $actionsIds = collect();
        $scoutings->each(
            function ($scouting) use (&$actionsIds) {
                /** @var ScoutingTouch $touches */
                $touches = $scouting->scoutingTouches;
                $touches->each(function ($touch) use (&$actionsIds) {
                    $actionsIds = $actionsIds->merge($touch->actions->pluck('id')->toArray());
                });
            }
        );

        $offesiveCount = \DB::table('scoutings_touches_actions_left_tags')->whereIn('scouting_action_id', $actionsIds->toArray())->whereIn('tag_id', $offensiveTagsIds->toArray())->sum('tag_id');
        $defensiveCount = \DB::table('scoutings_touches_actions_left_tags')->whereIn('scouting_action_id', $actionsIds->toArray())->whereIn('tag_id', $deffensiveTagsIds->toArray())->sum('tag_id');
        $counterOffesiveCount = \DB::table('scoutings_touches_actions_left_tags')->whereIn('scouting_action_id', $actionsIds->toArray())->whereIn('tag_id', $counterOffensiveTagsIds->toArray())->sum('tag_id');

        $offesiveCountRight = \DB::table('scoutings_touches_actions_right_tags')->whereIn('scouting_action_id', $actionsIds->toArray())->whereIn('tag_id', $offensiveTagsIds->toArray())->sum('tag_id');
        $defensiveCountRight = \DB::table('scoutings_touches_actions_right_tags')->whereIn('scouting_action_id', $actionsIds->toArray())->whereIn('tag_id', $deffensiveTagsIds->toArray())->sum('tag_id');
        $counterOffesiveCountRight = \DB::table('scoutings_touches_actions_right_tags')->whereIn('scouting_action_id', $actionsIds->toArray())->whereIn('tag_id', $counterOffensiveTagsIds->toArray())->sum('tag_id');
        $totalCount = $offesiveCount + $defensiveCount + $counterOffesiveCount;
        $totalCountRight = $offesiveCountRight + $defensiveCountRight + $counterOffesiveCountRight;


        return [
            'left'  => [
                'defensive'        => $totalCount ? $defensiveCount / $totalCount * 100 : 0,
                'offensive'        => $totalCount ? $offesiveCount / $totalCount * 100 : 0,
                'counterOffensive' => $totalCount ? $counterOffesiveCount / $totalCount * 100 : 0,
            ],
            'right' => [
                'defensive'        => $totalCountRight ? $defensiveCountRight / $totalCountRight * 100 : 0,
                'offensive'        => $totalCountRight ? $offesiveCountRight / $totalCountRight * 100 : 0,
                'counterOffensive' => $totalCountRight ? $counterOffesiveCountRight / $totalCountRight * 100 : 0,
            ],
        ];
    }
}