<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        // $post = factory(\App\Models\Post::class)->create();
        'author_id' => 1,
        'title' => $faker->sentence,
        'content' => $faker->paragraph
    ];
});
