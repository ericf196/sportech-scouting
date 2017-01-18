<?php

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Sports\Category;
use App\Scouting\Entities\Sports\Specialty;
use App\Scouting\Entities\Sports\Sport;
use Webpatser\Countries\Countries;

$factory->define(Athlete::class, function (Faker\Generator $faker) {

    $sport = factory(Sport::class)->create();
    $specialty = factory(Specialty::class)->create(['sport_id' => $sport->id]);
    $category = factory(Category::class)->create();
    $country = factory(Countries::class)->create();
    return [
        'first_name'      => $faker->firstName,
        'last_name'       => $faker->lastName,
        'sport_id'        => $sport->id,
        'specialty_id'    => $specialty->id,
        'category_id'     => $category->id,
        'country_id'      => $country->id,
        'alias'           => $faker->userName,
        'gender'          => $faker->randomElement(['M', 'F']),
        'professional'    => $faker->boolean(),
        'ranking'         => $faker->numberBetween(1, 1000),
        'height'          => $faker->numberBetween(150, 210),
        'weight'          => $faker->numberBetween(50, 100),
        'active'          => $faker->boolean(),
        'federation_code' => $faker->randomNumber(),
        'national_code'   => $faker->randomNumber()
    ];
});