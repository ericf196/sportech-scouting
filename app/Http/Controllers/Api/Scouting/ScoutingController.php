<?php

namespace App\Http\Controllers\Api\Scouting;

use App\Http\Controllers\Controller;
use App\Http\Requests\Scoutings\ScoutingCreateRequest;
use App\Http\Requests\Scoutings\ScoutingUpdateRequest;
use App\Http\Requests;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Repositories\Contracts\Athletes\AthleteRepository;
use App\Scouting\Transformers\Scoutings\ScoutingTransformer;
use Illuminate\Http\Response;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingRepository;
use Yajra\Datatables\Datatables;


class ScoutingController extends Controller
{

    /**
     * @var ScoutingRepository
     */
    protected $repository;
    /**
     * @var AthleteRepository
     */
    private $athleteRepository;

    public function __construct(ScoutingRepository $repository, AthleteRepository $athleteRepository)
    {
        $this->repository = $repository;
        $this->athleteRepository = $athleteRepository;
    }


    /**
     * Display a listing of scoutings.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Datatables::of(Scouting::query())
            ->setTransformer(new ScoutingTransformer())
            ->make(true);
    }

    /**
     * Store a newly created scouting in storage.
     *
     * @param  ScoutingCreateRequest $request
     *
     * @return \Illuminate\Http\RedirectResponse|Response
     */
    public function store(ScoutingCreateRequest $request)
    {
        $scouting = $this->repository->create($request->all());
        $leftAthlete = $this->athleteRepository->find($request->get('leftAthlete')['id']);
        $rightAthlete = $this->athleteRepository->find($request->get('rightAthlete')['id']);

        $scouting->leftAthlete()->associate($leftAthlete);
        $scouting->rightAthlete()->associate($rightAthlete);

        return $this->createItem($scouting, new ScoutingTransformer(), 'data', ['message' => 'Scouting created.']);
    }


    /**
     * Display the specified scouting.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $scouting = $this->repository->find($id);

        return $this->createItem($scouting, new ScoutingTransformer());
    }


    /**
     * Update the specified scouting in storage.
     *
     * @param  ScoutingUpdateRequest $request
     * @param  string $id
     *
     * @return Response|\Illuminate\Http\RedirectResponse
     */
    public function update(ScoutingUpdateRequest $request, $id)
    {
        $scouting = $this->repository->update($request->all(), $id);
        $leftAthlete = $this->athleteRepository->find($request->get('leftAthlete')['id']);
        $rightAthlete = $this->athleteRepository->find($request->get('rightAthlete')['id']);

        $scouting->leftAthlete()->associate($leftAthlete);
        $scouting->rightAthlete()->associate($rightAthlete);
        return $this->createItem($scouting, new ScoutingTransformer(), 'data', ['message' => 'Scouting updated.']);
    }


    /**
     * Remove the specified scouting from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        return $this->createItem($deleted, new ScoutingTransformer(), 'data', ['message' => 'Scouting deleted.']);
    }
}
