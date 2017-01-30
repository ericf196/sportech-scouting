<?php

use App\Scouting\Entities\Athletes\Athlete;
use App\Scouting\Entities\Championships\Championship;
use App\Scouting\Entities\Events\Event;
use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Entities\Scoutings\ScoutingTouch;
use App\Scouting\Entities\Scoutings\ScoutingTouchAction;
use App\Scouting\Entities\Scoutings\Tag;
use App\Scouting\Entities\Scoutings\TagOption;
use App\Scouting\Entities\Sports\Category;
use App\Scouting\Entities\Sports\Specialty;
use App\Scouting\Entities\Sports\Sport;
use App\Scouting\Entities\Users\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Webpatser\Countries\Countries;

class TagsApiTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * @test
     * @group tags
     */
    public function it_return_a_listing_of_tags()
    {
        $user = factory(User::class)->create();
        factory(Tag::class)->times(5)->create();
        factory(Tag::class)->times(5)->create(['dropdown' => true])->each(function ($u) {
            $u->options()->save(factory(TagOption::class)->make(['value' => 1]));
            $u->options()->save(factory(TagOption::class)->make(['value' => 2]));
            $u->options()->save(factory(TagOption::class)->make(['value' => 3]));
            $u->options()->save(factory(TagOption::class)->make(['value' => 4]));
            $u->options()->save(factory(TagOption::class)->make(['value' => 5]));
        });
        $tags = $this->get('api/tags?include=options', $this->headers($user))
            ->assertResponseOk()
            ->seeJsonStructure([
                'data' => [
                    '*' => [
                        'id', 'abbr', 'dropdown', 'options'
                    ]
                ],
            ])->decodeResponseJson();

        $dbTags = Tag::select('id', 'name', 'abbr', 'dropdown', 'category','color')->with(['options' => function ($q) {
            $q->select('id', 'tag_id', 'name', 'value');
        }])->where('dropdown', true)->get();

        $dbTagsWithoutOptions = Tag::select('id', 'name', 'abbr', 'dropdown','category','color')->with(['options' => function ($q) {
            $q->select('id', 'tag_id', 'name', 'value');
        }])->where('dropdown', false)->get();

        $dbTagsWithoutOptions = $dbTagsWithoutOptions->map(function ($tag) {
            $tag->translations = [
                'name'     => $tag->getTranslations('name'),
                'category' => $tag->getTranslations('category')
            ];
            $tag->name = $tag->getTranslations('name')['en'];
            $tag->category = $tag->getTranslations('category')['en'];

            return $tag;
        });

        $dbTags = $dbTags->map(function ($tag) {
            $tag->options = $tag->options->map(function ($option) {
                unset($option->tag_id);
                $option->translations = [
                    'name'     => $option->getTranslations('name'),
                ];
                $option->name = $option->getTranslations('name')['en'];
                return $option;
            });
            $tag->translations = [
                'name'     => $tag->getTranslations('name'),
                'category' => $tag->getTranslations('category')
            ];
            $tag->name = $tag->getTranslations('name')['en'];
            $tag->category = $tag->getTranslations('category')['en'];
            return $tag;
        });
        $tagsWithoutOptions = array_slice($tags['data'], 0, 5);
        $tags = array_slice($tags['data'], 5, 5);

        $this->assertEquals($dbTagsWithoutOptions->toArray(), $tagsWithoutOptions);
        $this->assertEquals($dbTags->toArray(), $tags);
    }
}
