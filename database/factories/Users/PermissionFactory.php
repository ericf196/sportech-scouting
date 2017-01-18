<?php

use Kodeine\Acl\Models\Eloquent\Permission;

$factory->define(Permission::class, function (Faker\Generator $faker) {
    return [
        'name' => 'admin-roles',
        'slug' => ["ver" => true]
    ];
});