<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsToReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reports', function (Blueprint $table) {
            $table->json('description')->after('user_id');
            $table->json('name')->after('user_id');
            $table->json('data')->nullable();
        });

        Schema::table('reports', function (Blueprint $table) {
            $table->dropColumn('scouting_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reports', function (Blueprint $table) {
            $table->dropColumn('description');
            $table->dropColumn('name');
            $table->dropColumn('data');
        });

        Schema::table('reports', function (Blueprint $table) {
            $table->integer('scouting_id')->unsigned()->nullable();
        });
    }
}
