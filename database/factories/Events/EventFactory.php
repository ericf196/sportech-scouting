<?php

use App\Scouting\Entities\Championships\Championship;
use App\Scouting\Entities\Events\Event;
use App\Scouting\Entities\Events\EventReach;
use App\Scouting\Entities\Events\EventType;
use App\Scouting\Entities\Sports\Category;
use App\Scouting\Entities\Sports\Specialty;
use App\Scouting\Entities\Sports\Sport;

$factory->define(Event::class, function (Faker\Generator $faker) {

    $championship = Championship::first();
    $championship = $championship ?: factory(Championship::class)->create();
    $specialty = Specialty::first();
    if (!$specialty) {
        $sport = Sport::first();
        $specialty = factory(Specialty::class)->create(['sport_id' => $sport->id]);
    }
    $category = Category::first();
    $category = $category ?: factory(Category::class)->create();

    $eventType = factory(EventType::class)->create();
    $eventReach = factory(EventReach::class)->create();

    return [
        'championship_id' => $championship->id,
        'category_id'     => $category->id,
        'specialty_id'    => $specialty->id,
        'event_type_id'   => $eventType->id,
        'event_reach_id'  => $eventReach->id,
        'name'            => ['es' => $faker->words(2, true), 'en' => $faker->words(2, true)],
        'description'     => ['es' => $faker->paragraphs(1, true), 'en' => $faker->paragraphs(1, true)],
        'slug'            => $faker->slug(6),
        'gender'          => $faker->randomElement(['M', 'F']),
        'init_date'       => $championship->init_date,
        'end_date'        => $championship->end_date,
    ];
});