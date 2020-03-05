<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddProvinceToInfos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('infos', function (Blueprint $table) {
            //
            $table->integer('province')->after('shahr')->nullable();
            $table->integer('county')->after('province')->nullable();
            $table->integer('city')->after('county')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('infos', function (Blueprint $table) {
            //
            $table->dropColumn('province');
            $table->dropColumn('county');
            $table->dropColumn('city');
        });
    }
}
