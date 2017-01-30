<?php
namespace App\Http\Controllers\Api\Events;

use App\Http\Controllers\Controller;
use App\Http\Requests\Events\EventStoreRequest;
use App\Http\Requests\Events\EventUpdateRequest;
use App\Scouting\Entities\Events\EventReach;
use App\Scouting\Entities\Events\EventType;
use App\Scouting\Repositories\Contracts\Events\EventRepository;
use App\Scouting\Transformers\Athletes\AthleteTransformer;
use App\Scouting\Transformers\Events\EventReachTransformer;
use App\Scouting\Transformers\Events\EventTransformer;
use App\Scouting\Transformers\Events\EventTypeTransformer;
use Carbon\Carbon;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Yajra\Datatables\Facades\Datatables;

class EventsController extends Controller
{

    /**
     * @var EventRepository
     */
    private $eventRepository;

    public function __construct(EventRepository $eventRepository)
    {

        $this->eventRepository = $eventRepository;
    }

    public function index()
    {
        return Datatables::of($this->eventRepository->datatable())
            ->setTransformer(new EventTransformer())
            ->make(true);
    }

    public function show($id)
    {
        try {
            $athlete = $this->eventRepository->find($id);

        } catch (ModelNotFoundException $e) {
            return response()->make(trans('admin/events/events.not_found'), 404);
        }

        return $this->createItem($athlete, new EventTransformer());
    }

    public function store(EventStoreRequest $request)
    {
        $data = $request->all();
        try {
            $data['end_date'] = Carbon::parse($data['end_date']);
            $data['init_date'] = Carbon::parse($data['init_date']);
            $data['name'] = $request->get('translation')['name'];
            $data['description'] = $request->get('translation')['description'];
            $event = $this->eventRepository->create($data);
            if ($request->file('poster'))
                $event->addMedia($request->file('poster'))->preservingOriginal()->toCollection('poster');
        } catch (Exception $e) {
            return response()->make($e->getMessage() . $e->getFile() . $e->getLine(), 404);
        }

        return response()->json(['message' => trans('admin/events/events.created_successfully')]);

    }

    public function update(EventUpdateRequest $request, $id)
    {
        $data = $request->all();
        try {
            $data['end_date'] = Carbon::parse($data['end_date']);
            $data['init_date'] = Carbon::parse($data['init_date']);
            $data['name'] = $request->get('translation')['name'];
            $data['description'] = $request->get('translation')['description'];
            $event = $this->eventRepository->update($data, $id);
            if ($request->file('poster')) {
                if ($event->getMedia('poster')->count()) {
                    $event->getMedia('poster')->first()->delete();
                }
                $event->addMedia($request->file('poster'))->preservingOriginal()->toCollection('poster');
            }
        } catch (Exception $e) {
            return response()->make($e->getMessage() . $e->getFile() . $e->getLine(), 404);
        }

        return response()->json(['message' => trans('admin/events/events.updated_successfully')]);
    }

    public function destroy($id)
    {
        try {
            $this->eventRepository->delete($id);
        } catch (ModelNotFoundException $e) {
            return response()->make(trans('admin/events/events.not_found'), 404);
        }

        return response()->json(['message' => trans('admin/events/events.deleted_succesfully')]);
    }

    public function types()
    {
        $types = EventType::all();
        return $this->createCollection($types, new EventTypeTransformer());
    }

    public function reaches()
    {
        $reaches = EventReach::all();
        return $this->createCollection($reaches, new EventReachTransformer());
    }

    public function athletes($id)
    {
        $event = $this->eventRepository->with(['athletes'])->find($id);
        $athletes = $event->athletes;

        return $this->createCollection($athletes, new AthleteTransformer());
    }
}