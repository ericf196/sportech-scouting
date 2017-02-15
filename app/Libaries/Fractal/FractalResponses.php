<?php
namespace App\Libaries\Fractal;

use Illuminate\Pagination\LengthAwarePaginator;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use Illuminate\Support\Collection as LaravelCollection;

trait FractalResponses
{
    public function createItem($item, $callback, $resource_key = 'data', $meta = [], $includes = null)
    {
        $fractal = $this->configFractal($includes);
        $resource = new Item($item, $callback, $resource_key);
        $data = $fractal->createData($resource)->toArray();
        $response = array_merge($data, $meta);

        return $response;
    }

    public function createCollection($collection, $callback, $resource_key = 'data', $meta = [], $includes = null)
    {
        $fractal = $this->configFractal($includes);
        $resource = new Collection($collection, $callback, $resource_key);
        $data = $fractal->createData($resource)->toArray();
        $response = array_merge($data, $meta);

        return $response;
    }

    public function createPaginatedCollection(LengthAwarePaginator $collection, $callback, $resource_key = 'data', $meta = [], $includes = null)
    {
        $arrayList = [];

        $arrayList['paginate']['total'] = $collection->total();

        $arrayList['paginate']['count'] = $collection->count();

        $arrayList['paginate']['current_page'] = $collection->currentPage();

        $arrayList['paginate']['has_more_page'] = $collection->hasMorePages();

        $arrayList['paginate']['last_page'] = $collection->lastPage();

        $arrayList['paginate']['next_page_url'] = $collection->nextPageUrl();

        $arrayList['paginate']['per_page'] = $collection->perPage();

        $arrayList['paginate']['prev_page_url'] = $collection->previousPageUrl();

        $fractal = $this->configFractal($includes);
        $resource = new Collection($collection, $callback, $resource_key);
        $data = $fractal->createData($resource)->toArray();
        $response = array_merge($data, $meta, $arrayList);

        return $response;
    }

    public function configFractal($includes)
    {
        $fractal = new Manager();
        $fractal->setSerializer(new FractalSerializer());
        $include = \Request::get('include') ?: $includes;

        if (!is_null($include)) {
            $fractal->parseIncludes($include);
        }

        return $fractal;
    }
}