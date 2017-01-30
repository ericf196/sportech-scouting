<?php

namespace App\Scouting\Repositories\Championships;

use Carbon\Carbon;
use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Championships\ChampionshipRepository;
use App\Scouting\Entities\Championships\Championship;

/**
 * Class ChampionshipRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Championships;
 */
class ChampionshipRepositoryEloquent extends BaseRepository implements ChampionshipRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Championship::class;
    }

    public function datatable()
    {
        return $this->model->with(['sport'])->select('championships.*');
    }

    public function create(array $attributes)
    {
        $hasTranslation = array_key_exists('translation', $attributes);
        $attributes['name'] = $hasTranslation ? $attributes['translation']['name'] : $attributes['name'];
        $description = $hasTranslation ? $attributes['translation'] : $attributes;
        $attributes['description'] = array_key_exists('description', $description) ? $description['description'] : null;
        $attributes['slug'] = $hasTranslation ? str_slug($attributes['translation']['name']['en']) : str_slug($attributes['name']);
        $attributes['init_date'] = Carbon::parse($attributes['init_date']);
        $attributes['end_date'] = Carbon::parse($attributes['end_date']);

        return parent::create($attributes);
    }

    public function update(array $attributes, $id)
    {
        $hasTranslation = array_key_exists('translation', $attributes);
        $attributes['name'] = $hasTranslation ? $attributes['translation']['name'] : $attributes['name'];
        $description = $hasTranslation ? $attributes['translation'] : $attributes;
        $attributes['description'] = array_key_exists('description', $description) ? $description['description'] : null;
        $attributes['slug'] = $hasTranslation ? str_slug($attributes['translation']['name']['en']) : str_slug($attributes['name']);
        $attributes['init_date'] = Carbon::parse($attributes['init_date']);
        $attributes['end_date'] = Carbon::parse($attributes['end_date']);
        return parent::update($attributes, $id);
    }

}
