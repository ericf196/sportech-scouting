<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScoutingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scoutings', function (Blueprint $table) {
            $table->increments('id');
            $table->text('scouter_id')->nullable();
            $table->text('event_id')->nullable();
            $table->text('championship_id')->nullable();
            $table->text('left_athlete_id')->nullable();
            $table->text('right_athlete_id')->nullable();
            $table->json('name');
            $table->json('description');
            $table->text('video_src');

            $table->nullableTimestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('scoutings');
    }
}
