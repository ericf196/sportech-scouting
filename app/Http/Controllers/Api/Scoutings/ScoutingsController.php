<?php

namespace App\Http\Controllers\Api\Scoutings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Scoutings\ScoutingCreateRequest;
use App\Http\Requests\Scoutings\ScoutingUpdateRequest;
use App\Http\Requests;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Repositories\Contracts\Athletes\AthleteRepository;
use App\Scouting\Repositories\Contracts\Championships\ChampionshipRepository;
use App\Scouting\Repositories\Contracts\Events\EventRepository;
use App\Scouting\Transformers\Scoutings\ScoutingTransformer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Scouting\Repositories\Contracts\Scoutings\ScoutingRepository;
use Yajra\Datatables\Datatables;


class ScoutingsController extends Controller
{

    /**
     * @var ScoutingRepository
     */
    protected $repository;
    /**
     * @var AthleteRepository
     */
    private $athleteRepository;
    /**
     * @var ChampionshipRepository
     */
    private $championshipRepository;
    /**
     * @var EventRepository
     */
    private $eventRepository;

    public function __construct(ScoutingRepository $repository,
                                AthleteRepository $athleteRepository,
                                ChampionshipRepository $championshipRepository,
                                EventRepository $eventRepository)
    {
        $this->repository = $repository;
        $this->athleteRepository = $athleteRepository;
        $this->championshipRepository = $championshipRepository;
        $this->eventRepository = $eventRepository;
    }


    /**
     * Display a listing of scoutings.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $except = $request->get('except');
        $query = Scouting::query();

        if ($except) {
            $query = $query->whereNotIn('id', explode(',', $except));
        }
        return Datatables::of($query)
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

        $data = $request->all();
        $leftAthlete = null;
        $rightAthlete = null;
        $data['scouter_id'] = \Auth::user()->id;
        $data['name'] = ['es' => $data['name'], 'en' => $data['name']];
        $data['description'] = ['es' => $data['description'], 'en' => $data['description']];
        $scouting = $this->repository->create($data);

        return $this->createItem($scouting, new ScoutingTransformer(), 'data', ['message' => trans('admin/scoutings/scoutings.created_successfully')]);
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
        $data = $request->all();
        $leftAthlete = null;
        $rightAthlete = null;
        $data['name'] = ['es' => $data['name'], 'en' => $data['name']];
        $data['description'] = ['es' => $data['description'], 'en' => $data['description']];
        $scouting = $this->repository->update($data, $id);

        return $this->createItem($scouting, new ScoutingTransformer(), 'data', ['message' => trans('admin/scoutings/scoutings.updated_successfully')]);
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

        return response()->json(['message' => trans('admin/scoutings/scoutings.deleted_succesfully')]);
    }


    public function app()
    {
        $data = collect();
        return Datatables::of($data)
            ->setTransformer(new ScoutingTransformer())
            ->make(true);
    }

    public function results()
    {
        $data = collect();
        return Datatables::of($data)
            ->setTransformer(new ScoutingTransformer())
            ->make(true);
    }

    public function otherSources()
    {
        $data = collect();
        return Datatables::of($data)
            ->setTransformer(new ScoutingTransformer())
            ->make(true);
    }

    public function latest()
    {
        $scouting = $this->repository->latest();
        if ($scouting)
            return $this->createItem($scouting, new ScoutingTransformer());

        return response()->json(['data' => []]);
    }

    public function search(Request $request)
    {
        $name = $request->get('name');
        $except = $request->get('except');
        $user = $this->loggedInUser();
        $scoutings = Scouting::where('scouter_id', $user->id);
        if ($name) {
            $scoutings = $scoutings->where('name', 'like', '%' . $name . '%');
        }

        if ($except) {
            $exceptIds = explode(',', $except);
            $scoutings = $scoutings->whereNotIn('id',$exceptIds);
        }

        $scoutings = $scoutings->take(10)->get();
        return $this->createCollection($scoutings, new ScoutingTransformer());
    }
}
