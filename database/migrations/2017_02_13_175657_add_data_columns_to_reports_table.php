<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDataColumnsToReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reports', function (Blueprint $table) {
            $table->json('data_offensive')->nullable()->after('data');
            $table->json('data_defensive')->nullable()->after('data');
            $table->json('data_counteroffensive')->nullable()->after('data');
            $table->json('data_combat_status')->nullable()->after('data');
            $table->json('data_parry')->nullable()->after('data');
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
            $table->dropColumn('data_offensive');
            $table->dropColumn('data_defensive');
            $table->dropColumn('data_counteroffensive');
            $table->dropColumn('data_combat_status');
            $table->dropColumn('data_parry');
        });
    }
}
