<?php
namespace App\Http\Controllers\Api\Reports;

use App\Http\Controllers\Controller;
use App\Scouting\Repositories\Contracts\Reports\ReportRepository;

class ReportsDataController extends Controller
{
    /**
     * @var ReportRepository
     */
    private $repository;

    public function __construct(ReportRepository $repository)
    {

        $this->repository = $repository;
    }

    public function pointVsTime($id)
    {
        $report = $this->repository->find($id);

        return $report->data;
    }

    public function offensiveDefensive($id)
    {
        $report = $this->repository->find($id);

        return [
            'offensive'        => $report->data_offensive,
            'defensive'        => $report->data_defensive,
            'counterOffensive' => $report->data_counteroffensive,
        ];
    }

    public function combatStatus($id)
    {
        $report = $this->repository->find($id);

        return $report->data_combat_status;
    }

    public function parry($id)
    {
        $report = $this->repository->find($id);

        return $report->data_parry;
    }

    public function summary($id)
    {
        $report = $this->repository->find($id);

        return $report->data_summary;
    }

}