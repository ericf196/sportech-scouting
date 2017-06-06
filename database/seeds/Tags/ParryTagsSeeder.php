<?php

use App\Scouting\Entities\Scoutings\Tag;
use Illuminate\Database\Seeder;

class ParryTagsSeeder extends Seeder
{


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = collect([
            [
                'name'     => ['es' => 'Linea de Parry', 'en' => 'Parry Line'],
                'abbr'     => 'PRL',
                'dropdown' => true,
                'category' => ['es' => 'Defensivas', 'en' => 'Defensive'],
                'color'    => 'yellow',
                'options'  => collect([
                    [
                        'name'  => ['es' => '1era', 'en' => '1st'],
                        'value' => 1
                    ],
                    [
                        'name'  => ['es' => '2da', 'en' => '2nd'],
                        'value' => 2
                    ],
                    [
                        'name'  => ['es' => '3era', 'en' => '3rd'],
                        'value' => 3
                    ],
                    [
                        'name'  => ['es' => '4ta', 'en' => '4th'],
                        'value' => 4
                    ],
                    [
                        'name'  => ['es' => '5ta', 'en' => '5th'],
                        'value' => 5
                    ],
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
            ],
        ]);

        $tags->each(function ($tag) {
            $tagWithooutOptions = $tag;
            unset($tagWithooutOptions['options']);
            $dbTag = Tag::create($tagWithooutOptions);
            if ($tag['dropdown']) {
                $tag['options']->each(function ($option) use ($dbTag) {
                    $dbTag->options()->create($option);
                });
            }
        });


    }
}