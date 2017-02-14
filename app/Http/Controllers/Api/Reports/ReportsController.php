<?php
namespace App\Http\Controllers\Api\Reports;

use App\Http\Controllers\Controller;
use App\Http\Requests\Reports\ReportsStoreRequest;
use App\Scouting\Entities\Reports\Report;
use App\Scouting\Repositories\Contracts\Reports\ReportRepository;
use App\Scouting\Services\Reports\ReportDataGenerator;
use App\Scouting\Transformers\Reports\ReportTransformer;
use DB;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Tymon\JWTAuth\JWTAuth;
use Yajra\Datatables\Datatables;

class ReportsController extends Controller
{
    /**
     * @var ReportRepository
     */
    private $repository;

    public function __construct(ReportRepository $repository)
    {

        $this->repository = $repository;
    }

    public function index()
    {
        return Datatables::of($this->repository->datatable())
            ->setTransformer(new ReportTransformer())
            ->make(true);
    }

    public function store(ReportsStoreRequest $request, JWTAuth $jwt)
    {
        $user = $jwt->parseToken()->authenticate();

        $data = [];
        $scoutingsIds = $request->get('scoutings');
        DB::beginTransaction();
        try {
            $data['name'] = $request->get('translation')['name'];
            $data['description'] = $request->get('translation')['description'];
            $data['description']['es'] = $data['description']['en'];
            $data['name']['es'] = $data['name']['en'];
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
            return response()->make($e->getMessage() . $e->getFile() . $e->getLine(), 404);
        }

        DB::commit();
        return response()->json(['message' => trans('admin/reports/reports.created_successfully')]);

    }

    public function show($id)
    {
        try {
            $report = $this->repository->find($id);

        } catch (ModelNotFoundException $e) {
            return response()->make(trans('admin/reports/reports.not_found'), 404);
        }

        return $this->createItem($report, new ReportTransformer());

    }

    public function test()
    {

        $report = Report::first();
        $data = (new ReportDataGenerator($report))->generate();

        return $data;
    }

}