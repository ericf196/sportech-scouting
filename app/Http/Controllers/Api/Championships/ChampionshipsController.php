<?php
namespace App\Http\Controllers\Api\Championships;

use App\Http\Controllers\Controller;
use App\Http\Requests\Championship\ChampionshipStoreRequest;
use App\Http\Requests\Championship\ChampionshipUpdateRequest;
use App\Scouting\Repositories\Contracts\Athletes\AthleteRepository;
use App\Scouting\Repositories\Contracts\Championships\ChampionshipRepository;
use App\Scouting\Repositories\Contracts\Events\EventRepository;
use App\Scouting\Transformers\Championships\ChampionshipTransformer;
use App\Scouting\Transformers\Events\EventTransformer;
use Carbon\Carbon;
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
        return Datatables::of($this->championshipRepository->datatable())
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
        try {
            $data['end_date'] = Carbon::parse($data['end_date']);
            $data['init_date'] = Carbon::parse($data['init_date']);
            $data['name'] = $request->get('translation')['name'];
            $data['name']['es'] = $data['name']['en'];
            $data['description'] = $request->get('translation')['description'];
            $data['description']['es'] = $data['description']['en'];
            $data['slug'] = str_slug($data['name']['en']);
            $event = $this->championshipRepository->create($data);
            if ($request->file('poster'))
                $event->addMedia($request->file('poster'))->preservingOriginal()->toCollection('poster');
        } catch (Exception $e) {
            return response()->make($e->getMessage() . $e->getFile() . $e->getLine(), 404);
        }

        return response()->json(['message' => trans('admin/championships/championships.created_successfully')]);

    }

    public function update(ChampionshipUpdateRequest $request, $id)
    {
        $data = $request->all();
        try {
            $data['end_date'] = Carbon::parse($data['end_date']);
            $data['init_date'] = Carbon::parse($data['init_date']);
            $data['name'] = $request->get('translation')['name'];
            $data['name']['es'] = $data['name']['en'];
            $data['description'] = $request->get('translation')['description'];
            $data['description']['es'] = $data['description']['en'];
            $data['slug'] = str_slug($data['name']['en']);
            $event = $this->championshipRepository->update($data, $id);
            if ($request->file('poster')) {
                if ($event->getMedia('poster')->count()) {
                    $event->getMedia('poster')->first()->delete();
                }
                $event->addMedia($request->file('poster'))->preservingOriginal()->toCollection('poster');
            }
        } catch (Exception $e) {
            return response()->make($e->getMessage() . $e->getFile() . $e->getLine(), 404);
        }

        return response()->json(['message' => trans('admin/championships/championships.updated_successfully')]);
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