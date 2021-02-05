<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Video;
use Faker\Generator as Faker;

$factory->define(Video::class, function (Faker $faker) {
    return [
        // $v = factory(\App\Models\Video::class)->create();
        'title' => $faker->sentence,
        'video' => $faker->paragraph
    ];
});
