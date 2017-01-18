<?php

use App\Scouting\Entities\Sports\Category;

$factory->define(Category::class, function (Faker\Generator $faker) {

    return [
        'name' => ['es' => $faker->name, 'en' => $faker->name],
    ];
});