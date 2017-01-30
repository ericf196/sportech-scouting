<?php
namespace App\Http\Controllers\Api\Sports;


use App\Http\Controllers\Controller;
use App\Scouting\Repositories\Contracts\Sports\SpecialtyRepository;
use App\Scouting\Repositories\Contracts\Sports\SportRepository;
use App\Scouting\Transformers\Sports\SpecialtyTransformer;
use App\Scouting\Transformers\Sports\SportTransformer;

class SportsController extends Controller
{

    /**
     * @var SportRepository
     */
    private $sportRepository;
    /**
     * @var SpecialtyRepository
     */
    private $specialtyRepository;

    public function __construct(SportRepository $sportRepository, SpecialtyRepository $specialtyRepository)
    {

        $this->sportRepository = $sportRepository;
        $this->specialtyRepository = $specialtyRepository;
    }

    public function index()
    {
        return $this->createCollection($this->sportRepository->all(), new SportTransformer());
    }

    public function specialties($sportId)
    {
        $specialties = $this->specialtyRepository->findByField('sport_id', $sportId);
        return $this->createCollection($specialties, new SpecialtyTransformer());

    }
}