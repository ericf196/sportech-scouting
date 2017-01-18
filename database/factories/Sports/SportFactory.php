<?php

use App\Scouting\Entities\Sports\Sport;

$factory->define(Sport::class, function (Faker\Generator $faker) {
    return [
        'name' => ['es' => $faker->name, 'en' => $faker->name],
    ];
});