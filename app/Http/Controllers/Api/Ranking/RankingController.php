<?php
namespace App\Http\Controllers\Api\Ranking;

use App\Http\Controllers\Controller;
use App\Scouting\Repositories\Contracts\Rankings\RankingRepository;
use App\Scouting\Transformers\Rankings\RankingTransformer;

class RankingController extends Controller
{
    public function index(RankingRepository $repository)
    {

        $ranking = $repository->ranking();
        return $this->createPaginatedCollection($ranking, new RankingTransformer(), 'data');
    }

}