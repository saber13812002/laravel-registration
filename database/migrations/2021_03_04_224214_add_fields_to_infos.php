<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsToInfos extends Migration
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
            $table->string('shomshenas')->after('psn_id')->nullable();
            $table->string('fathername')->nullable();
            $table->string('birthdate')->nullable();
            $table->string('tahsilat')->nullable();
            $table->string('ostan')->nullable();
            $table->string('shahr')->nullable();
            $table->text('address')->nullable();
            $table->string('postalcode')->nullable();
            $table->string('phone')->nullable();

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
            $table->dropColumn('shomshenas');
            $table->dropColumn('fathername');
            $table->dropColumn('birthdate');
            $table->dropColumn('tahsilat');
            $table->dropColumn('ostan');
            $table->dropColumn('shahr');
            $table->dropColumn('address');
            $table->dropColumn('postalcode');
            $table->dropColumn('phone');

        });
    }
}
