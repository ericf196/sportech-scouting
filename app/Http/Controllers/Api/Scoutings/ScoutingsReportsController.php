<?php
namespace App\Http\Controllers\Api\Scoutings;

use App\Http\Controllers\Controller;
use App\Scouting\Entities\Reports\Report;
use App\Scouting\Repositories\Contracts\Reports\ReportRepository;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingRepository;
use App\Scouting\Services\Reports\ReportDataGenerator;
use App\Scouting\Transformers\Reports\ReportTransformer;
use DB;
use Exception;
use Tymon\JWTAuth\JWTAuth;

class ScoutingsReportsController extends Controller
{

    public function report($id, ReportRepository $reportRepository, JWTAuth $jwt, ScoutingRepository $scoutingRepository)
    {
        $report = $reportRepository->findWhere(['scouting_id' => $id, 'auto_generated' => true]);

        if ($report->count()) {
            return $this->createItem($report->first(), new ReportTransformer(), 'data');
        }

        $user = $jwt->parseToken()->authenticate();
        $data = [];
        $scoutingsIds = [$id];
        $scouting = $scoutingRepository->find($id);
        DB::beginTransaction();
        try {
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

        } catch (Exception $e) {
            DB::rollBack();
            \Log::error($e->getMessage() . PHP_EOL . ' file:' . $e->getFile() . PHP_EOL . 'line:' . $e->getLine() . PHP_EOL . $e->getTraceAsString());
            return response()->json(['message' => trans('admin/scoutings/scoutings.error_report')]);
        }

        DB::commit();
        return $this->createItem($report, new ReportTransformer(), 'data');

    }
}