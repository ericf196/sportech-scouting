<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Kodeine\Acl\Models\Eloquent\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = collect([
            [
                'name'        => 'Administrator',
                'slug'        => 'admin',
                'description' => 'manage administration privileges'
            ],
            [
                'name'        => 'Scouter',
                'slug'        => 'scouter',
                'description' => 'manage scouter privileges'
            ],
            [
                'name'        => 'User',
                'slug'        => 'user',
                'description' => 'manage user privileges'
            ]
        ]);

        $roles->each(function ($role) {

            $roleDb = Role::where('slug', $role['slug'])->first();
            if (!$roleDb) {
                Role::create($role);
            }

        });


    }
}
