<?php

use Kodeine\Acl\Models\Eloquent\Role;

$factory->define(Role::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name'        => $faker->name,
        'slug'        => $faker->slug(1),
        'description' => $faker->paragraphs(1, true),
    ];
});