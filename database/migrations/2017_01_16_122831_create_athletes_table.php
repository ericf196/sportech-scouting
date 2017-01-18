<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAthletesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('athletes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable();
            $table->integer('sport_id');
            $table->integer('category_id');
            $table->integer('specialty_id');
            $table->integer('country_id');
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->string('national_code')->nullable();
            $table->string('federation_code')->nullable();;
            $table->string('alias', 50)->nullable();
            $table->string('gender', 1);
            $table->tinyInteger('condition')->nullable();
            $table->tinyInteger('professional')->nullable();
            $table->float('ranking', 8, 2)->nullable();;
            $table->float('height', 10, 0)->nullable();
            $table->float('weight', 10, 0)->nullable();
            $table->tinyInteger('profile_status')->nullable();
            $table->tinyInteger('active')->default(1);
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
        Schema::drop('athletes');

    }
}
