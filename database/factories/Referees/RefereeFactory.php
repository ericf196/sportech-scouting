<?php

use App\Scouting\Entities\Referees\Referee;

$factory->define(Referee::class, function (Faker\Generator $faker) {
    $country = Countries::first();
    $country = $country ?: factory(Countries::class)->create();

    return [
        'first_name'      => $faker->firstName,
        'last_name'       => $faker->lastName,
        'federation_code' => $faker->randomNumber(),
        'country_id'      => $country->id,
        'gender'          => $faker->randomElement(['M', 'F']),
        'birth_date'      => $faker->date()
    ];
});