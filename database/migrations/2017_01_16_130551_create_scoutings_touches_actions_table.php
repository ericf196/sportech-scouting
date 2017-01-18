<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScoutingsTouchesActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scoutings_touches_actions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('scouting_touch_id');
            $table->integer('start');
            $table->integer('end');
            $table->integer('duration');
            $table->json('color');
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
        Schema::dropIfExists('scoutings_touches_actions');
    }
}
