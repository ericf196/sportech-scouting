<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveSocutingColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('scoutings', function (Blueprint $table) {
            $table->dropColumn(['event_id', 'championship_id', 'left_athlete_id', 'right_athlete_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('scoutings', function (Blueprint $table) {
            //
        });
    }
}
