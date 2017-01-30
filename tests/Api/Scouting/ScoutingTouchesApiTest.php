<?php

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Entities\Scoutings\ScoutingTouch;
use App\Scouting\Entities\Scoutings\ScoutingTouchAction;
use App\Scouting\Entities\Scoutings\Tag;
use App\Scouting\Entities\Scoutings\TagOption;
use App\Scouting\Entities\Users\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ScoutingTouchesApiTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * @test
     */
    public function it_updates_an_scouting_with_touches_and_actions_with_tags()
    {
        $user = factory(User::class)->create();
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $scouting = factory(Scouting::class)->create(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);

        $touch = factory(ScoutingTouch::class)->make();
        $action = factory(ScoutingTouchAction::class)->make();
        $tagWithOptions = factory(Tag::class)->create(['dropdown' => true]);
        $tagWithOptions->options()->save(factory(TagOption::class)->create());
        $tagWithOptions->load('options');
        $tags = factory(Tag::class, 3)->create();

        $selectedTags = $tagWithOptions->toArray();
        $selectedTags['option'] = $selectedTags['options'][0];
        $selectedTags = array_merge([$selectedTags], $tags->toArray());

        $tagWithOptions2 = factory(Tag::class)->create(['dropdown' => true]);
        $tagWithOptions2->options()->save(factory(TagOption::class)->create());
        $tagWithOptions2->options()->save(factory(TagOption::class)->create());
        $tagWithOptions2->load('options');
        $tags2 = factory(Tag::class, 3)->create();

        $selectedTags2 = $tagWithOptions2->toArray();
        $selectedTags2['option'] = $selectedTags2['options'][1];
        $selectedTags2 = array_merge([$selectedTags2], $tags2->toArray(), [$selectedTags2]);
        $action = $action->toArray();
        $action['leftTags'] = $selectedTags;
        $action['rightTags'] = $selectedTags2;
        $touch = $touch->toArray();
        $touch['actions'] = [$action];
        $data = [
            'touches' => [$touch]
        ];

        $response = $this->put('api/scoutings/touches/' . $scouting->id . '?include=touches.actions.leftTags,touches.actions.rightTags', $data, $this->headers($user))
            ->assertResponseOk()
            ->seeJsonStructure([
                'data' => [
                    'touches' => [
                        '*' => [
                            'actions' => [
                                '*' => [
                                    'rightTags' => [
                                        '*' => [
                                            'name'
                                        ]
                                    ],
                                    'leftTags'  => [
                                        '*' => [
                                            'name'
                                        ]
                                    ],
                                ]
                            ]
                        ]
                    ]
                ]
            ]);

    }

    /**
     * @test
     */
    public function it_updates_an_scouting_with_touches_and_actions()
    {
        $user = factory(User::class)->create();
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $scouting = factory(Scouting::class)->create(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);

        $touch = factory(ScoutingTouch::class)->make();
        $action = factory(ScoutingTouchAction::class)->make();

        $action = $action->toArray();
        $action['leftTags'] = [];
        $action['rightTags'] = [];
        $touch = $touch->toArray();
        $touch['actions'] = [$action];
        $data = [
            'touches' => [$touch]
        ];

        $response = $this->put('api/scoutings/touches/' . $scouting->id . '?include=touches.actions.leftTags,touches.actions.rightTags', $data, $this->headers($user))
            ->assertResponseOk()
            ->seeJsonStructure([
                'data' => [
                    'touches' => [
                        '*' => [
                            'actions' => [
                                '*' => [
                                    'rightTags',
                                    'leftTags'
                                ]
                            ]
                        ]
                    ]
                ]
            ]);
    }

    /**
     * @test
     */
    public function it_updates_an_scouting_with_touches_and()
    {
        $user = factory(User::class)->create();
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $scouting = factory(Scouting::class)->create(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);

        $touch = factory(ScoutingTouch::class)->make();
        $touch = $touch->toArray();
        $touch['actions'] = [];
        $data = [
            'touches' => [$touch]
        ];

        $response = $this->put('api/scoutings/touches/' . $scouting->id . '?include=touches.actions.leftTags,touches.actions.rightTags', $data, $this->headers($user))
            ->assertResponseOk()
            ->seeJsonStructure([
                'data' => [
                    'touches' => [
                        '*' => [
                            'actions' => [
                                '*' => [
                                    'rightTags',
                                    'leftTags'
                                ]
                            ]
                        ]
                    ]
                ]
            ]);
    }


    /**
     * @test
     */
    public function it_return_a_validation_error_when_updating_an_scouting_with_invalid_data()
    {
        $user = factory(User::class)->create();

        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $scouting = factory(Scouting::class)->create(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);

        $data = [];
        $response = $this->put('api/scoutings/touches/' . $scouting->id, $data, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The touches field is required."]
            ]);

        $touch = factory(ScoutingTouch::class)->make();
        $touch = $touch->toArray();
        $touch['actions'] = [];
        $data = [
            'touches' => [$touch]
        ];
        $response = $this->put('api/scoutings/touches/444', $data, $this->headers())->assertResponseStatus(400)
            ->seeJson([
                "success" => false
            ]);
    }
}
