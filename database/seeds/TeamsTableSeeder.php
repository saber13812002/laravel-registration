<?php

use Illuminate\Database\Seeder;

class TeamsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('teams')->delete();
        
        \DB::table('teams')->insert(array (
            0 => 
            array (
                'id' => 1,
                'author_id' => 2,
                'playground_id' => 0,
                'name' => 'تیم ناژ',
                'desc' => 'تیم پارک آوینی',
                'city_id' => 8,
                'player_id_1' => 2,
                'player_id_2' => 2,
                'player_id_3' => 2,
                'player_id_4' => 2,
                'picture_cdn' => NULL,
                'created_at' => '2020-03-23 10:41:40',
                'updated_at' => '2020-03-23 10:44:43',
            ),
        ));
        
        
    }
}