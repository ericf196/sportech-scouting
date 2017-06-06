<?php

namespace App\Http\Controllers\Api\Scoutings;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Http\Requests\Scoutings\ScoutingTouchesUpdateRequest;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Entities\Scoutings\ScoutingTouchAction;
use App\Scouting\Repositories\Contracts\Athletes\AthleteRepository;
use App\Scouting\Repositories\Contracts\Reports\ReportRepository;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingRepository;
use App\Scouting\Services\Reports\ReportDataGenerator;
use App\Scouting\Transformers\Scoutings\ScoutingTransformer;
use Illuminate\Http\Response;


class ScoutingsTouchesController extends Controller
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
     * @param ReportRepository $reportRepository
     * @return \Illuminate\Http\RedirectResponse|Response
     */
    public function update(ScoutingTouchesUpdateRequest $request, $id, ReportRepository $reportRepository)
    {
        try {
            \DB::beginTransaction();
            $touches = collect($request->get('touches'));
            $scouting = Scouting::where('scouter_id', $this->loggedInUser()->id)->find($id);
            if (!$scouting) {
                $this->response->errorForbidden(trans('admin/scoutings/scoutings.not_found'));
            }
            $dbTouches = $scouting->scoutingTouches()->get();
            $dbTouches->each(function ($touch) {
                $dbActions = $touch->actions()->get();
                $dbActions->each(function ($action) {
                    $action->leftTags()->detach();
                    $action->rightTags()->detach();
                    $action->delete();
                });
                $touch->delete();
            });
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
            $report = $reportRepository->findWhere(['scouting_id' => $id, 'auto_generated' => true]);
            if ($report->count()) {
                $report = $report->first();
                $reportData = (new ReportDataGenerator($report))->generate();
                $report->data = $reportData['data'];
                $report->data_offensive = $reportData['data_offensive'];
                $report->data_defensive = $reportData['data_defensive'];
                $report->data_counteroffensive = $reportData['data_counteroffensive'];
                $report->data_combat_status = $reportData['data_combat_status'];
                $report->data_parry = $reportData['data_parry'];
                $report->data_summary = $reportData['data_summary'];
                $report->save();
            }
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->make($e->getMessage(), 404);
        }

        \DB::commit();
        return $this->createItem($scouting, new ScoutingTransformer(), 'data', ['message' => 'Scouting updated.']);
    }
}
