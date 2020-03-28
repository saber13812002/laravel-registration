<?php

use Illuminate\Database\Seeder;

class PlaygroundsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('playgrounds')->delete();
        
        \DB::table('playgrounds')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'زمین پارک آوینی',
                'type' => '1',
                'lat' => '53',
                'lng' => '35',
                'desc' => 'زمین بسکتبال',
                'tlgrmGroupAdminId' => '1',
                'tlgrmGroupJoinLink' => '1',
                'tlgrmChannelId' => '1',
                'instagramId' => '1',
                'province_id' => 1,
                'county_id' => 1,
                'city_id' => 1,
                'pushe_id' => '1',
                'chat_id' => '1',
                'active' => 1,
                'rimHeight' => '1',
                'distance2parking' => '1',
                'rimNumber' => '1',
                'roof' => '1',
                'spotlight' => '1',
                'fence' => '1',
                'parking' => '1',
                'basketnet' => '1',
                'scoreline' => '1',
                'lines' => '1',
                'author_id' => 2,
                'editor_id' => 2,
                'created_at' => '2020-03-23 10:42:55',
                'updated_at' => '2020-03-23 10:42:55',
            ),
        ));
        
        
    }
}