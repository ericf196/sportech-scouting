<?php

use App\Scouting\Entities\Sports\Specialty;

$factory->define(Specialty::class, function (Faker\Generator $faker) {

    return [
        'name' => ['es' => $faker->name, 'en' => $faker->name]
    ];
});