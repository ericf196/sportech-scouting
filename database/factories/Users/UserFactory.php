<?php

use App\Scouting\Entities\Users\User;

$factory->define(User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'username'       => $faker->userName,
        'first_name'     => $faker->firstName,
        'last_name'      => $faker->lastName,
        'email'          => $faker->unique()->safeEmail,
        'password'       => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});