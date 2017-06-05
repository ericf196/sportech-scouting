<?php

use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Entities\Scoutings\ScoutingTouch;
use App\Scouting\Entities\Scoutings\ScoutingTouchAction;
use App\Scouting\Entities\Scoutings\Tag;
use App\Scouting\Entities\Scoutings\TagOption;
use App\Scouting\Entities\Users\User;
use Illuminate\Database\Seeder;

class TestScoutingSeeder extends Seeder
{
    public function run()
    {
        $users = User::whereIn('email', ['pedro.gorrin@dncomputing.com', 'bastidasjavier@gmail.com', 'cjpinedac@gmail.com'])->get();
        $scoutings = Scouting::on('mysql-maqueta')->with(['scoutingTouches.actions.leftTags', 'scoutingTouches.actions.rightTags'])->whereIn('id', [2, 3, 4, 8, 9, 10])->get();
        $prevScoutings = Scouting::on('mysql')->first();
        DB::beginTransaction();
        $users->each(function ($user) use ($scoutings) {
            $scoutings->each(function (Scouting $scouting) use ($user) {
                $newScouting = new Scouting();
                $newScouting->name = $scouting->getTranslations('description');
                $newScouting->description = $scouting->getTranslations('description');
                $newScouting->video_src = $scouting->video_src;
                $newScouting->scouter_id = $user->id;
                $newScouting->save();
                $scouting->scoutingTouches->each(function (ScoutingTouch $touch) use ($newScouting) {
                    /** @var Scouting $newScouting */
                    $t = new ScoutingTouch();
                    $t->title = $touch->getTranslations('title');
                    $t->start = $touch->start;
                    $t->end = $touch->end;
                    $t->color = $touch->color;
                    $t->duration = $touch->duration;
                    $newTouch = $newScouting->scoutingTouches()->save($t);
                    $touch->actions->each(function (ScoutingTouchAction $action) use ($newTouch) {
                        $newAction = new ScoutingTouchAction();
                        $newAction->start = $action->start;
                        $newAction->end = $action->end;
                        $newAction->duration = $action->duration;
                        $newAction->color = $action->color;
                        /** @var ScoutingTouch $newTouch */
                        $newAction = $newTouch->actions()->save($newAction);
                        $action->leftTags->each(function ($leftTag) use ($newAction) {
                            /** @var Tag $tagMaqueta */
                            $tagOptionMaqueta = null;
                            $tagOptionId = null;
                            $tag = null;
                            $tagMaqueta = Tag::on('mysql-maqueta')->find($leftTag->id);
                            if ($leftTag->tag_option_id) {
                                $tagOptionMaqueta = TagOption::on('mysql-maqueta')->find($leftTag->tag_option_id);
                            }
                            $abbr = $tagMaqueta->abbr;
                            if ($abbr == 'CCT') {
                                $tag = Tag::on('mysql')->where('abbr', 'CTP')->first();
                                $tagOptionId = TagOption::on('mysql')->where('tag_id', $tag->id)->where('value', 'CCT')->first();
                                $tagOptionId = $tagOptionId->id;
                            } else if ($abbr == 'CPY') {
                                $tag = Tag::on('mysql')->where('abbr', 'CTP')->first();
                                $tagOptionId = TagOption::on('mysql')->where('tag_id', $tag->id)->where('value', 'CPY')->first();
                                $tagOptionId = $tagOptionId->id;
                            } else if ($abbr != 'CTP') {
                                $tag = Tag::on('mysql')->where('abbr', $tagMaqueta->abbr)->first();
                                if ($tagOptionMaqueta) {
                                    $tagOptionId = TagOption::on('mysql')->where('value', $tagOptionMaqueta->value)->first();
                                    $tagOptionId = $tagOptionId->id;
                                }
                            }
                            if ($tag) {
                                /** @var ScoutingTouchAction $newAction */
                                $newAction->leftTags()->attach($tag->id, ['tag_option_id' => $tagOptionId]);
                            }
                        });

                        $action->rightTags->each(function ($leftTag) use ($newAction) {
                            $tagOptionMaqueta = null;
                            $tagOptionId = null;
                            $tag = null;
                            $tagMaqueta = Tag::on('mysql-maqueta')->find($leftTag->id);
                            if ($leftTag->tag_option_id) {
                                $tagOptionMaqueta = TagOption::on('mysql-maqueta')->find($leftTag->tag_option_id);
                            }
                            $abbr = $tagMaqueta->abbr;
                            if ($abbr == 'CCT') {
                                $tag = Tag::on('mysql')->where('abbr', 'CTP')->first();
                                $tagOptionId = TagOption::on('mysql')->where('tag_id', $tag->id)->where('value', 'CCT')->first();
                                $tagOptionId = $tagOptionId->id;
                            } else if ($abbr == 'CPY') {
                                $tag = Tag::on('mysql')->where('abbr', 'CTP')->first();
                                $tagOptionId = TagOption::on('mysql')->where('tag_id', $tag->id)->where('value', 'CPY')->first();
                                $tagOptionId = $tagOptionId->id;
                            } else if ($abbr != 'CTP') {
                                $tag = Tag::on('mysql')->where('abbr', $tagMaqueta->abbr)->first();
                                if ($tagOptionMaqueta) {
                                    $tagOptionId = TagOption::on('mysql')->where('value', $tagOptionMaqueta->value)->first();
                                    $tagOptionId = $tagOptionId->id;
                                }
                            }
                            if ($tag) {
                                /** @var ScoutingTouchAction $newAction */
                                $newAction->rightTags()->attach($tag->id, ['tag_option_id' => $tagOptionId]);
                            }
                        });
                    });
                });
            });
        });

        DB::commit();
    }
}