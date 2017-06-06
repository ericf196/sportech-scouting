<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CountriesSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(EventReachSeeder::class);
        $this->call(EventTypeSeeder::class);
        $this->call(SportsSeeder::class);
        $this->call(CategoriesSeeder::class);
        $this->call(SpecialtiesSeeder::class);
        $this->call(TagsSeeder::class);
        $this->call(ParryTagsSeeder::class);
        $this->call(EndTagsSeeder::class);

    }
}
