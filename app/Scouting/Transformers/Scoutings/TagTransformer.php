<?php

namespace App\Scouting\Transformers\Scoutings;

use App\Scouting\Entities\Scoutings\TagOption;
use League\Fractal\TransformerAbstract;
use App\Scouting\Entities\Scoutings\Tag;

/**
 * Class TagTransformer
 * @package namespace App\Scouting\Transformers\Scoutings;
 */
class TagTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'options'
    ];

    /**
     * Transform the Tag entity
     * @param Tag $model
     *
     * @return array
     */
    public function transform(Tag $model)
    {
        $data = [
            'id'           => (int)$model->id,
            'name'         => $model->name,
            'abbr'         => $model->abbr,
            'dropdown'     => $model->dropdown,
            'category'     => $model->category,
            'color'        => $model->color,
            'translations' => [
                'name'     => $model->getTranslations('name'),
                'category' => $model->getTranslations('category')
            ]
        ];


        if ($model->pivot) {
            if ($model->pivot->tag_option_id) {
                $tagOption = TagOption::find($model->pivot->tag_option_id);
                $data['option'] = [
                    'id'           => (int)$tagOption->id,
                    'name'         => $tagOption->name,
                    'value'        => $tagOption->value,
                    'translations' => [
                        'name' => $tagOption->getTranslations('name')
                    ]
                ];
            }
        }

        return $data;
    }

    public function includeOptions(Tag $model)
    {
        $options = $model->options;
        if ($options) {
            return $this->collection($options, new TagOptionTransformer, 'parent');
        }
    }
}
