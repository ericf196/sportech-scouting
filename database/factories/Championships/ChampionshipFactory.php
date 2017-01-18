<?php

use App\Scouting\Entities\Championships\Championship;
use App\Scouting\Entities\Locations\Location;
use App\Scouting\Entities\Sports\Sport;

$factory->define(Championship::class, function (Faker\Generator $faker) {

    $location = factory(Location::class)->create();
    $sport = Sport::first();
    $sport = $sport ?: factory(Sport::class)->create();

    return [
        'location_id' => $location->id,
        'sport_id'    => $sport->id,
        'name'        => ['es' => $faker->words(3, true), 'en' => $faker->words(3, true)],
        'description' => ['es' => $faker->paragraphs(1, true), 'en' => $faker->paragraphs(1, true)],
        'slug'        => $faker->slug(3),
        'init_date'   => $faker->dateTimeBetween('-30 days', '-10 days'),
        'end_date'    => $faker->dateTimeBetween('-10 days')
    ];
});