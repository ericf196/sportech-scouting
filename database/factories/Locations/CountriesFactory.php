<?php

use Webpatser\Countries\Countries;

$factory->define(Countries::class, function (Faker\Generator $faker) {
    return [
        'capital'           => $faker->city,
        'citizenship'       => $faker->city,
        'country-code'      => $faker->countryCode,
        'currency'          => $faker->currencyCode,
        'currency_code'     => $faker->currencyCode,
        'currency_sub_unit' => '',
        'full_name'         => $faker->country,
        'iso_3166_2'        => $faker->countryCode,
        'iso_3166_3'        => $faker->countryISOAlpha3,
        'name'              => $faker->country,
        'region-code'       => '',
        'sub-region-code'   => '',
        'eea'               => '',
        'calling_code'      => '',
        'currency_symbol'   => '',
        'flag'              => $faker->countryCode . '.png'
    ];
});