<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCreatedByToTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('athletes', function (Blueprint $table) {
            $table->integer('created_by')->after('id')->unsigned();
        });

        Schema::table('championships', function (Blueprint $table) {
            $table->integer('created_by')->after('id')->unsigned();
        });

        Schema::table('events', function (Blueprint $table) {
            $table->integer('created_by')->after('id')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('athletes', function (Blueprint $table) {
            //
        });
    }
}
