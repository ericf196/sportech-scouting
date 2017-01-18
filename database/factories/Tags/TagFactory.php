<?php

use App\Scouting\Entities\Scoutings\Tag;

$factory->define(Tag::class, function (Faker\Generator $faker) {

    return [
        'name'     => $faker->name,
        'abbr'     => $faker->words(1, true),
        'dropdown' => false
    ];
});