<?php

namespace App\Http\Controllers\Api\Scouting;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Http\Requests\Scoutings\ScoutingTouchesUpdateRequest;
use App\Scouting\Entities\Scoutings\ScoutingTouchAction;
use App\Scouting\Repositories\Contracts\Athletes\AthleteRepository;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingRepository;
use App\Scouting\Transformers\Scoutings\ScoutingTransformer;
use Illuminate\Http\Response;


class ScoutingTouchesController extends Controller
{

    /**
     * @var ScoutingRepository
     */
    protected $repository;
    /**
     * @var AthleteRepository
     */
    private $athleteRepository;

    public function __construct(ScoutingRepository $repository, AthleteRepository $athleteRepository)
    {
        $this->repository = $repository;
        $this->athleteRepository = $athleteRepository;
    }

    /**
     * Update the specified scouting in storage.
     *
     * @param ScoutingTouchesUpdateRequest $request
     * @param  string $id
     * @return \Illuminate\Http\RedirectResponse|Response
     */
    public function update(ScoutingTouchesUpdateRequest $request, $id)
    {
        $touches = collect($request->get('touches'));
        $scouting = $this->repository->find($id);

        $touches->each(function ($touch) use ($scouting) {
            $dbTouch = $scouting->scoutingTouches()->create($touch);
            $actions = collect($touch['actions']);
            $actions->each(function ($action) use ($dbTouch) {
                $dbAction = $dbTouch->actions()->save(new ScoutingTouchAction($action));
                $leftTags = collect($action['leftTags']);
                $rightTags = collect($action['rightTags']);
                $dbAction->leftTags()->detach();
                $dbAction->rightTags()->detach();
                $leftTags->each(function ($tag) use ($dbAction) {
                    if ($tag['dropdown']) {
                        $dbAction->leftTags()->attach($tag['id'], ['tag_option_id' => $tag['option']['id']]);
                    } else {
                        $dbAction->leftTags()->attach($tag['id']);
                    }
                });

                $rightTags->each(function ($tag) use ($dbAction) {
                    if ($tag['dropdown']) {
                        $dbAction->rightTags()->attach($tag['id'], ['tag_option_id' => $tag['option']['id']]);
                    } else {
                        $dbAction->rightTags()->attach($tag['id']);
                    }
                });
            });
        });

        return $this->createItem($scouting, new ScoutingTransformer(), 'data', ['message' => 'Scouting updated.']);
    }
}
