<?php

use App\Scouting\Entities\Events\EventReach;

$factory->define(EventReach::class, function (Faker\Generator $faker) {

    return [
        'reach' => ['es' => $faker->words(1, true), 'en' => $faker->words(1, true)],
    ];
});