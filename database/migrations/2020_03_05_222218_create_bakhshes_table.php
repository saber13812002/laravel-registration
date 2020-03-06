<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBakhshesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bakhshes', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');
            $table->tinyInteger('floor');
            $table->tinyInteger('room');
            $table->enum('sex', ['Male', 'Female', 'All'])->default('All');
            $table->tinyInteger('capacity');
            $table->tinyInteger('extra');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bakhshes');
    }
}
