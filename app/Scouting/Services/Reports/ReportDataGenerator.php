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
        $this->dataSummary = collect();
        $this->global = collect();
    }

    /**
     * @return array
     */
    public function generate()
    {
        $this->report->load(['scoutings.scoutingTouches.actions.leftTags', 'scoutings.scoutingTouches.actions.rightTags']);
        $this->report->scoutings->each(
            function ($scouting) {
                $this->data->push((new PointsVsTimeDataGenerator())->analyze($scouting));
                $scoutingCollection = collect([$scouting]);
                $this->dataCombatStatus->push((new CombatStatusDataGenerator())->analyze($scoutingCollection));
                $this->dataParry->push((new ParryDataGenerator())->analyze($scoutingCollection));
                $offensiveDefensiveData = (new OffensiveDevensiveDataGenerator())->analyze($scoutingCollection);
                $this->dataOffensive->push(['data' => ['left' => [$offensiveDefensiveData['left']['offensive']], 'right' => [$offensiveDefensiveData['right']['offensive']]]]);
                $this->dataDefensive->push(['data' => ['left' => [$offensiveDefensiveData['left']['defensive']], 'right' => [$offensiveDefensiveData['right']['defensive']]]]);
                $this->dataCounterOffensive->push(['data' => ['left' => [$offensiveDefensiveData['left']['counterOffensive']], 'right' => [$offensiveDefensiveData['right']['counterOffensive']]]]);
                $this->dataSummary->push((new SummaryDataGenerator())->analyze($scoutingCollection));
            }
        );

        if ($this->report->scoutings->count() > 1) {
            $this->global->push(collect(['dataCombatStatus' => (new CombatStatusDataGenerator())->analyze($this->report->scoutings)]));
            $this->global->push(collect(['dataParry' => (new ParryDataGenerator())->analyze($this->report->scoutings)]));

            $offensiveDefensiveData = (new OffensiveDevensiveDataGenerator())->analyze($this->report->scoutings);
            $this->global->push(collect(['dataOffensive' => ['data' => ['left' => [$offensiveDefensiveData['left']['offensive']], 'right' => [$offensiveDefensiveData['right']['offensive']]]]]));
            $this->global->push(collect(['dataDefensive' => ['data' => ['left' => [$offensiveDefensiveData['left']['defensive']], 'right' => [$offensiveDefensiveData['right']['defensive']]]]]));
            $this->global->push(collect(['dataCounterOffensive' => ['data' => ['left' => [$offensiveDefensiveData['left']['counterOffensive']], 'right' => [$offensiveDefensiveData['right']['counterOffensive']]]]]));
            $this->global->push(collect(['dataSummary' => (new ParryDataGenerator())->analyze($this->report->scoutings)]));
        }
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
            'global'                => $this->global->toArray(),
        ];
    }
}