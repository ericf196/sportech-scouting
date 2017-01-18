<?php

use App\Scouting\Entities\Sports\Sport;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SportsSeeder extends Seeder
{
    public $sports = [
        array(['es' => 'Esgrima', 'en' => 'Fencing'], ['es' => '', 'en' => '']),
        array(['es' => 'Bádminton', 'en' => 'Badminton'], ['es' => '', 'en' => '']),
        array(['es' => 'Voleibol', 'en' => 'Volleyball'], ['es' => '', 'en' => '']),
        array(['es' => 'Beisbol', 'en' => 'Baseball'], ['es' => '', 'en' => '']),
        array(['es' => 'Baloncesto', 'en' => 'Basketball'], ['es' => '', 'en' => '']),
        array(['es' => 'Lucha', 'en' => 'Wrestling'], ['es' => '', 'en' => '']),
        array(['es' => 'Halterofilia', 'en' => 'Weightlifting'], ['es' => '', 'en' => '']),
        array(['es' => 'Waterpolo', 'en' => 'Waterpolo'], ['es' => '', 'en' => '']),
        array(['es' => 'Balonmano', 'en' => 'Handball'], ['es' => '', 'en' => '']),
        array(['es' => 'Judo', 'en' => 'Judo'], ['es' => '', 'en' => '']),
        array(['es' => 'Taekwondo', 'en' => 'Taekwondo'], ['es' => '', 'en' => '']),
        array(['es' => 'Karate', 'en' => 'Karate'], ['es' => '', 'en' => '']),
        array(['es' => 'Piragüismo', 'en' => 'Canoeing'], ['es' => '', 'en' => '']),
        array(['es' => 'Padel', 'en' => 'Paddle'], ['es' => '', 'en' => '']),
        array(['es' => 'Futbol', 'en' => 'Football'], ['es' => '', 'en' => ''])
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->sports as $sport) {
            Sport::create([
                'name'       => $sport[0],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
