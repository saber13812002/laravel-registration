<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOtpsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('otps', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('mobile_number');
            $table->string('verification_code');
            $table->integer('verified');
            $table->timestamps();
        });

        DB::table('otps')->insert(
            [
                'id' => 1,
                'mobile_number' => "9196070718",
                'verification_code' => "11111",
                'verified' => 0
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('otps');
    }
}
