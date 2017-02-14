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
        $data = $this->formatScoutingData($data);

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
        $data = $this->formatScoutingData($data);

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

    private function formatScoutingData($data)
    {
        $formattedData = $data;
        if (!array_key_exists('id', $data['championship'])) {
            $formattedData['championship']['sport_id'] = $data['championship']['sport']['id'];
            $championship = $this->championshipRepository->create($formattedData['championship']);
            $formattedData['championship'] = $championship->toArray();
        }

        if (!array_key_exists('id', $data['event'])) {
            $formattedData['event']['championship_id'] = $formattedData['championship']['id'];
            $formattedData['event']['category_id'] = $data['event']['category']['id'];
            $formattedData['event']['specialty_id'] = $data['event']['specialty']['id'];
            $event = $this->eventRepository->create($formattedData['event']);
            $formattedData['event'] = $event->toArray();
        }

        if (!array_key_exists('id', $data['leftAthlete'])) {
            $formattedData['leftAthlete']['gender'] = $data['leftAthlete']['gender']['gender'];
            $formattedData['leftAthlete']['country_id'] = $data['leftAthlete']['country']['id'];
            $formattedData['leftAthlete']['sport_id'] = $data['championship']['sport']['id'];
            $formattedData['leftAthlete']['category_id'] = $data['event']['category']['id'];
            $formattedData['leftAthlete']['specialty_id'] = $data['event']['specialty']['id'];
            $leftAthlete = $this->athleteRepository->create($formattedData['leftAthlete']);
            $formattedData['leftAthlete'] = $leftAthlete->toArray();
        }

        if (!array_key_exists('id', $data['rightAthlete'])) {
            $formattedData['rightAthlete']['gender'] = $data['rightAthlete']['gender']['gender'];
            $formattedData['rightAthlete']['country_id'] = $data['rightAthlete']['country']['id'];
            $formattedData['rightAthlete']['sport_id'] = $data['championship']['sport']['id'];
            $formattedData['rightAthlete']['category_id'] = $data['event']['category']['id'];
            $formattedData['rightAthlete']['specialty_id'] = $data['event']['specialty']['id'];
            $rightAthlete = $this->athleteRepository->create($formattedData['rightAthlete']);
            $formattedData['rightAthlete'] = $rightAthlete->toArray();
        }
        return $formattedData;
    }
}
