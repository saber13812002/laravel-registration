<?php

use Illuminate\Database\Seeder;

class MatchesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('matches')->delete();
        
        \DB::table('matches')->insert(array (
            0 => 
            array (
                'id' => 1,
                'playground_id' => 1,
                'author_id' => 2,
                'team_id_1' => 1,
                'team_id_2' => 1,
                'score_1' => 3,
                'score_2' => 4,
                'quarter' => 4,
                'finished' => 1,
                'created_at' => '2020-03-23 10:43:26',
                'updated_at' => '2020-03-23 10:43:26',
            ),
        ));
        
        
    }
}