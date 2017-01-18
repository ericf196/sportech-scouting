<?php

namespace App\Scouting\Repositories\Sports;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Scouting\Repositories\Contracts\Sports\CategoryRepository;
use App\Scouting\Entities\Sports\Category;

/**
 * Class CategoryRepositoryEloquent
 * @package namespace App\Scouting\Repositories\Sports;
 */
class CategoryRepositoryEloquent extends BaseRepository implements CategoryRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Category::class;
    }
}
