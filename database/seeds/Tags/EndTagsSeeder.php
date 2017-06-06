<?php

use App\Scouting\Entities\Scoutings\Tag;
use Illuminate\Database\Seeder;

class EndTagsSeeder extends Seeder
{


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = collect([
            'options' => collect([
                [
                    'name'  => ['es' => '6ta', 'en' => '6th'],
                    'value' => 6
                ],
                [
                    'name'  => ['es' => '7ma', 'en' => '7th'],
                    'value' => 7
                ],
                [
                    'name'  => ['es' => '8va', 'en' => '8th'],
                    'value' => 8
                ],
                [
                    'name'  => ['es' => '9na', 'en' => '9th'],
                    'value' => 9
                ]
            ])
        ]);

        /** @var Tag $dbTag */
        $dbTag = Tag::where('abbr', 'END')->first();
        $dbTag->setTranslations('name', ['en' => 'Body Zone', 'es' => 'Zona del cuerpo']);
        $dbTag->save();
        $tags->each(function ($tag) use ($dbTag) {
            $tag->each(function ($option) use ($dbTag) {
                $dbTag->options()->create($option);
            });
        });
    }
}