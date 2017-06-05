<?php

use App\Scouting\Entities\Scoutings\Scouting;
use App\Scouting\Entities\Scoutings\ScoutingTouch;
use App\Scouting\Entities\Scoutings\ScoutingTouchAction;
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
                            /** @var ScoutingTouchAction $newAction */
                            $newAction->leftTags()->attach($leftTag->id, ['tag_option_id' => $leftTag->tag_option_id]);
                        });

                        $action->rightTags->each(function ($leftTag) use ($newAction) {
                            /** @var ScoutingTouchAction $newAction */
                            $newAction->rightTags()->attach($leftTag->id, ['tag_option_id' => $leftTag->tag_option_id]);
                        });
                    });
                });
            });
        });

        DB::commit();
    }
}