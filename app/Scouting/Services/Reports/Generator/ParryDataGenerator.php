<?php
namespace App\Scouting\Services\Reports\Generator;

use App\Scouting\Entities\Scoutings\ScoutingTouch;
use App\Scouting\Repositories\Contracts\Scoutings\TagRepository;
use App\Scouting\Services\Reports\Contracts\GlobalDataGeneratorContract;
use Illuminate\Support\Collection;

class ParryDataGenerator implements GlobalDataGeneratorContract
{
    protected $tagRepository;
    protected $parries;
    protected $categories;

    public function __construct()
    {
        $this->tagRepository = app()->make(TagRepository::class);
        $this->parries = [9 => 0, 8 => 0, 7 => 0, 6 => 0, 5 => 0, 4 => 0, 3 => 0, 2 => 0, 1 => 0];
        $this->categories = ['9', '8', '7', '6', '5', '4', '3', '2', '1'];
    }

    /**
     * Analize the scouting
     *
     * @param Collection $scoutings
     * @return mixed
     */
    public function analyze(Collection $scoutings)
    {
        $parryTag = $this->tagRepository->findWhere(['abbr' => 'PRY'])->first();
        $endTag = $this->tagRepository->findWhere(['abbr' => 'END'])->first();
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

        $parries = \DB::table('scoutings_touches_actions_left_tags')->whereIn('scouting_action_id', $actionsIds->toArray())->where('tag_id', $parryTag->id)->get();
        $parries->each(function ($parry) use ($endTag) {
            $ending = \DB::table('scoutings_touches_actions_left_tags')->where('scouting_action_id', $parry->scouting_action_id)->where('tag_id', $endTag->id)->first();
            if ($ending) {
                $ending = \DB::table('tags_options')->find($ending->tag_option_id);
                $this->parries[$ending->value] = $this->parries[$ending->value] + 1;
            }
        });

        $parryAux = collect();
        foreach ($this->parries as $bodyzone => $value) {
            $parryAux->push($value);
        }
        return [
            'data'       => $parryAux->toArray(),
            'categories' => $this->categories
        ];
    }
}