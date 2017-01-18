<?php

use App\Scouting\Entities\Events\EventReach;
use Illuminate\Database\Seeder;

class EventReachSeeder extends Seeder
{
    public $eventReaches = [
        ['es' => 'Local', 'en' => 'Local'],
        ['es' => 'regional', 'en' => 'regional'],
        ['es' => 'Nacional', 'en' => 'National'],
        ['es' => 'Mundial', 'en' => 'World'],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->eventReaches as $eventReach) {
            $reach = new EventReach();
            $reach->reach = $eventReach;
            $reach->save();
        }
    }
}
