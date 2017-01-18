<?php

use App\Scouting\Entities\Sports\Category;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    public $categories = [
        array(
            'name' => ['es' => 'Infantil A', 'en' => 'Infant A'],
        ),
        array(
            'name' => ['es' => 'Infantil B', 'en' => 'Infant B'],
        ),
        array(
            'name' => ['es' => 'Cadete', 'en' => 'Cadet'],
        ),

        array(
            'name' => ['es' => 'Juvenil', 'en' => 'Junior'],
        ),

        array(
            'name' => ['es' => 'Adulto', 'en' => 'Adult'],
        ),

        array(
            'name' => ['es' => 'Senior', 'en' => 'Senior'],
        ),
        array(
            'name' => ['es' => 'Pre-Veterano', 'en' => 'Pre-Veteran'],
        ),
        array(
            'name' => ['es' => 'Veterano 1', 'en' => 'Veteran 1'],
        ),
        array(
            'name' => ['es' => 'Veterano 2', 'en' => 'Veteran 2'],
        ),
        array(
            'name' => ['es' => 'Infantil Y8', 'en' => 'Infant Y8'],
        ),
        array(
            'name' => ['es' => 'Infantil Y10', 'en' => 'Infant Y10'],
        ),
        array(
            'name' => ['es' => 'Infantil Y12', 'en' => 'Infant Y12'],
        ),
        array(
            'name' => ['es' => 'Infantil Y14', 'en' => 'Infant Y14'],
        ),

    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->categories as $category) {
            Category::create([
                'name'       => $category['name'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }

}
