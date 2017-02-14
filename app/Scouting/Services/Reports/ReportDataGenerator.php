<?php
namespace App\Scouting\Services\Reports;

use App\Scouting\Entities\Reports\Report;
use App\Scouting\Services\Reports\Generator\CombatStatusDataGenerator;
use App\Scouting\Services\Reports\Generator\OffensiveDevensiveDataGenerator;
use App\Scouting\Services\Reports\Generator\ParryDataGenerator;
use App\Scouting\Services\Reports\Generator\PointsVsTimeDataGenerator;
use App\Scouting\Services\Reports\Generator\SummaryDataGenerator;
use Illuminate\Support\Collection;

class ReportDataGenerator
{
    /**
     * @var Report
     */
    private $report;
    /**
     * @var Collection
     */
    private $data;
    private $dataParry;
    private $dataCombatStatus;
    private $dataOffensive;
    private $dataDefensive;
    private $dataCounterOffensive;
    /**
     * @var Collection
     */
    private $dataSummary;

    public function __construct(Report $report)
    {
        $this->report = $report;
        $this->data = collect();
        $this->dataParry = collect();
        $this->dataCombatStatus = collect();
        $this->dataOffensive = collect();
        $this->dataDefensive = collect();
        $this->dataCounterOffensive = collect();
    }

    /**
     * @return array
     */
    public function generate()
    {
        $this->report->load(['scoutings.scoutingTouches.actions.leftTags', 'scoutings.scoutingTouches.actions.rightTags', 'scoutings.leftAthlete', 'scoutings.rightAthlete']);
        $this->report->scoutings->each(
            function ($scouting) {
                $this->data->push((new PointsVsTimeDataGenerator())->analyze($scouting));
            }
        );

        $this->dataCombatStatus = collect((new CombatStatusDataGenerator())->analyze($this->report->scoutings));
        $this->dataParry = collect((new ParryDataGenerator())->analyze($this->report->scoutings));

        $offensiveDefensiveData = (new OffensiveDevensiveDataGenerator())->analyze($this->report->scoutings);
        $this->dataOffensive = collect(['data' => $offensiveDefensiveData['offensive']]);
        $this->dataDefensive = collect(['data' => $offensiveDefensiveData['defensive']]);
        $this->dataCounterOffensive = collect(['data' => $offensiveDefensiveData['counterOffensive']]);
        $this->dataSummary = collect((new SummaryDataGenerator())->analyze($this->report->scoutings));

        return $this->toArray();
    }

    public function toArray()
    {
        return [
            'data'                  => $this->data->toArray(),
            'data_offensive'        => $this->dataOffensive->toArray(),
            'data_defensive'        => $this->dataDefensive->toArray(),
            'data_counteroffensive' => $this->dataCounterOffensive->toArray(),
            'data_parry'            => $this->dataParry->toArray(),
            'data_combat_status'    => $this->dataCombatStatus->toArray(),
            'data_summary'          => $this->dataSummary->toArray(),
        ];
    }
}