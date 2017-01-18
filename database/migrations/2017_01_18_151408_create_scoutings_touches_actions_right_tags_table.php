<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScoutingsTouchesActionsRightTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scoutings_touches_actions_right_tags', function (Blueprint $table) {
            $table->integer('scouting_action_id');
            $table->integer('tag_id');
            $table->integer('tag_option_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('scoutings_touches_actions_right_tags');
    }
}
