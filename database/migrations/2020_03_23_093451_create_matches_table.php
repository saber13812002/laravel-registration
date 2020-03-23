<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matches', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('playground_id');
            $table->bigInteger('author_id');
            $table->bigInteger('team_id_1');
            $table->bigInteger('team_id_2');
            $table->integer('score_1');
            $table->integer('score_2');
            $table->integer('quarter');
            $table->tinyInteger('finished');

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
        Schema::dropIfExists('matches');
    }
}
