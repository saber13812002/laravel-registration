<?php

use Illuminate\Database\Seeder;

class AdminMenuTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('admin_menu')->delete();
        
        \DB::table('admin_menu')->insert(array (
            7 => 
            array (
                'id' => 8,
                'parent_id' => 10,
                'order' => 7,
                'title' => 'بخش ها',
                'icon' => 'fa-bars',
                'uri' => 'bakhshes',
                'permission' => NULL,
                'created_at' => '2020-03-05 23:19:19',
                'updated_at' => '2020-03-12 20:11:47',
            ),
            8 => 
            array (
                'id' => 9,
                'parent_id' => 10,
                'order' => 8,
                'title' => 'شیفت ها',
                'icon' => 'fa-bars',
                'uri' => 'shifts',
                'permission' => NULL,
                'created_at' => '2020-03-05 23:19:58',
                'updated_at' => '2020-03-12 20:11:47',
            ),
            9 => 
            array (
                'id' => 10,
                'parent_id' => 0,
                'order' => 5,
                'title' => 'منو',
                'icon' => 'fa-bars',
                'uri' => NULL,
                'permission' => NULL,
                'created_at' => '2020-03-05 23:20:32',
                'updated_at' => '2020-03-12 20:11:47',
            ),
            10 => 
            array (
                'id' => 11,
                'parent_id' => 10,
                'order' => 9,
                'title' => 'هفته ها',
                'icon' => 'fa-bars',
                'uri' => 'periods',
                'permission' => NULL,
                'created_at' => '2020-03-05 23:21:02',
                'updated_at' => '2020-03-12 20:11:47',
            ),
            11 => 
            array (
                'id' => 12,
                'parent_id' => 10,
                'order' => 6,
                'title' => 'تایم شیت',
                'icon' => 'fa-bars',
                'uri' => 'timesheets',
                'permission' => NULL,
                'created_at' => '2020-03-05 23:22:04',
                'updated_at' => '2020-03-12 20:11:47',
            ),
            12 => 
            array (
                'id' => 13,
                'parent_id' => 0,
                'order' => 1,
                'title' => 'تنظیمات سایت',
                'icon' => 'fa-bars',
                'uri' => 'page-settings',
                'permission' => NULL,
                'created_at' => '2020-03-12 20:07:59',
                'updated_at' => '2020-03-12 20:11:47',
            ),
            13 => 
            array (
                'id' => 14,
                'parent_id' => 13,
                'order' => 2,
                'title' => 'لوگوی سایت',
                'icon' => 'fa-bars',
                'uri' => 'page-settings/1/edit',
                'permission' => NULL,
                'created_at' => '2020-03-12 20:08:32',
                'updated_at' => '2020-03-12 20:11:47',
            ),
            14 => 
            array (
                'id' => 15,
                'parent_id' => 13,
                'order' => 3,
                'title' => 'اسلایدر',
                'icon' => 'fa-bars',
                'uri' => 'page-settings/2/edit',
                'permission' => NULL,
                'created_at' => '2020-03-12 20:08:56',
                'updated_at' => '2020-03-12 20:11:47',
            ),
            15 => 
            array (
                'id' => 16,
                'parent_id' => 13,
                'order' => 4,
                'title' => 'لوگوی سایت',
                'icon' => 'fa-bars',
                'uri' => 'page-settings/3/edit',
                'permission' => NULL,
                'created_at' => '2020-03-12 20:09:15',
                'updated_at' => '2020-03-12 20:11:47',
            ),
        ));
        
        
    }
}