<?php

use Illuminate\Database\Seeder;

class PagesettingsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('pagesettings')->delete();
        
        \DB::table('pagesettings')->insert(array (
            0 => 
            array (
                'id' => 1,
                'type' => 'aboutus',
                'text' => 'متن درباره ما تنظیمات از ادمین پنل مدیر',
                'enable' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'type' => 'contactus',
                'text' => 'متن تماس با ما تنظیمات از پنل ادمین مدیر',
                'enable' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'type' => 'copyright',
                'text' => 'متن درباره مامتن کلیه ی حقوق این سایت تنظیمات از پنل ادمین مدیر',
                'enable' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'type' => 'siteTitle',
                'text' => 'سامانه نیروهای جهادی ایران',
                'enable' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'type' => 'siteLogo',
                'text' => 'images/logo.png',
                'enable' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'type' => 'siteBanner',
                'text' => '../images/banner.jpg',
                'enable' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}