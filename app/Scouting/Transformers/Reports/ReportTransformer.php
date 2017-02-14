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
     * @param Report $model
     *
     * @return array
     */
    public function transform(Report $model)
    {
        return [
            'id'            => (int)$model->id,
            'name'          => $model->name,
            'description'   => $model->description,
            'data'          => $model->data,
            'translation'   => [
                'name'        => $model->getTranslations('name'),
                'description' => $model->getTranslations('description')
            ],
            'created_at' => $model->created_at,
            'updated_at'    => $model->updated_at
        ];
    }
}
