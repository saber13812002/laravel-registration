<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSmslogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('smslogs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('messageid')->nullable();
            $table->string('message')->nullable();
            $table->string('status')->nullable();
            $table->string('statustext')->nullable();
            $table->string('sender')->nullable();
            $table->string('receptor')->nullable();
            $table->string('date')->nullable();
            $table->string('cost')->nullable();
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
        Schema::dropIfExists('smslogs');
    }
}
