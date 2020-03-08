<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddProfileCdnToInfos extends Migration
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
            $table->text('profile_picture_cdn')->after('profile_picture')->nullable();
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
            $table->dropColumn('profile_picture_cdn');

        });
    }
}
