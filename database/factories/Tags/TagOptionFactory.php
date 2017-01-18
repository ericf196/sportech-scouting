<?php

use App\Scouting\Entities\Scoutings\TagOption;

$factory->define(TagOption::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name'  => $faker->name,
        'value' => $faker->words(1, true)
    ];
});