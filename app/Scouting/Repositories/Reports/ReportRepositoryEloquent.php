<?php

namespace App\Scouting\Repositories\Reports;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Scouting\Repositories\Contracts\Reports\ReportRepository;
use App\Scouting\Entities\Reports\Report;
use App\Scouting\Validators\Reports\ReportValidator;

/**
 * Class ReportRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Reports;
 */
class ReportRepositoryEloquent extends BaseRepository implements ReportRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Report::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function datatable()
    {
        return $this->model->select('reports.*');

    }
}
