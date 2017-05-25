<?php
namespace App\Http\Controllers\Api\Athletes;

use App\Http\Controllers\Controller;
use App\Http\Requests\Athlete\AthleteStoreRequest;
use App\Http\Requests\Athlete\AthleteUpdateRequest;
use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Repositories\Contracts\Athletes\AthleteRepository;
use App\Scouting\Repositories\Contracts\Championships\ChampionshipRepository;
use App\Scouting\Repositories\Contracts\Events\EventRepository;
use App\Scouting\Transformers\Athletes\AthleteTransformer;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Yajra\Datatables\Datatables;

class AthletesController extends Controller
{
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

    public function __construct(AthleteRepository $athleteRepository,
                                ChampionshipRepository $championshipRepository,
                                EventRepository $eventRepository)
    {

        $this->athleteRepository = $athleteRepository;
        $this->championshipRepository = $championshipRepository;
        $this->eventRepository = $eventRepository;
    }

    public function index(Request $request)
    {
        $except = $request->get('except');
        $user = $this->loggedInUser();
        return Datatables::of($this->athleteRepository->datatable($except)->where('created_by', $user->id))
            ->filterColumn('name', function ($query, $keyword) {
                $sql = "CONCAT(athletes.first_name,'-',athletes.last_name)  like ?";
                $query->whereRaw($sql, ["%{$keyword}%"]);
            })
            ->setTransformer(new AthleteTransformer())
            ->make(true);
    }

    public function store(AthleteStoreRequest $request)
    {
        $data = $request->all();
        $data['gender'] = $data['gender']['gender'];
        $user = \Auth::user();
        $data['created_by'] = $user->id;
        try {
            $athlete = $this->athleteRepository->create($data);
            if ($request->hasFile('image')) {
                $athlete->clearMediaCollection('profile');
                $athlete->addMedia($request->file('image'))->preservingOriginal()->toMediaLibrary('profile');
            } elseif ($request->has('removeImage')) {
                $athlete->clearMediaCollection('profile');
            }
        } catch (Exception $e) {
            return response()->make($e->getMessage(), 404);
        }

        return response()->json(['message' => trans('admin/athletes/athletes.created_successfully')]);

    }

    public function update(AthleteUpdateRequest $request, $id)
    {
        $data = $request->all();
        $data['gender'] = $data['gender']['gender'];
        try {
            $athlete = $this->athleteRepository->update($data, $id);
            if ($request->hasFile('image')) {
                $athlete->clearMediaCollection('profile');
                $athlete->addMedia($request->file('image'))->preservingOriginal()->toMediaLibrary('profile');
            } elseif ($request->has('removeImage')) {
                $athlete->clearMediaCollection('profile');
            }
        } catch (Exception $e) {
            return response()->make($e->getMessage(), 404);
        }

        return response()->json(['message' => trans('admin/athletes/athletes.updated_successfully')]);
    }

    public function destroy($id)
    {
        try {
            $this->athleteRepository->delete($id);
        } catch (ModelNotFoundException $e) {
            return response()->make(trans('admin/athletes/athletes.not_found'), 404);
        }

        return response()->json(['message' => trans('admin/athletes/athletes.deleted_succesfully')]);
    }

    public function show($id)
    {
        try {
            $athlete = $this->athleteRepository->find($id);

        } catch (ModelNotFoundException $e) {
            return response()->make(trans('admin/athletes/athletes.not_found'), 404);
        }

        return $this->createItem($athlete, new AthleteTransformer());
    }

    public function destroyProfilePicture($id)
    {
        try {
            $athlete = $this->athleteRepository->find($id);
            if ($athlete->getMedia('profile')->count()) {
                $athlete->getMedia('profile')->first()->delete();
            }
        } catch (ModelNotFoundException $e) {
            return response()->make(trans('admin/athletes/athletes.not_found'), 404);
        }
        return response()->json(['message' => trans('admin/athletes/athletes.profile_picture_deleted')]);


    }

    public function athletesClub($championshipId, Request $request)
    {
        $championship = $this->championshipRepository->with('events')->find($championshipId);
        $club = $request->get('club');
        $event = $request->get('event');
        $query = Athlete::with(['clubs', 'events', 'country'])->whereHas('events', function ($q) use ($event, $championship) {
            if ($event) {
                return $q->where('id', $event);
            } else {
                return $q->whereIn('id', $championship->events->pluck('id')->toArray());
            }
        })->select('athletes.*');

        if ($club) {
            $query = $query->whereHas('clubs', function ($q) use ($club) {
                return $q->where('id', $club);
            });
        }

        return Datatables::of($query)
            ->setTransformer(new AthleteTransformer())
            ->make(true);
    }
}