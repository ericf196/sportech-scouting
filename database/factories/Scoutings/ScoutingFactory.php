<?php

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Championships\Championship;
use App\Scouting\Entities\Events\Event;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Entities\Users\User;

$factory->define(Scouting::class, function (Faker\Generator $faker) {
    $scouter = factory(User::class)->create();
    $championship = Championship::first() ?: factory(Championship::class)->create();
    $event = Event::first() ?: factory(Event::class)->create();
    $athlete = factory(Athlete::class)->create();
    $athlete2 = factory(Athlete::class)->create();
    return [
        'name'             => ['es' => $faker->words(2, true), 'en' => $faker->words(2, true)],
        'description'      => ['es' => $faker->paragraphs(1, true), 'en' => $faker->paragraphs(1, true)],
        'video_src'        => $faker->url,
        'championship_id'  => $championship->id,
        'scouter_id'       => $scouter->id,
        'event_id'         => $event->id,
        'left_athlete_id'  => $athlete->id,
        'right_athlete_id' => $athlete2->id
    ];
});