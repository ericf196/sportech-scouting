<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScoutingsDetallesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scoutings_touches', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('scouting_id')->unsigned();
            $table->json('title');
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
        Schema::drop('scoutings_touches');
    }
}
