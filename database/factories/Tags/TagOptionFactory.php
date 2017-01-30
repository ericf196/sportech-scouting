<?php

use App\Scouting\Entities\Scoutings\TagOption;

$factory->define(TagOption::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name'  => ['es' => $faker->words(1, true), 'en' => $faker->words(1, true)],
        'value' => $faker->words(1, true)
    ];
});