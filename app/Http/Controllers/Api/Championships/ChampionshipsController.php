<?php
namespace App\Http\Controllers\Api\Championships;

use App\Http\Controllers\Controller;
use App\Http\Requests\Championship\ChampionshipStoreRequest;
use App\Http\Requests\Championship\ChampionshipUpdateRequest;
use App\Scouting\Entities\Championships\Championship;
use App\Scouting\Entities\Events\Event;
use App\Scouting\Repositories\Contracts\Athletes\AthleteRepository;
use App\Scouting\Repositories\Contracts\Championships\ChampionshipRepository;
use App\Scouting\Repositories\Contracts\Events\EventRepository;
use App\Scouting\Transformers\Championships\ChampionshipTransformer;
use App\Scouting\Transformers\Events\EventTransformer;
use Carbon\Carbon;
use DB;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Yajra\Datatables\Facades\Datatables;

class ChampionshipsController extends Controller
{
    /**
     * @var ChampionshipRepository
     */
    private $championshipRepository;
    /**
     * @var AthleteRepository
     */
    private $athleteRepository;
    /**
     * @var EventRepository
     */
    private $eventRepository;

    public function __construct(ChampionshipRepository $championshipRepository,
                                EventRepository $eventRepository,
                                AthleteRepository $athleteRepository)
    {

        $this->championshipRepository = $championshipRepository;
        $this->athleteRepository = $athleteRepository;
        $this->eventRepository = $eventRepository;
    }

    public function index()
    {
        $champioships = $this->championshipRepository->all();
        return $this->createCollection($champioships, new ChampionshipTransformer());
    }

    public function datatable()
    {
        $user = $this->loggedInUser();
        return Datatables::of(Championship::with('sport')->where('created_by', $user->id)->select('championships.*'))
            ->setTransformer(new ChampionshipTransformer())
            ->make(true);
    }

    public function show($id)
    {
        try {
            $championship = $this->championshipRepository->find($id);

        } catch (ModelNotFoundException $e) {
            response()->make(trans('admin/championships/championships.not_found'), 404);
        }

        return $this->createItem($championship, new ChampionshipTransformer());
    }

    public function store(ChampionshipStoreRequest $request)
    {
        $data = $request->all();
        $subevents = collect($request->get('events'));
        $user = \Auth::user();
        $data['created_by'] = $user->id;
        DB::beginTransaction();
        try {
            $data['end_date'] = Carbon::parse($data['end_date']);
            $data['init_date'] = Carbon::parse($data['init_date']);
            $data['translation']['name'] = ['en' => $data['name'], 'es' => $data['name']];
            if (array_key_exists('description', $data)) {
                $data['translation']['description'] = ['en' => $data['description'], 'es' => $data['description']];
            }
            $data['slug'] = str_slug($data['name']);
            /** @var Championship $event */
            $event = $this->championshipRepository->create($data);
            if ($request->hasFile('image')) {
                $event->clearMediaCollection('poster');
                $event->addMedia($request->file('image'))->preservingOriginal()->toMediaLibrary('poster');
            } elseif ($request->has('removeImage')) {
                $event->clearMediaCollection('poster');
            }

            $subevents->each(function ($subevent) use ($event, $user) {
                $dataEvent = $subevent;
                $dataEvent['created_by'] = $user->id;
                $dataEvent['specialty_id'] = $dataEvent['specialty']['id'];
                $dataEvent['category_id'] = $dataEvent['category']['id'];
                $dataEvent['event_reach_id'] = $dataEvent['reach']['id'];
                $dataEvent['event_type_id'] = $dataEvent['type']['id'];
                $dataEvent['gender'] = $dataEvent['gender']['gender'];
                unset($dataEvent['id']);
                $dataEvent['name'] = ['en' => $dataEvent['name'], 'es' => $dataEvent['name']];
                if (array_key_exists('description', $dataEvent)) {
                    $dataEvent['description'] = ['en' => $dataEvent['description'], 'es' => $dataEvent['description']];
                }
                $dataEvent['end_date'] = Carbon::parse($dataEvent['end_date']);
                $dataEvent['init_date'] = Carbon::parse($dataEvent['init_date']);
                $event->events()->create($dataEvent);
            });


        } catch (Exception $e) {
            DB::rollBack();
            return response()->make($e->getMessage() . $e->getFile() . $e->getLine(), 404);
        }

        DB::commit();
        return response()->json(['message' => trans('admin/championships/championships.created_successfully')]);

    }

    public function update(ChampionshipUpdateRequest $request, $id)
    {
        $data = $request->all();
        $subevents = collect($request->get('events'));
        $user = \Auth::user();
        $data['created_by'] = $user->id;
        DB::beginTransaction();
        try {
            $data['end_date'] = Carbon::parse($data['end_date']);
            $data['init_date'] = Carbon::parse($data['init_date']);
            $data['translation']['name'] = ['en' => $data['name'], 'es' => $data['name']];
            if (array_key_exists('description', $data)) {
                $data['translation']['description'] = ['en' => $data['description'], 'es' => $data['description']];
            }
            $data['slug'] = str_slug($data['name']);
            /** @var Championship $event */
            $event = $this->championshipRepository->update($data, $id);
            if ($request->hasFile('image')) {
                $event->clearMediaCollection('poster');
                $event->addMedia($request->file('image'))->preservingOriginal()->toMediaLibrary('poster');
            } elseif ($request->has('removeImage')) {
                $event->clearMediaCollection('poster');
            }
            $event->events()->delete();
            $subevents->each(function ($subevent) use ($event, $user) {
                $dataEvent = $subevent;
                $dataEvent['created_by'] = $user->id;
                $dataEvent['specialty_id'] = $dataEvent['specialty']['id'];
                $dataEvent['category_id'] = $dataEvent['category']['id'];
                $dataEvent['event_reach_id'] = $dataEvent['reach']['id'];
                $dataEvent['event_type_id'] = $dataEvent['type']['id'];
                $dataEvent['gender'] = $dataEvent['gender']['gender'];
                unset($dataEvent['id']);
                $dataEvent['name'] = ['en' => $dataEvent['name'], 'es' => $dataEvent['name']];
                if (array_key_exists('description', $dataEvent)) {
                    $dataEvent['description'] = ['en' => $dataEvent['description'], 'es' => $dataEvent['description']];
                }
                $dataEvent['end_date'] = Carbon::parse($dataEvent['end_date']);
                $dataEvent['init_date'] = Carbon::parse($dataEvent['init_date']);
                /*
                 * TODO: falta verificar que los eventos no esten asociados a ningún scouting
                 */
                $event->events()->create($dataEvent);
            });


        } catch (Exception $e) {
            DB::rollBack();
            return response()->make($e->getMessage() . $e->getFile() . $e->getLine(), 404);
        }

        DB::commit();
        return response()->json(['message' => trans('admin/championships/championships.created_successfully')]);
    }

    public function destroy($id)
    {
        try {
            $championship = $this->championshipRepository->find($id);
            $championship->events()->delete();
            $championship->delete();
        } catch (ModelNotFoundException $e) {
            return response()->make(trans('admin/championships/championships.not_found'), 404);
        }

        return response()->json(['message' => trans('admin/championships/championships.deleted_succesfully')]);
    }

    public function events(Request $request, $id)
    {
        $isDatatable = $request->has('datatable');
        $events = collect([]);
        try {
            if ($id != 'null') {
                $championship = $this->championshipRepository->with(['events'])->find($id);
                $events = $championship->events;
            }
        } catch (ModelNotFoundException $e) {
            return response()->make(trans('admin/championships/championships.not_found'), 404);
        }

        if ($isDatatable) {
            return Datatables::of($this->eventRepository->datatableIn($events->pluck('id')->toArray()))
                ->setTransformer(new EventTransformer())
                ->make(true);
        }

        return $this->createCollection($events, new EventTransformer());
    }
}