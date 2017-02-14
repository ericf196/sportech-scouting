<?php
function loadAsset($path)
{
    if (env('APP_ENV') == 'production' || env('APP_ENV') == 'develop') {
        $pathArray = explode('/', $path);
        $file = array_pop($pathArray);
        array_push($pathArray, 'build');
        array_push($pathArray, $file);
        $path = implode('/', $pathArray);
        return env('APP_VERSIONING') ? elixir($path) : $path;
    } else {
        return $path;
    }
}

function ordinal($number)
{
    $ends = array('th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th');
    if ((($number % 100) >= 11) && (($number % 100) <= 13))
        return $number . 'th';
    else
        return $number . $ends[$number % 10];
}

function toHHMMSS($init)
{
    $h = floor($init / 3600);
    return $h ? gmdate('H:i:s', $init) : gmdate('i:s', $init);

}