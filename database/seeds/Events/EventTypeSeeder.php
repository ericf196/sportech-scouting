<?php

use App\Scouting\Entities\Events\EventType;
use Illuminate\Database\Seeder;

class EventTypeSeeder extends Seeder
{
    public $eventTypes = [
        ['es' => 'Individual', 'en' => 'Individual'],
        ['es' => 'Por Equipo', 'en' => 'Team']
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->eventTypes as $eventType) {
            EventType::create([
                'type' => $eventType,
            ]);
        }
    }
}
