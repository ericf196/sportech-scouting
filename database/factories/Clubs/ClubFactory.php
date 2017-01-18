<?php

use App\Scouting\Entities\Clubs\Club;

$factory->define(Club::class, function (Faker\Generator $faker) {
    $sport = Sport::first();
    $sport = $sport ?: factory(Sport::class)->create();

    $country = Countries::first();
    $country = $country ?: factory(Countries::class)->create();
    return [
        'name'       => ['es' => $faker->words(2, true), 'en' => $faker->words(2, true)],
        'sport_id'   => $sport->id,
        'country_id' => $country->id
    ];
});