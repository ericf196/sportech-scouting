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
            $table->integer('scouter_id')->unsigned()->nullable();
            $table->integer('event_id')->unsigned()->nullable();
            $table->integer('championship_id')->unsigned()->nullable();
            $table->integer('left_athlete_id')->nullable()->unsigned();
            $table->integer('right_athlete_id')->nullable()->unsigned();
            $table->json('name');
            $table->json('description')->nullable();
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
