<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEvetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('championship_id')->unsigned()->nullable()->index('championship_idx')->comment('related championship id');
            $table->integer('specialty_id')->unsigned();
            $table->integer('category_id')->unsigned();
            $table->integer('event_type_id')->nullable();
            $table->integer('event_reach_id')->nullable();
            $table->json('name')->nullable();
            $table->string('slug')->default('');
            $table->json('description')->nullable();
            $table->string('gender', 1)->nullable()->comment('gender F: female, M:male');
            $table->timestamp('init_date')->nullable()->comment('init date');
            $table->timestamp('end_date')->nullable()->comment('end date');
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
        Schema::drop('events');

    }
}
