<?php
namespace App\Http\Controllers\Api\Scoutings;

use App\Http\Controllers\Controller;
use App\Scouting\Entities\Reports\Report;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Repositories\Contracts\Reports\ReportRepository;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingRepository;
use App\Scouting\Services\Reports\ReportDataGenerator;
use App\Scouting\Transformers\Reports\ReportTransformer;
use DB;
use Exception;
use Tymon\JWTAuth\JWTAuth;

class ScoutingsReportsController extends Controller
{

    public function report($id)
    {
        $report = Report::whereHas('scoutings', function ($q) use ($id) {
            $q->where('id', $id)->where('scouter_id', $this->loggedInUser()->id);
        })->where('user_id', $this->loggedInUser()->id)->where('auto_generated', true)->first();

        if ($report) {
            return $this->createItem($report, new ReportTransformer(), 'data');
        }

        $user = $this->loggedInUser();
        $data = [];
        $scoutingsIds = [$id];
        $scouting = Scouting::find($id);
        DB::beginTransaction();
        $data['name'] = $scouting->getTranslations('name');
        $data['description'] = $scouting->getTranslations('description');
        $data['description']['es'] .= ' Reporte';
        $data['name']['es'] .= ' Reporte';
        $data['description']['en'] .= ' Report';
        $data['name']['en'] .= ' Report';
        $data['scouting_id'] = $id;
        $data['auto_generated'] = true;
        /** @var Report $report */
        $report = $user->reports()->create($data);
        $report->scoutings()->sync($scoutingsIds);
        $reportData = (new ReportDataGenerator($report))->generate();
        $report->data = $reportData['data'];
        $report->data_offensive = $reportData['data_offensive'];
        $report->data_defensive = $reportData['data_defensive'];
        $report->data_counteroffensive = $reportData['data_counteroffensive'];
        $report->data_combat_status = $reportData['data_combat_status'];
        $report->data_parry = $reportData['data_parry'];
        $report->data_summary = $reportData['data_summary'];
        $report->save();


        DB::commit();
        return $this->createItem($report, new ReportTransformer(), 'data');

    }
}