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
            0 => 
            array (
                'id' => 1,
                'parent_id' => 0,
                'order' => 13,
                'title' => 'Dashboard',
                'icon' => 'fa-bar-chart',
                'uri' => '/',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2020-03-23 10:39:22',
            ),
            1 => 
            array (
                'id' => 2,
                'parent_id' => 0,
                'order' => 14,
                'title' => 'Admin',
                'icon' => 'fa-tasks',
                'uri' => '',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2020-03-23 10:39:23',
            ),
            2 => 
            array (
                'id' => 3,
                'parent_id' => 2,
                'order' => 15,
                'title' => 'Users',
                'icon' => 'fa-users',
                'uri' => 'auth/users',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2020-03-23 10:39:23',
            ),
            3 => 
            array (
                'id' => 4,
                'parent_id' => 2,
                'order' => 16,
                'title' => 'Roles',
                'icon' => 'fa-user',
                'uri' => 'auth/roles',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2020-03-23 10:39:23',
            ),
            4 => 
            array (
                'id' => 5,
                'parent_id' => 2,
                'order' => 17,
                'title' => 'Permission',
                'icon' => 'fa-ban',
                'uri' => 'auth/permissions',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2020-03-23 10:39:23',
            ),
            5 => 
            array (
                'id' => 6,
                'parent_id' => 2,
                'order' => 18,
                'title' => 'Menu',
                'icon' => 'fa-bars',
                'uri' => 'auth/menu',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2020-03-23 10:39:23',
            ),
            6 => 
            array (
                'id' => 7,
                'parent_id' => 2,
                'order' => 19,
                'title' => 'Operation log',
                'icon' => 'fa-history',
                'uri' => 'auth/logs',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2020-03-23 10:39:23',
            ),
            7 => 
            array (
                'id' => 8,
                'parent_id' => 10,
                'order' => 10,
                'title' => 'بخش ها',
                'icon' => 'fa-bars',
                'uri' => 'bakhshes',
                'permission' => NULL,
                'created_at' => '2020-03-05 23:19:19',
                'updated_at' => '2020-03-23 10:39:22',
            ),
            8 => 
            array (
                'id' => 9,
                'parent_id' => 10,
                'order' => 11,
                'title' => 'شیفت ها',
                'icon' => 'fa-bars',
                'uri' => 'shifts',
                'permission' => NULL,
                'created_at' => '2020-03-05 23:19:58',
                'updated_at' => '2020-03-23 10:39:22',
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
                'order' => 12,
                'title' => 'هفته ها',
                'icon' => 'fa-bars',
                'uri' => 'periods',
                'permission' => NULL,
                'created_at' => '2020-03-05 23:21:02',
                'updated_at' => '2020-03-23 10:39:22',
            ),
            11 => 
            array (
                'id' => 12,
                'parent_id' => 10,
                'order' => 9,
                'title' => 'تایم شیت',
                'icon' => 'fa-bars',
                'uri' => 'timesheets',
                'permission' => NULL,
                'created_at' => '2020-03-05 23:22:04',
                'updated_at' => '2020-03-23 10:39:22',
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
            16 => 
            array (
                'id' => 17,
                'parent_id' => 10,
                'order' => 6,
                'title' => 'تیم',
                'icon' => 'fa-bars',
                'uri' => 'teams',
                'permission' => NULL,
                'created_at' => '2020-03-23 10:38:17',
                'updated_at' => '2020-03-23 10:39:22',
            ),
            17 => 
            array (
                'id' => 18,
                'parent_id' => 10,
                'order' => 7,
                'title' => 'مسابقه ها',
                'icon' => 'fa-bars',
                'uri' => 'matches',
                'permission' => NULL,
                'created_at' => '2020-03-23 10:38:35',
                'updated_at' => '2020-03-23 10:39:22',
            ),
            18 => 
            array (
                'id' => 19,
                'parent_id' => 10,
                'order' => 8,
                'title' => 'زمین ها',
                'icon' => 'fa-bars',
                'uri' => 'playgrounds',
                'permission' => NULL,
                'created_at' => '2020-03-23 10:39:08',
                'updated_at' => '2020-03-23 10:39:22',
            ),
        ));
        
        
    }
}