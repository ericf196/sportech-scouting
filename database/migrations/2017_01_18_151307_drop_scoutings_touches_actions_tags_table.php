<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DropScoutingsTouchesActionsTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::drop('scoutings_touches_actions_tags');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('scoutings_touches_actions_tags', function (Blueprint $table) {
            $table->integer('scouting_action_id');
            $table->integer('tag_id');
            $table->integer('tag_option_id')->nullable();
        });
    }
}
