<?php
function loadAsset($path)
{
    if (env('APP_ENV') == 'production' || env('APP_ENV') == 'develop') {
        $pathArray = explode('/', $path);
        $file = array_pop($pathArray);
        array_push($pathArray, 'build');
        array_push($pathArray, $file);
        $path = url(implode('/', $pathArray));
        return env('APP_VERSIONING') ? elixir($path) : $path;
    } else {
        return url($path);
    }
}