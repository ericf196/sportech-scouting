<?php

use App\Scouting\Entities\Locations\Location;
use Webpatser\Countries\Countries;

$factory->define(Location::class, function (Faker\Generator $faker) {
    $country = Countries::first();
    $country = $country ?: factory(Countries::class)->create();
    return [
        'latitude'   => $faker->latitude,
        'longitude'  => $faker->longitude,
        'country_id' => $country->id,
        'state'      => $faker->city,
        'city'       => $faker->city,
        'address'    => $faker->address,
        'zip'        => $faker->postcode
    ];
});