<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlaygroundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('playgrounds', function (Blueprint $table) {
            $table->bigIncrements('id');

            //`Id`, `timestamp`, `Name`, `PlaygroundType`, `PlaygroundLatitude`, `PlaygroundLongitude`, `desc`, 
            //`PgTlgrmGroupAdminId`, `PgTlgrmGroupJoinLink`, `PgTlgrmChannelId`, `PgInstagramId`, 
            //`ProvinceId`, `pushe_id`, `chat_id`, `Active`, 
            //`rimHeight`, `distance2parking`, `rimNumber`, `roof`, `spotlight`, `fence`, `parking`, 
            //`basketnet`, `scoreline`, `lines`
            $table->string('name');
            $table->string('type');
            $table->string('lat');
            $table->string('lng');
            $table->string('desc');
            $table->string('tlgrmGroupAdminId');
            $table->string('tlgrmGroupJoinLink');
            $table->string('tlgrmChannelId');
            $table->string('instagramId');
            $table->bigInteger('province_id');
            $table->bigInteger('county_id');
            $table->bigInteger('city_id');
            $table->string('pushe_id');
            $table->string('chat_id');
            $table->tinyInteger('active');
            $table->string('rimHeight');
            $table->string('distance2parking');
            $table->string('rimNumber');
            $table->string('roof');
            $table->string('spotlight');
            $table->string('fence');
            $table->string('parking');
            $table->string('basketnet');
            $table->string('scoreline');
            $table->string('lines');
            
            $table->bigInteger('author_id')->nullable();
            $table->bigInteger('editor_id')->nullable();

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
        Schema::dropIfExists('playgrounds');
    }
}
