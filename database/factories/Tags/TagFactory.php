<?php

use App\Scouting\Entities\Scoutings\Tag;

$factory->define(Tag::class, function (Faker\Generator $faker) {

    return [
        'name'     => ['es' => $faker->words(1, true), 'en' => $faker->words(1, true)],
        'abbr'     => $faker->words(1, true),
        'dropdown' => false,
        'category' => ['es' => $faker->words(1, true), 'en' => $faker->words(1, true)]
    ];
});