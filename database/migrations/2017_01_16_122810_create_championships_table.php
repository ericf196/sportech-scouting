<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChampionshipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('championships', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('sport_id')->unsigned()->nullable();
            $table->string('location_id')->nullable();
            $table->json('name')->nullable();
            $table->json('description')->nullable();
            $table->string('slug', 255);
            $table->timestamp('init_date')->nullable();
            $table->timestamp('end_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('championships');

    }
}
