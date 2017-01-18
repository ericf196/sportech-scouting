<?php

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Entities\Scoutings\ScoutingTouch;
use App\Scouting\Entities\Scoutings\ScoutingTouchAction;
use App\Scouting\Entities\Scoutings\Tag;
use App\Scouting\Entities\Scoutings\TagOption;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ScoutingApiTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * @test
     */
    public function it_return_a_listing_of_scouting()
    {
        $this->get('api/scouting', $this->headers())
            ->assertResponseOk()
            ->seeJsonStructure([
                'data',
                'draw',
                'recordsTotal',
                'recordsFiltered'
            ]);
    }

    /**
     * @test
     */
    public function it_return_an_specified_scouting()
    {
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $scouting = factory(Scouting::class)->create(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);

        $touch = factory(ScoutingTouch::class)->make();
        $touch = $scouting->scoutingTouches()->save($touch);
        $action = factory(ScoutingTouchAction::class)->make();
        $action = $touch->actions()->save($action);

        $this->get('api/scouting/' . $scouting->id . '?include=touches.actions.leftTags,touches.actions.rightTags', $this->headers())
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
    public function it_return_a_validation_error_when_creating_an_scouting_with_invalid_data()
    {

        $data = [
            'leftAthlete'  => 1,
            'rightAthlete' => 1,
            'name'         => 'scouting',
            'videoSrc'     => 'http://youtube.com',
        ];
        $data1 = $data;
        unset($data1['leftAthlete']);
        $response = $this->post('api/scouting', $data1, $this->headers())
            ->assertResponseStatus(422)
            ->seeJson([
                "leftAthlete" => [
                    0 => "The left athlete field is required."
                ]
            ]);

        $data1 = $data;
        unset($data1['rightAthlete']);
        $response = $this->post('api/scouting', $data1, $this->headers())
            ->assertResponseStatus(422)
            ->seeJson([
                "rightAthlete" => [
                    0 => "The right athlete field is required."
                ]
            ]);

        $data1 = $data;
        unset($data1['name']);
        $response = $this->post('api/scouting', $data1, $this->headers())
            ->assertResponseStatus(422)
            ->seeJson([
                "name" => [
                    0 => "The name field is required."
                ]
            ]);

        $data1 = $data;
        unset($data1['videoSrc']);
        $response = $this->post('api/scouting', $data1, $this->headers())
            ->assertResponseStatus(422)
            ->seeJson([
                "videoSrc" => [
                    0 => "The video src field is required."
                ]
            ]);
    }

    /**
     * @test
     */
    public function it_creates_an_scouting()
    {
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $scouting = factory(Scouting::class)->make();
        unset($scouting->description);
        $data = [
            'leftAthlete'  => $athlete->toArray(),
            'rightAthlete' => $athlete2->toArray(),
            'videoSrc'     => $scouting->video_src,
        ];

        $data = array_merge($scouting->toArray(), $data);
        $response = $this->post('api/scouting?include=leftAthlete,rightAthlete', $data, $this->headers())->assertResponseOk()
            ->seeJsonStructure([
                'data' => [
                    'name',
                    'description'
                ]
            ]);
    }

    /**
     * @test
     */
    public function it_update_an_scouting()
    {
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $dbScouting = factory(Scouting::class)->create(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $scouting = factory(Scouting::class)->make(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);

        $data = [
            'leftAthlete'  => $athlete->toArray(),
            'rightAthlete' => $athlete2->toArray(),
            'videoSrc'     => $scouting->video_src,
        ];

        $data = array_merge($scouting->toArray(), $data);
        $response = $this->put('api/scouting/' . $dbScouting->id . '?include=leftAthlete,rightAthlete', $data, $this->headers())
            ->assertResponseOk()
            ->seeJsonStructure([
                'data' => [
                    'name',
                    'description'
                ]
            ]);
    }

    /**
     * @test
     */
    public function it_return_a_validation_error_when_updating_an_scouting_with_invalid_data()
    {

        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $dbScouting = factory(Scouting::class)->create(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);

        $data = [
            'leftAthlete'  => $athlete->toArray(),
            'rightAthlete' => $athlete2->toArray(),
            'name'         => 'scouting',
            'videoSrc'     => 'http://youtube.com',
        ];
        $data1 = $data;
        unset($data1['leftAthlete']);
        $response = $this->put('api/scouting/' . $dbScouting->id, $data1, $this->headers())
            ->assertResponseStatus(422)
            ->seeJson([
                "leftAthlete" => [
                    0 => "The left athlete field is required."
                ]
            ]);

        $data1 = $data;
        unset($data1['rightAthlete']);
        $response = $this->put('api/scouting/' . $dbScouting->id, $data1, $this->headers())
            ->assertResponseStatus(422)
            ->seeJson([
                "rightAthlete" => [
                    0 => "The right athlete field is required."
                ]
            ]);

        $data1 = $data;
        unset($data1['name']);
        $response = $this->put('api/scouting/' . $dbScouting->id, $data1, $this->headers())
            ->assertResponseStatus(422)
            ->seeJson([
                "name" => [
                    0 => "The name field is required."
                ]
            ]);

        $data1 = $data;
        unset($data1['videoSrc']);
        $response = $this->put('api/scouting/' . $dbScouting->id, $data1, $this->headers())
            ->assertResponseStatus(422)
            ->seeJson([
                "videoSrc" => [
                    0 => "The video src field is required."
                ]
            ]);

        $data1 = $data;
        $response = $this->put('api/scouting/444', $data1, $this->headers())->assertResponseStatus(400)
            ->seeJson([
                "success" => false
            ]);
    }
}
