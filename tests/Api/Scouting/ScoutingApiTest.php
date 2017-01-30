<?php

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Championships\Championship;
use App\Scouting\Entities\Events\Event;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Entities\Scoutings\ScoutingTouch;
use App\Scouting\Entities\Scoutings\ScoutingTouchAction;
use App\Scouting\Entities\Sports\Category;
use App\Scouting\Entities\Sports\Specialty;
use App\Scouting\Entities\Sports\Sport;
use App\Scouting\Entities\Users\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Webpatser\Countries\Countries;

class ScoutingApiTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * @test
     */
    public function it_return_a_listing_of_scouting()
    {
        $user = factory(User::class)->create();
        $this->get('api/scoutings', $this->headers($user))
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
        $user = factory(User::class)->create();
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $scouting = factory(Scouting::class)->create(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);

        $touch = factory(ScoutingTouch::class)->make();
        $touch = $scouting->scoutingTouches()->save($touch);
        $action = factory(ScoutingTouchAction::class)->make();
        $action = $touch->actions()->save($action);

        $this->get('api/scoutings/' . $scouting->id . '?include=touches.actions.leftTags,touches.actions.rightTags', $this->headers($user))
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
        $user = factory(User::class)->create();

        $data = [
            'championship' => 1,
            'event'        => 1,
            'leftAthlete'  => 1,
            'rightAthlete' => 1,
            'translation'  => ['name' => 'scouting'],
            'videoSrc'     => 'http://youtube.com',
        ];
        $data1 = $data;
        unset($data1['leftAthlete']);
        $response = $this->post('api/scoutings', $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The left athlete field is required."]
            ]);

        $data1 = $data;
        unset($data1['rightAthlete']);
        $response = $this->post('api/scoutings', $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The right athlete field is required."]
            ]);

        $data1 = $data;
        unset($data1['translation']);
        $response = $this->post('api/scoutings', $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The translation.name field is required."]
            ]);

        $data1 = $data;
        unset($data1['videoSrc']);
        $response = $this->post('api/scoutings', $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The video src field is required."]
            ]);

        $data1 = $data;
        unset($data1['championship']);
        $response = $this->post('api/scoutings', $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The championship field is required."]
            ]);

        $data1 = $data;
        unset($data1['event']);
        $response = $this->post('api/scoutings', $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The event field is required."]
            ]);
    }

    /**
     * @test
     */
    public function it_creates_an_scouting()
    {
        $user = factory(User::class)->create();
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $scouting = factory(Scouting::class)->make();
        $championship = factory(Championship::class)->create();
        $event = factory(Event::class)->create();
        unset($scouting->description);
        $data = [
            'championship' => $championship->toArray(),
            'event'        => $event->toArray(),
            'leftAthlete'  => $athlete->toArray(),
            'rightAthlete' => $athlete2->toArray(),
            'videoSrc'     => $scouting->video_src,
            'translation'  => ['name' => ['es' => $scouting->name, 'en' => $scouting->name]]
        ];

        $data = array_merge($scouting->toArray(), $data);
        $response = $this->post('api/scoutings?include=leftAthlete,rightAthlete', $data, $this->headers($user))->assertResponseOk()
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
    public function it_creates_an_scouting_championship_event_and_athletes()
    {
        $user = factory(User::class)->create();
        $athlete = factory(Athlete::class)->make();
        $athlete2 = factory(Athlete::class)->make();
        $scouting = factory(Scouting::class)->make();
        $championship = factory(Championship::class)->make();
        $event = factory(Event::class)->make();
        unset($scouting->description);
        $sport = factory(Sport::class)->create();
        $category = factory(Category::class)->create();
        $specialty = factory(Specialty::class)->create(['sport_id' => $sport->id]);
        $country = factory(Countries::class)->create();

        $championshipData = $championship->toArray();
        $championshipData['sport'] = ['id' => $sport->id];
        $championshipData['translation']['name'] = $championship->getTranslations('name');

        $eventData = $event->toArray();
        $eventData['specialty'] = ['id' => $specialty->id];
        $eventData['category'] = ['id' => $category->id];
        $eventData['translation']['name'] = $event->getTranslations('name');

        $athleteData = $athlete->toArray();
        $athlete2Data = $athlete2->toArray();

        $athleteData['gender'] = ['gender' => $athlete->gender];
        $athlete2Data['gender'] = ['gender' => $athlete2->gender];
        $athlete2Data['country'] = ['id' => $country->id];
        $athleteData['country'] = ['id' => $country->id];

        $data = [
            'championship' => $championshipData,
            'event'        => $eventData,
            'leftAthlete'  => $athleteData,
            'rightAthlete' => $athlete2Data,
            'videoSrc'     => $scouting->video_src,
            'translation'  => ['name' => ['es' => $scouting->name, 'en' => $scouting->name]]
        ];

        $data = array_merge($scouting->toArray(), $data);
        $response = $this->post('api/scoutings?include=leftAthlete,rightAthlete', $data, $this->headers($user))
            ->assertResponseOk()
            ->seeJsonStructure([
                'data' => [
                    'name',
                    'description'
                ]
            ]);
        $this->seeInDatabase('championships', ['slug' => str_slug($championship->getTranslations('name')['en'])]);
        $this->seeInDatabase('events', ['slug' => str_slug($event->getTranslations('name')['en'])]);
        $this->seeInDatabase('athletes', ['first_name' => $athlete['first_name']]);
        $this->seeInDatabase('athletes', ['first_name' => $athlete2['first_name']]);
    }

    /**
     * @test
     */
    public function it_update_an_scouting()
    {
        $user = factory(User::class)->create();
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $championship = factory(Championship::class)->create();
        $event = factory(Event::class)->create();
        $dbScouting = factory(Scouting::class)->create(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id, 'championship_id' => $championship->id, 'event_id' => $event->id]);
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $scouting = factory(Scouting::class)->make();
        $championship = factory(Championship::class)->create();
        $event = factory(Event::class)->create();
        $data = [
            'championship' => $championship->toArray(),
            'event'        => $event->toArray(),
            'leftAthlete'  => $athlete->toArray(),
            'rightAthlete' => $athlete2->toArray(),
            'videoSrc'     => $scouting->video_src,
            'translation'  => ['name' => ['es' => $scouting->name, 'en' => $scouting->name]]
        ];

        $data = array_merge($scouting->toArray(), $data);
        $response = $this->put('api/scoutings/' . $dbScouting->id . '?include=leftAthlete,rightAthlete', $data, $this->headers($user))
            ->assertResponseOk()
            ->seeJsonStructure([
                'data' => [
                    'name',
                    'description'
                ]
            ]);
        $this->seeInDatabase('scoutings', ['id' => $dbScouting->id, 'championship_id' => $championship->id]);

    }

    public function it_updates_an_scouting_championship_event_and_athletes()
    {
        $user = factory(User::class)->create();
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $dbScouting = factory(Scouting::class)->create(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);
        $athlete = factory(Athlete::class)->make();
        $athlete2 = factory(Athlete::class)->make();
        $scouting = factory(Scouting::class)->make(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);
        $championship = factory(Championship::class)->make();
        $event = factory(Event::class)->make();
        $data = [
            'championship' => $championship->toArray(),
            'event'        => $event->toArray(),
            'leftAthlete'  => $athlete->toArray(),
            'rightAthlete' => $athlete2->toArray(),
            'videoSrc'     => $scouting->video_src,
            'translation'  => ['name' => ['es' => $scouting->name, 'en' => $scouting->name]]
        ];

        $data = array_merge($scouting->toArray(), $data);
        $response = $this->put('api/scoutings/' . $dbScouting->id . '?include=leftAthlete,rightAthlete', $data, $this->headers($user))
            ->assertResponseOk()
            ->seeJsonStructure([
                'data' => [
                    'name',
                    'description'
                ]
            ]);
        $this->seeInDatabase('scoutings', ['id' => $dbScouting->id, 'championship_id' => $championship->id]);
        $this->seeInDatabase('championships', ['slug' => $championship['slug']]);
        $this->seeInDatabase('events', ['slug' => $event['slug']]);
        $this->seeInDatabase('athletes', ['first_name' => $athlete['first_name']]);
        $this->seeInDatabase('athletes', ['first_name' => $athlete2['first_name']]);
    }

    /**
     * @test
     */
    public function it_return_a_validation_error_when_updating_an_scouting_with_invalid_data()
    {
        $user = factory(User::class)->create();
        $athlete = factory(Athlete::class)->create();
        $athlete2 = factory(Athlete::class)->create();
        $dbScouting = factory(Scouting::class)->create(['left_athlete_id' => $athlete->id, 'right_athlete_id' => $athlete2->id]);
        $championship = factory(Championship::class)->create();
        $event = factory(Event::class)->create();
        $data = [
            'championship' => $championship->toArray(),
            'event'        => $event->toArray(),
            'leftAthlete'  => $athlete->toArray(),
            'rightAthlete' => $athlete2->toArray(),
            'videoSrc'     => 'http://youtube.com',
            'translation'  => ['name' => ['es' => $dbScouting->name, 'en' => $dbScouting->name]]
        ];
        $data1 = $data;
        unset($data1['leftAthlete']);
        $response = $this->put('api/scoutings/' . $dbScouting->id, $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The left athlete field is required."]
            ]);

        $data1 = $data;
        unset($data1['rightAthlete']);
        $response = $this->put('api/scoutings/' . $dbScouting->id, $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The right athlete field is required."]
            ]);

        $data1 = $data;
        unset($data1['translation']);
        $response = $this->put('api/scoutings/' . $dbScouting->id, $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The translation.name field is required."]
            ]);

        $data1 = $data;
        unset($data1['videoSrc']);
        $response = $this->put('api/scoutings/' . $dbScouting->id, $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The video src field is required."]
            ]);
        $data1 = $data;
        unset($data1['championship']);
        $response = $this->put('api/scoutings/' . $dbScouting->id, $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The championship field is required."]
            ]);
        $data1 = $data;
        unset($data1['event']);
        $response = $this->put('api/scoutings/' . $dbScouting->id, $data1, $this->headers($user))
            ->assertResponseStatus(422)
            ->seeJsonContains([
                "errors" => ["The event field is required."]
            ]);

        $data1 = $data;
        $response = $this->put('api/scoutings/444', $data1, $this->headers())->assertResponseStatus(400)
            ->seeJson([
                "success" => false
            ]);
    }
}
