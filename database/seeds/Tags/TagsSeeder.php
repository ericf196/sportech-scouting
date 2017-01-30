<?php

use App\Scouting\Entities\Scoutings\Tag;
use Illuminate\Database\Seeder;

class TagsSeeder extends Seeder
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
                'name'     => ['es' => 'Ataque', 'en' => 'Attack'],
                'abbr'     => 'ATC',
                'dropdown' => true,
                'category' => ['es' => 'Ofensivas', 'en' => 'Offensive'],
                'color'    => 'green',
                'options'  => collect([
                    [
                        'name'  => ['es' => 'Simple Directo', 'en' => 'Simple Direct'],
                        'value' => 'SD'
                    ],
                    [
                        'name'  => ['es' => 'Simple Indirecto', 'en' => 'Simple Indirect'],
                        'value' => 'SI'
                    ],
                    [
                        'name'  => ['es' => 'Compuesto', 'en' => 'Compound'],
                        'value' => 'CP'
                    ],
                    [
                        'name'  => ['es' => 'Al Hierro', 'en' => 'Along the blade'],
                        'value' => 'AB'
                    ],
                ])
            ],
            [
                'name'     => ['es' => 'Respuesta', 'en' => 'Response'],
                'abbr'     => 'RPS',
                'dropdown' => true,
                'category' => ['es' => 'Ofensivas', 'en' => 'Offensive'],
                'color'    => 'green',
                'options'  => collect([
                    [
                        'name'  => ['es' => 'Simple Directo', 'en' => 'Simple Direct'],
                        'value' => 'SD'
                    ],
                    [
                        'name'  => ['es' => 'Simple Indirecto', 'en' => 'Simple Indirect'],
                        'value' => 'SI'
                    ],
                    [
                        'name'  => ['es' => 'Compuesto', 'en' => 'Compound'],
                        'value' => 'CP'
                    ],
                    [
                        'name'  => ['es' => 'Al Hierro', 'en' => 'Along the blade'],
                        'value' => 'AB'
                    ],
                ])
            ],
            [
                'name'     => ['es' => 'Contrarespuesta', 'en' => 'Counter Response'],
                'abbr'     => 'CRS',
                'dropdown' => true,
                'category' => ['es' => 'Ofensivas', 'en' => 'Offensive'],
                'color'    => 'green',
                'options'  => collect([
                    [
                        'name'  => ['es' => 'Simple Directo', 'en' => 'Simple Direct'],
                        'value' => 'SD'
                    ],
                    [
                        'name'  => ['es' => 'Simple Indirecto', 'en' => 'Simple Indirect'],
                        'value' => 'SI'
                    ],
                    [
                        'name'  => ['es' => 'Compuesto', 'en' => 'Compound'],
                        'value' => 'CP'
                    ],
                    [
                        'name'  => ['es' => 'Al Hierro', 'en' => 'Along the blade'],
                        'value' => 'AB'
                    ],
                ])
            ],
            [
                'name'     => ['es' => 'Continuación', 'en' => 'Continuation'],
                'abbr'     => 'CTN',
                'dropdown' => true,
                'category' => ['es' => 'Ofensivas', 'en' => 'Offensive'],
                'color'    => 'green',
                'options'  => collect([
                    [
                        'name'  => ['es' => 'Reposición (Remise)', 'en' => 'Remise'],
                        'value' => 'RM'
                    ],
                    [
                        'name'  => ['es' => 'Redoble (Redoublement)', 'en' => 'Redoublement'],
                        'value' => 'RD'
                    ],
                    [
                        'name'  => ['es' => 'Reanudación de ataque (Reprise)', 'en' => 'Reprise'],
                        'value' => 'RP'
                    ]
                ])
            ],
            [
                'name'     => ['es' => 'Contratiempo', 'en' => 'Counter-time'],
                'abbr'     => 'CTP',
                'dropdown' => false,
                'category' => ['es' => 'Ofensivas', 'en' => 'Offensive'],
                'color'    => 'green',
            ],
            [
                'name'     => ['es' => 'Parada', 'en' => 'Parry'],
                'abbr'     => 'PRY',
                'dropdown' => true,
                'category' => ['es' => 'Defensivas', 'en' => 'Defensive'],
                'color'    => 'yellow',
                'options'  => collect([
                    [
                        'name'  => ['es' => 'Simple', 'en' => 'Simple'],
                        'value' => 'SP'
                    ],
                    [
                        'name'  => ['es' => 'Circular', 'en' => 'Circular'],
                        'value' => 'CC'
                    ]
                ])
            ],
            [
                'name'     => ['es' => 'Contraataque', 'en' => 'Counterattack'],
                'abbr'     => 'CAT',
                'dropdown' => false,
                'category' => ['es' => 'Contraofensivas', 'en' => 'Counter-offensive'],
                'color'    => 'red',

            ],
            [
                'name'     => ['es' => 'Arresto', 'en' => 'Stop Hit'],
                'abbr'     => 'ART',
                'dropdown' => false,
                'category' => ['es' => 'Contraofensivas', 'en' => 'Counter-offensive'],
                'color'    => 'red',

            ],
            [
                'name'     => ['es' => 'Arresto por oposición', 'en' => 'Stop Hit Made With Opposition'],
                'abbr'     => 'ARP',
                'dropdown' => false,
                'category' => ['es' => 'Contraofensivas', 'en' => 'Counter-offensive'],
                'color'    => 'red',

            ],
            [
                'name'     => ['es' => 'Desaparición', 'en' => 'Disappearance'],
                'abbr'     => 'DSP',
                'dropdown' => true,
                'category' => ['es' => 'Contraofensivas', 'en' => 'Counter-offensive'],
                'color'    => 'red',
                'options'  => collect([
                    [
                        'name'  => ['es' => 'Cabeza', 'en' => 'Head'],
                        'value' => 'HD'
                    ],
                    [
                        'name'  => ['es' => 'Espalda', 'en' => 'Back'],
                        'value' => 'BC'
                    ],
                    [
                        'name'  => ['es' => 'Pecho', 'en' => 'Chest'],
                        'value' => 'CH'
                    ]
                ])
            ],
            [
                'name'     => ['es' => 'Cierre', 'en' => 'Close'],
                'abbr'     => 'CLS',
                'dropdown' => false,
                'category' => ['es' => 'Contraofensivas', 'en' => 'Counter-offensive'],
                'color'    => 'red',

            ],
            [
                'name'     => ['es' => 'Con Parada', 'en' => 'With Parry'],
                'abbr'     => 'CPY',
                'dropdown' => false,
                'category' => ['es' => 'Contratiempo', 'en' => 'Counter-time'],
                'color'    => 'purple',

            ],
            [
                'name'     => ['es' => 'Con Contraataque', 'en' => 'With Counter-attack'],
                'abbr'     => 'CCT',
                'dropdown' => false,
                'category' => ['es' => 'Contratiempo', 'en' => 'Counter-time'],
                'color'    => 'purple',
            ],
            [
                'name'     => ['es' => 'Punta en Linea', 'en' => 'Point in Line'],
                'abbr'     => 'PLN',
                'dropdown' => false,
                'category' => ['es' => 'Punta en Linea', 'en' => 'Punta in Line'],
                'color'    => 'light-blue',
            ],
            [
                'name'     => ['es' => 'Finalización', 'en' => 'Ending'],
                'abbr'     => 'END',
                'dropdown' => true,
                'category' => ['es' => 'General', 'en' => 'General'],
                'color'    => 'aqua',
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
                ])
            ],
            [
                'name'     => ['es' => 'Punto', 'en' => 'Point'],
                'abbr'     => 'PNT',
                'dropdown' => false,
                'category' => ['es' => 'General', 'en' => 'General'],
                'color'    => 'aqua',
            ],
            [
                'name'     => ['es' => 'Toque', 'en' => 'Touch'],
                'abbr'     => 'TOC',
                'dropdown' => true,
                'category' => ['es' => 'General', 'en' => 'General'],
                'color'    => 'aqua',
                'options'  => collect([
                    [
                        'name'  => ['es' => 'Valido', 'en' => 'Valid'],
                        'value' => 'VL'
                    ],
                    [
                        'name'  => ['es' => 'No Valido', 'en' => 'No Valid'],
                        'value' => 'NL'
                    ],
                    [
                        'name'  => ['es' => 'No Toque', 'en' => 'No Touch'],
                        'value' => 'NT'
                    ],
                    [
                        'name'  => ['es' => 'Parada', 'en' => 'Parry'],
                        'value' => 'PR'
                    ]
                ])
            ]
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