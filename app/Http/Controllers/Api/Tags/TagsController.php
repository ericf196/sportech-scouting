<?php
namespace App\Http\Controllers\Api\Tags;

use App\Http\Controllers\Controller;
use App\Scouting\Repositories\Contracts\Scoutings\TagRepository;
use App\Scouting\Transformers\Scoutings\TagTransformer;

class TagsController extends Controller
{

    /**
     * @var TagRepository
     */
    private $tagRepository;

    public function __construct(TagRepository $tagRepository)
    {

        $this->tagRepository = $tagRepository;
    }

    public function index()
    {
        $tags = $this->tagRepository->all();
        return $this->createCollection($tags, new TagTransformer());
    }

}