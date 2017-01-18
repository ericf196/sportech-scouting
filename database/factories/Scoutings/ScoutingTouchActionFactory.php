<?php

use App\Scouting\Entities\Scoutings\ScoutingTouchAction;

$factory->define(ScoutingTouchAction::class, function (Faker\Generator $faker) {
    return [
        'start'    => 0,
        'end'      => 10,
        'duration' => 10,
        'color'    => [
            "hsl"  => ["h" => 61.0762331838565, "s" => 1, "l" => 0.4372549019607843, "a" => 1],
            "hex"  => "#DBDF00",
            "rgba" => ["r" => 219, "g" => 223, "b" => 0, "a" => 1, "alpha" => 50],
            "hsv"  => ["h" => 61.0762331838565, "s" => 1, "v" => 0.8745098039215686, "a" => 1],
        ]
    ];
});