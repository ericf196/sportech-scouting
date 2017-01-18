<?php
use App\Scouting\Entities\Users\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Kodeine\Acl\Models\Eloquent\Role;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'first_name' => 'admin',
            'last_name'  => 'admin',
            'username'   => 'admin',
            'email'      => 'admin@admin.com',
            'password'   => bcrypt('password'),
        ]);

        $roleAdmin = Role::where('slug', 'admin')->first();
        if ($roleAdmin) {
            $user->assignRole($roleAdmin);
        }
    }
}
