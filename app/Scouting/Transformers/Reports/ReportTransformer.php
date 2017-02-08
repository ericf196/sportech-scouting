<?php

namespace App\Scouting\Transformers\Reports;

use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Reports\Report;

/**
 * Class ReportTransformer
 * @package namespace App\Scouting\Transformers\Reports;
 */
class ReportTransformer extends TransformerAbstract
{

    /**
     * Transform the \Report entity
     * @param \Report $model
     *
     * @return array
     */
    public function transform(Report $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
