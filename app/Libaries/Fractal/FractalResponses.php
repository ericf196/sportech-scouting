<?php
namespace App\Libaries\Fractal;

use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;

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