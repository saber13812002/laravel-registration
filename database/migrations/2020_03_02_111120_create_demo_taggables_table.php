<?php

use Encore\Admin\Form\Field\Nullable;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDemoTaggablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demo_taggables', function (Blueprint $table) {
            $table->bigIncrements('tag_id');

            $table->integer('taggable_id')->nullable();
            $table->string('taggable_type')->nullable();

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
        Schema::dropIfExists('demo_taggables');
    }
}
