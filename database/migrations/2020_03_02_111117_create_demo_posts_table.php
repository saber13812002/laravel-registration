<?php

use Encore\Admin\Form\Field\Nullable;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDemoPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demo_posts', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('title')->nullable();
            $table->string('author_id')->nullable();
            $table->text('content')->nullable();
            $table->integer('rate')->nullable();
            $table->tinyInteger('released')->nullable();
            $table->text('keywords')->nullable();

            $table->timestamp('release_at')->default(now());
            $table->timestamp('deleted_at')->default(now());
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
        Schema::dropIfExists('demo_posts');
    }
}
