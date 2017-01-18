<?php

use App\Scouting\Entities\Events\EventType;

$factory->define(EventType::class, function (Faker\Generator $faker) {
    return [
        'type' => ['es' => $faker->words(1, true), 'en' => $faker->words(1, true)],
    ];
});