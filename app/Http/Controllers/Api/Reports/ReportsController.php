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
        $user = $this->loggedInUser();

        return Datatables::of(Report::where('user_id', $user->id)->select('reports.*'))
            ->setTransformer(new ReportTransformer())
            ->make(true);
    }

    public function store(ReportsStoreRequest $request, JWTAuth $jwt)
    {
        $user = $jwt->parseToken()->authenticate();
        $scoutings = collect($request->get('scoutings'));
        $data = $request->all();
        DB::beginTransaction();
        try {
            $data['name'] = ['es' => $data['name'], 'en' => $data['name']];
            if (array_key_exists('description', $data)) {
                $data['description'] = ['es' => $data['description'], 'en' => $data['description']];
            }
            /** @var Report $report */
            $scoutingsIds = collect();
            $scoutings->each(function ($scouting) use (&$scoutingsIds) {
                $scoutingsIds->push($scouting['scouting']['id']);
            });
            $report = $user->reports()->create($data);
            $report->scoutings()->sync($scoutingsIds->toArray());
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

    public function latest()
    {
        $report = $this->repository->latest();
        if ($report)
            return $this->createItem($report, new ReportTransformer());

        return response()->json(['data' => []]);
    }

}