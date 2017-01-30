<?php
namespace App\Http\Controllers\Api\Sports;

use App\Http\Controllers\Controller;
use App\Scouting\Repositories\Contracts\Sports\CategoryRepository;
use App\Scouting\Transformers\Sports\CategoryTransformer;

class CategoriesController extends Controller
{
    /**
     * @var CategoryRepository
     */
    private $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function index()
    {
        return $this->createCollection($this->categoryRepository->all(), new CategoryTransformer());
    }
}