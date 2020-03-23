<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('author_id')->nullable();
            $table->bigInteger('playground_id')->nullable();

            $table->string('name');
            $table->string('desc');
            $table->bigInteger('city_id')->nullable();
            $table->bigInteger('player_id_1')->nullable();
            $table->bigInteger('player_id_2')->nullable();
            $table->bigInteger('player_id_3')->nullable();
            $table->bigInteger('player_id_4')->nullable();
            $table->text('picture_cdn')->nullable();

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
        Schema::dropIfExists('teams');
    }
}
