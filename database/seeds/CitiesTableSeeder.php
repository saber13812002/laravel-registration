<?php

use Illuminate\Database\Seeder;

class CitiesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cities')->delete();
        
        \DB::table('cities')->insert(array (
            0 => 
            array (
                'id' => 1,
                'province_id' => 1,
                'county_id' => 1,
                'name' => 'آذرشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'province_id' => 1,
                'county_id' => 1,
                'name' => 'تیمورلو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'province_id' => 1,
                'county_id' => 1,
                'name' => 'گوگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'province_id' => 1,
                'county_id' => 1,
                'name' => 'ممقان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'province_id' => 1,
                'county_id' => 2,
                'name' => 'اسکو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'province_id' => 1,
                'county_id' => 2,
                'name' => 'ایلخچی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'province_id' => 1,
                'county_id' => 2,
                'name' => 'سهند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            7 => 
            array (
                'id' => 8,
                'province_id' => 1,
                'county_id' => 3,
                'name' => 'اهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            8 => 
            array (
                'id' => 9,
                'province_id' => 1,
                'county_id' => 3,
                'name' => 'هوراند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            9 => 
            array (
                'id' => 10,
                'province_id' => 1,
                'county_id' => 4,
                'name' => 'بستان آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            10 => 
            array (
                'id' => 11,
                'province_id' => 1,
                'county_id' => 4,
                'name' => 'تیکمه داش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            11 => 
            array (
                'id' => 12,
                'province_id' => 1,
                'county_id' => 5,
                'name' => 'بناب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            12 => 
            array (
                'id' => 13,
                'province_id' => 1,
                'county_id' => 6,
                'name' => 'باسمنج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            13 => 
            array (
                'id' => 14,
                'province_id' => 1,
                'county_id' => 6,
                'name' => 'تبریز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            14 => 
            array (
                'id' => 15,
                'province_id' => 1,
                'county_id' => 6,
                'name' => 'خسروشاه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            15 => 
            array (
                'id' => 16,
                'province_id' => 1,
                'county_id' => 6,
                'name' => 'سردرود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            16 => 
            array (
                'id' => 17,
                'province_id' => 1,
                'county_id' => 7,
                'name' => 'جلفا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            17 => 
            array (
                'id' => 18,
                'province_id' => 1,
                'county_id' => 7,
                'name' => 'سیه رود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            18 => 
            array (
                'id' => 19,
                'province_id' => 1,
                'county_id' => 7,
                'name' => 'هادیشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            19 => 
            array (
                'id' => 20,
                'province_id' => 1,
                'county_id' => 8,
                'name' => 'قره آغاج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            20 => 
            array (
                'id' => 21,
                'province_id' => 1,
                'county_id' => 9,
                'name' => 'خمارلو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            21 => 
            array (
                'id' => 22,
                'province_id' => 1,
                'county_id' => 10,
                'name' => 'دوزدوزان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            22 => 
            array (
                'id' => 23,
                'province_id' => 1,
                'county_id' => 10,
                'name' => 'سراب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            23 => 
            array (
                'id' => 24,
                'province_id' => 1,
                'county_id' => 10,
                'name' => 'شربیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            24 => 
            array (
                'id' => 25,
                'province_id' => 1,
                'county_id' => 10,
                'name' => 'مهربان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            25 => 
            array (
                'id' => 26,
                'province_id' => 1,
                'county_id' => 11,
                'name' => 'تسوج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            26 => 
            array (
                'id' => 27,
                'province_id' => 1,
                'county_id' => 11,
                'name' => 'خامنه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            27 => 
            array (
                'id' => 28,
                'province_id' => 1,
                'county_id' => 11,
                'name' => 'سیس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            28 => 
            array (
                'id' => 29,
                'province_id' => 1,
                'county_id' => 11,
                'name' => 'شبستر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            29 => 
            array (
                'id' => 30,
                'province_id' => 1,
                'county_id' => 11,
                'name' => 'شرفخانه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            30 => 
            array (
                'id' => 31,
                'province_id' => 1,
                'county_id' => 11,
                'name' => 'شندآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            31 => 
            array (
                'id' => 32,
                'province_id' => 1,
                'county_id' => 11,
                'name' => 'صوفیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            32 => 
            array (
                'id' => 33,
                'province_id' => 1,
                'county_id' => 11,
                'name' => 'کوزه کنان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            33 => 
            array (
                'id' => 34,
                'province_id' => 1,
                'county_id' => 11,
                'name' => 'وایقان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            34 => 
            array (
                'id' => 35,
                'province_id' => 1,
                'county_id' => 12,
                'name' => 'جوان قلعه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            35 => 
            array (
                'id' => 36,
                'province_id' => 1,
                'county_id' => 12,
                'name' => 'عجب شیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            36 => 
            array (
                'id' => 37,
                'province_id' => 1,
                'county_id' => 13,
                'name' => 'آبش احمد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            37 => 
            array (
                'id' => 38,
                'province_id' => 1,
                'county_id' => 13,
                'name' => 'کلیبر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            38 => 
            array (
                'id' => 39,
                'province_id' => 1,
                'county_id' => 14,
            'name' => 'خداجو(خراجو)',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            39 => 
            array (
                'id' => 40,
                'province_id' => 1,
                'county_id' => 14,
                'name' => 'مراغه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            40 => 
            array (
                'id' => 41,
                'province_id' => 1,
                'county_id' => 15,
                'name' => 'بناب مرند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            41 => 
            array (
                'id' => 42,
                'province_id' => 1,
                'county_id' => 15,
                'name' => 'زنوز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            42 => 
            array (
                'id' => 43,
                'province_id' => 1,
                'county_id' => 15,
                'name' => 'کشکسرای',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            43 => 
            array (
                'id' => 44,
                'province_id' => 1,
                'county_id' => 15,
                'name' => 'مرند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            44 => 
            array (
                'id' => 45,
                'province_id' => 1,
                'county_id' => 15,
                'name' => 'یامچی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            45 => 
            array (
                'id' => 46,
                'province_id' => 1,
                'county_id' => 16,
                'name' => 'لیلان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            46 => 
            array (
                'id' => 47,
                'province_id' => 1,
                'county_id' => 16,
                'name' => 'مبارک شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            47 => 
            array (
                'id' => 48,
                'province_id' => 1,
                'county_id' => 16,
                'name' => 'ملکان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            48 => 
            array (
                'id' => 49,
                'province_id' => 1,
                'county_id' => 17,
                'name' => 'آقکند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            49 => 
            array (
                'id' => 50,
                'province_id' => 1,
                'county_id' => 17,
                'name' => 'اچاچی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            50 => 
            array (
                'id' => 51,
                'province_id' => 1,
                'county_id' => 17,
                'name' => 'ترک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            51 => 
            array (
                'id' => 52,
                'province_id' => 1,
                'county_id' => 17,
                'name' => 'ترکمانچای',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            52 => 
            array (
                'id' => 53,
                'province_id' => 1,
                'county_id' => 17,
                'name' => 'میانه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            53 => 
            array (
                'id' => 54,
                'province_id' => 1,
                'county_id' => 18,
                'name' => 'خاروانا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            54 => 
            array (
                'id' => 55,
                'province_id' => 1,
                'county_id' => 18,
                'name' => 'ورزقان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            55 => 
            array (
                'id' => 56,
                'province_id' => 1,
                'county_id' => 19,
                'name' => 'بخشایش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            56 => 
            array (
                'id' => 57,
                'province_id' => 1,
                'county_id' => 19,
                'name' => 'خواجه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            57 => 
            array (
                'id' => 58,
                'province_id' => 1,
                'county_id' => 19,
                'name' => 'زرنق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            58 => 
            array (
                'id' => 59,
                'province_id' => 1,
                'county_id' => 19,
                'name' => 'کلوانق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            59 => 
            array (
                'id' => 60,
                'province_id' => 1,
                'county_id' => 19,
                'name' => 'هریس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            60 => 
            array (
                'id' => 61,
                'province_id' => 1,
                'county_id' => 20,
                'name' => 'نظرکهریزی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            61 => 
            array (
                'id' => 62,
                'province_id' => 1,
                'county_id' => 20,
                'name' => 'هشترود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            62 => 
            array (
                'id' => 63,
                'province_id' => 2,
                'county_id' => 21,
                'name' => 'ارومیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            63 => 
            array (
                'id' => 64,
                'province_id' => 2,
                'county_id' => 21,
                'name' => 'سرو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            64 => 
            array (
                'id' => 65,
                'province_id' => 2,
                'county_id' => 21,
                'name' => 'سیلوانه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            65 => 
            array (
                'id' => 66,
                'province_id' => 2,
                'county_id' => 21,
                'name' => 'قوشچی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            66 => 
            array (
                'id' => 67,
                'province_id' => 2,
                'county_id' => 21,
                'name' => 'نوشین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            67 => 
            array (
                'id' => 68,
                'province_id' => 2,
                'county_id' => 22,
                'name' => 'اشنویه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            68 => 
            array (
                'id' => 69,
                'province_id' => 2,
                'county_id' => 22,
                'name' => 'نالوس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            69 => 
            array (
                'id' => 70,
                'province_id' => 2,
                'county_id' => 23,
                'name' => 'بوکان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            70 => 
            array (
                'id' => 71,
                'province_id' => 2,
                'county_id' => 23,
                'name' => 'سیمینه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            71 => 
            array (
                'id' => 72,
                'province_id' => 2,
                'county_id' => 24,
                'name' => 'پلدشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            72 => 
            array (
                'id' => 73,
                'province_id' => 2,
                'county_id' => 24,
                'name' => 'نازک علیا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            73 => 
            array (
                'id' => 74,
                'province_id' => 2,
                'county_id' => 25,
                'name' => 'پیرانشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            74 => 
            array (
                'id' => 75,
                'province_id' => 2,
                'county_id' => 25,
                'name' => 'گردکشانه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            75 => 
            array (
                'id' => 76,
                'province_id' => 2,
                'county_id' => 26,
                'name' => 'تکاب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            76 => 
            array (
                'id' => 77,
                'province_id' => 2,
                'county_id' => 27,
                'name' => 'آواجیق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            77 => 
            array (
                'id' => 78,
                'province_id' => 2,
                'county_id' => 27,
                'name' => 'سیه چشمه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            78 => 
            array (
                'id' => 79,
                'province_id' => 2,
                'county_id' => 28,
                'name' => 'قره ضیاءالدین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            79 => 
            array (
                'id' => 80,
                'province_id' => 2,
                'county_id' => 29,
                'name' => 'ایواوغلی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            80 => 
            array (
                'id' => 81,
                'province_id' => 2,
                'county_id' => 29,
                'name' => 'خوی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            81 => 
            array (
                'id' => 82,
                'province_id' => 2,
                'county_id' => 29,
                'name' => 'دیزج دیز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            82 => 
            array (
                'id' => 83,
                'province_id' => 2,
                'county_id' => 29,
                'name' => 'زرآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            83 => 
            array (
                'id' => 84,
                'province_id' => 2,
                'county_id' => 29,
                'name' => 'فیرورق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            84 => 
            array (
                'id' => 85,
                'province_id' => 2,
                'county_id' => 29,
                'name' => 'قطور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            85 => 
            array (
                'id' => 86,
                'province_id' => 2,
                'county_id' => 30,
                'name' => 'ربط',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            86 => 
            array (
                'id' => 87,
                'province_id' => 2,
                'county_id' => 30,
                'name' => 'سردشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            87 => 
            array (
                'id' => 88,
                'province_id' => 2,
                'county_id' => 30,
                'name' => 'میرآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            88 => 
            array (
                'id' => 89,
                'province_id' => 2,
                'county_id' => 31,
                'name' => 'تازه شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            89 => 
            array (
                'id' => 90,
                'province_id' => 2,
                'county_id' => 31,
                'name' => 'سلماس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            90 => 
            array (
                'id' => 91,
                'province_id' => 2,
                'county_id' => 32,
                'name' => 'شاهین دژ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            91 => 
            array (
                'id' => 92,
                'province_id' => 2,
                'county_id' => 32,
                'name' => 'کشاورز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            92 => 
            array (
                'id' => 93,
                'province_id' => 2,
                'county_id' => 32,
                'name' => 'محمودآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            93 => 
            array (
                'id' => 94,
                'province_id' => 2,
                'county_id' => 33,
                'name' => 'شوط',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            94 => 
            array (
                'id' => 95,
                'province_id' => 2,
                'county_id' => 33,
                'name' => 'مرگنلر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            95 => 
            array (
                'id' => 96,
                'province_id' => 2,
                'county_id' => 34,
                'name' => 'بازرگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            96 => 
            array (
                'id' => 97,
                'province_id' => 2,
                'county_id' => 34,
                'name' => 'ماکو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            97 => 
            array (
                'id' => 98,
                'province_id' => 2,
                'county_id' => 35,
                'name' => 'خلیفان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            98 => 
            array (
                'id' => 99,
                'province_id' => 2,
                'county_id' => 35,
                'name' => 'مهاباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            99 => 
            array (
                'id' => 100,
                'province_id' => 2,
                'county_id' => 36,
                'name' => 'باروق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            100 => 
            array (
                'id' => 101,
                'province_id' => 2,
                'county_id' => 36,
                'name' => 'چهاربرج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            101 => 
            array (
                'id' => 102,
                'province_id' => 2,
                'county_id' => 36,
                'name' => 'میاندوآب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            102 => 
            array (
                'id' => 103,
                'province_id' => 2,
                'county_id' => 37,
                'name' => 'محمدیار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            103 => 
            array (
                'id' => 104,
                'province_id' => 2,
                'county_id' => 37,
                'name' => 'نقده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            104 => 
            array (
                'id' => 105,
                'province_id' => 3,
                'county_id' => 38,
                'name' => 'اردبیل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            105 => 
            array (
                'id' => 106,
                'province_id' => 3,
                'county_id' => 38,
                'name' => 'هیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            106 => 
            array (
                'id' => 107,
                'province_id' => 3,
                'county_id' => 39,
                'name' => 'بیله سوار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            107 => 
            array (
                'id' => 108,
                'province_id' => 3,
                'county_id' => 39,
                'name' => 'جعفرآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            108 => 
            array (
                'id' => 109,
                'province_id' => 3,
                'county_id' => 40,
                'name' => 'اسلام اباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            109 => 
            array (
                'id' => 110,
                'province_id' => 3,
                'county_id' => 40,
                'name' => 'اصلاندوز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            110 => 
            array (
                'id' => 111,
                'province_id' => 3,
                'county_id' => 40,
                'name' => 'پارس آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            111 => 
            array (
                'id' => 112,
                'province_id' => 3,
                'county_id' => 40,
                'name' => 'تازه کند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            112 => 
            array (
                'id' => 113,
                'province_id' => 3,
                'county_id' => 41,
                'name' => 'خلخال',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            113 => 
            array (
                'id' => 114,
                'province_id' => 3,
                'county_id' => 41,
                'name' => 'کلور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            114 => 
            array (
                'id' => 115,
                'province_id' => 3,
                'county_id' => 41,
                'name' => 'هشتجین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            115 => 
            array (
                'id' => 116,
                'province_id' => 3,
                'county_id' => 42,
                'name' => 'سرعین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            116 => 
            array (
                'id' => 117,
                'province_id' => 3,
                'county_id' => 43,
                'name' => 'گیوی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            117 => 
            array (
                'id' => 118,
                'province_id' => 3,
                'county_id' => 44,
                'name' => 'تازه کندانگوت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            118 => 
            array (
                'id' => 119,
                'province_id' => 3,
                'county_id' => 44,
                'name' => 'گرمی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            119 => 
            array (
                'id' => 120,
                'province_id' => 3,
                'county_id' => 45,
                'name' => 'رضی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            120 => 
            array (
                'id' => 121,
                'province_id' => 3,
                'county_id' => 45,
                'name' => 'فخراباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            121 => 
            array (
                'id' => 122,
                'province_id' => 3,
                'county_id' => 45,
                'name' => 'قصابه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            122 => 
            array (
                'id' => 123,
                'province_id' => 3,
                'county_id' => 45,
                'name' => 'لاهرود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            123 => 
            array (
                'id' => 124,
                'province_id' => 3,
                'county_id' => 45,
                'name' => 'مرادلو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            124 => 
            array (
                'id' => 125,
                'province_id' => 3,
                'county_id' => 45,
                'name' => 'مشگین شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            125 => 
            array (
                'id' => 126,
                'province_id' => 3,
                'county_id' => 46,
                'name' => 'آبی بیگلو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            126 => 
            array (
                'id' => 127,
                'province_id' => 3,
                'county_id' => 46,
                'name' => 'عنبران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            127 => 
            array (
                'id' => 128,
                'province_id' => 3,
                'county_id' => 46,
                'name' => 'نمین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            128 => 
            array (
                'id' => 129,
                'province_id' => 3,
                'county_id' => 47,
                'name' => 'کوراییم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            129 => 
            array (
                'id' => 130,
                'province_id' => 3,
                'county_id' => 47,
                'name' => 'نیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            130 => 
            array (
                'id' => 131,
                'province_id' => 4,
                'county_id' => 48,
                'name' => 'آران وبیدگل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            131 => 
            array (
                'id' => 132,
                'province_id' => 4,
                'county_id' => 48,
                'name' => 'ابوزیدآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            132 => 
            array (
                'id' => 133,
                'province_id' => 4,
                'county_id' => 48,
                'name' => 'سفیدشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            133 => 
            array (
                'id' => 134,
                'province_id' => 4,
                'county_id' => 48,
                'name' => 'نوش آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            134 => 
            array (
                'id' => 135,
                'province_id' => 4,
                'county_id' => 49,
                'name' => 'اردستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            135 => 
            array (
                'id' => 136,
                'province_id' => 4,
                'county_id' => 49,
                'name' => 'زواره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            136 => 
            array (
                'id' => 137,
                'province_id' => 4,
                'county_id' => 49,
                'name' => 'مهاباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            137 => 
            array (
                'id' => 138,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'اژیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            138 => 
            array (
                'id' => 139,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'اصفهان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            139 => 
            array (
                'id' => 140,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'بهارستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            140 => 
            array (
                'id' => 141,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'تودشک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            141 => 
            array (
                'id' => 142,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'حسن اباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            142 => 
            array (
                'id' => 143,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'زیار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            143 => 
            array (
                'id' => 144,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'سجزی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            144 => 
            array (
                'id' => 145,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'قهجاورستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            145 => 
            array (
                'id' => 146,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'کوهپایه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            146 => 
            array (
                'id' => 147,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'محمدآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            147 => 
            array (
                'id' => 148,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'نصرآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            148 => 
            array (
                'id' => 149,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'نیک آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            149 => 
            array (
                'id' => 150,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'ورزنه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            150 => 
            array (
                'id' => 151,
                'province_id' => 4,
                'county_id' => 50,
                'name' => 'هرند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            151 => 
            array (
                'id' => 152,
                'province_id' => 4,
                'county_id' => 51,
                'name' => 'حبیب آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            152 => 
            array (
                'id' => 153,
                'province_id' => 4,
                'county_id' => 51,
                'name' => 'خورزوق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            153 => 
            array (
                'id' => 154,
                'province_id' => 4,
                'county_id' => 51,
                'name' => 'دستگرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            154 => 
            array (
                'id' => 155,
                'province_id' => 4,
                'county_id' => 51,
                'name' => 'دولت آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            155 => 
            array (
                'id' => 156,
                'province_id' => 4,
                'county_id' => 51,
                'name' => 'سین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            156 => 
            array (
                'id' => 157,
                'province_id' => 4,
                'county_id' => 51,
                'name' => 'شاپورآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            157 => 
            array (
                'id' => 158,
                'province_id' => 4,
                'county_id' => 51,
                'name' => 'کمشچه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            158 => 
            array (
                'id' => 159,
                'province_id' => 4,
                'county_id' => 52,
                'name' => 'افوس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            159 => 
            array (
                'id' => 160,
                'province_id' => 4,
                'county_id' => 52,
                'name' => 'بویین ومیاندشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            160 => 
            array (
                'id' => 161,
                'province_id' => 4,
                'county_id' => 53,
                'name' => 'تیران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            161 => 
            array (
                'id' => 162,
                'province_id' => 4,
                'county_id' => 53,
                'name' => 'رضوانشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            162 => 
            array (
                'id' => 163,
                'province_id' => 4,
                'county_id' => 53,
                'name' => 'عسگران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            163 => 
            array (
                'id' => 164,
                'province_id' => 4,
                'county_id' => 54,
                'name' => 'چادگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            164 => 
            array (
                'id' => 165,
                'province_id' => 4,
                'county_id' => 54,
                'name' => 'رزوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            165 => 
            array (
                'id' => 166,
                'province_id' => 4,
                'county_id' => 55,
                'name' => 'اصغرآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            166 => 
            array (
                'id' => 167,
                'province_id' => 4,
                'county_id' => 55,
                'name' => 'خمینی شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            167 => 
            array (
                'id' => 168,
                'province_id' => 4,
                'county_id' => 55,
                'name' => 'درچه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            168 => 
            array (
                'id' => 169,
                'province_id' => 4,
                'county_id' => 55,
                'name' => 'کوشک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            169 => 
            array (
                'id' => 170,
                'province_id' => 4,
                'county_id' => 56,
                'name' => 'خوانسار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            170 => 
            array (
                'id' => 171,
                'province_id' => 4,
                'county_id' => 57,
                'name' => 'جندق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            171 => 
            array (
                'id' => 172,
                'province_id' => 4,
                'county_id' => 57,
                'name' => 'خور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            172 => 
            array (
                'id' => 173,
                'province_id' => 4,
                'county_id' => 57,
                'name' => 'فرخی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            173 => 
            array (
                'id' => 174,
                'province_id' => 4,
                'county_id' => 58,
                'name' => 'دهاقان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            174 => 
            array (
                'id' => 175,
                'province_id' => 4,
                'county_id' => 58,
                'name' => 'گلشن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            175 => 
            array (
                'id' => 176,
                'province_id' => 4,
                'county_id' => 59,
                'name' => 'حنا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            176 => 
            array (
                'id' => 177,
                'province_id' => 4,
                'county_id' => 59,
                'name' => 'سمیرم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            177 => 
            array (
                'id' => 178,
                'province_id' => 4,
                'county_id' => 59,
                'name' => 'کمه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            178 => 
            array (
                'id' => 179,
                'province_id' => 4,
                'county_id' => 59,
                'name' => 'ونک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            179 => 
            array (
                'id' => 180,
                'province_id' => 4,
                'county_id' => 60,
                'name' => 'شاهین شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            180 => 
            array (
                'id' => 181,
                'province_id' => 4,
                'county_id' => 60,
                'name' => 'گرگاب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            181 => 
            array (
                'id' => 182,
                'province_id' => 4,
                'county_id' => 60,
                'name' => 'گزبرخوار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            182 => 
            array (
                'id' => 183,
                'province_id' => 4,
                'county_id' => 60,
                'name' => 'لای بید',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            183 => 
            array (
                'id' => 184,
                'province_id' => 4,
                'county_id' => 60,
                'name' => 'میمه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            184 => 
            array (
                'id' => 185,
                'province_id' => 4,
                'county_id' => 60,
                'name' => 'وزوان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            185 => 
            array (
                'id' => 186,
                'province_id' => 4,
                'county_id' => 61,
                'name' => 'شهرضا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            186 => 
            array (
                'id' => 187,
                'province_id' => 4,
                'county_id' => 61,
                'name' => 'منظریه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            187 => 
            array (
                'id' => 188,
                'province_id' => 4,
                'county_id' => 62,
                'name' => 'داران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            188 => 
            array (
                'id' => 189,
                'province_id' => 4,
                'county_id' => 62,
                'name' => 'دامنه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            189 => 
            array (
                'id' => 190,
                'province_id' => 4,
                'county_id' => 63,
                'name' => 'برف انبار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            190 => 
            array (
                'id' => 191,
                'province_id' => 4,
                'county_id' => 63,
                'name' => 'فریدونشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            191 => 
            array (
                'id' => 192,
                'province_id' => 4,
                'county_id' => 64,
                'name' => 'ابریشم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            192 => 
            array (
                'id' => 193,
                'province_id' => 4,
                'county_id' => 64,
                'name' => 'ایمانشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            193 => 
            array (
                'id' => 194,
                'province_id' => 4,
                'county_id' => 64,
                'name' => 'بهاران شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            194 => 
            array (
                'id' => 195,
                'province_id' => 4,
                'county_id' => 64,
                'name' => 'پیربکران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            195 => 
            array (
                'id' => 196,
                'province_id' => 4,
                'county_id' => 64,
                'name' => 'زازران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            196 => 
            array (
                'id' => 197,
                'province_id' => 4,
                'county_id' => 64,
                'name' => 'فلاورجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            197 => 
            array (
                'id' => 198,
                'province_id' => 4,
                'county_id' => 64,
                'name' => 'قهدریجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            198 => 
            array (
                'id' => 199,
                'province_id' => 4,
                'county_id' => 64,
                'name' => 'کلیشادوسودرجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            199 => 
            array (
                'id' => 200,
                'province_id' => 4,
                'county_id' => 65,
                'name' => 'برزک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            200 => 
            array (
                'id' => 201,
                'province_id' => 4,
                'county_id' => 65,
                'name' => 'جوشقان قالی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            201 => 
            array (
                'id' => 202,
                'province_id' => 4,
                'county_id' => 65,
                'name' => 'قمصر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            202 => 
            array (
                'id' => 203,
                'province_id' => 4,
                'county_id' => 65,
                'name' => 'کاشان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            203 => 
            array (
                'id' => 204,
                'province_id' => 4,
                'county_id' => 65,
                'name' => 'کامو و چوگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            204 => 
            array (
                'id' => 205,
                'province_id' => 4,
                'county_id' => 65,
                'name' => 'مشکات',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            205 => 
            array (
                'id' => 206,
                'province_id' => 4,
                'county_id' => 65,
                'name' => 'نیاسر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            206 => 
            array (
                'id' => 207,
                'province_id' => 4,
                'county_id' => 66,
                'name' => 'گلپایگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            207 => 
            array (
                'id' => 208,
                'province_id' => 4,
                'county_id' => 66,
                'name' => 'گلشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            208 => 
            array (
                'id' => 209,
                'province_id' => 4,
                'county_id' => 66,
                'name' => 'گوگد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            209 => 
            array (
                'id' => 210,
                'province_id' => 4,
                'county_id' => 67,
                'name' => 'باغ بهادران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            210 => 
            array (
                'id' => 211,
                'province_id' => 4,
                'county_id' => 67,
                'name' => 'باغشاد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            211 => 
            array (
                'id' => 212,
                'province_id' => 4,
                'county_id' => 67,
                'name' => 'چرمهین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            212 => 
            array (
                'id' => 213,
                'province_id' => 4,
                'county_id' => 67,
                'name' => 'چمگردان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            213 => 
            array (
                'id' => 214,
                'province_id' => 4,
                'county_id' => 67,
                'name' => 'زاینده رود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            214 => 
            array (
                'id' => 215,
                'province_id' => 4,
                'county_id' => 67,
                'name' => 'زرین شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            215 => 
            array (
                'id' => 216,
                'province_id' => 4,
                'county_id' => 67,
                'name' => 'سده لنجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            216 => 
            array (
                'id' => 217,
                'province_id' => 4,
                'county_id' => 67,
                'name' => 'فولادشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            217 => 
            array (
                'id' => 218,
                'province_id' => 4,
                'county_id' => 67,
                'name' => 'ورنامخواست',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            218 => 
            array (
                'id' => 219,
                'province_id' => 4,
                'county_id' => 68,
                'name' => 'دیزیچه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            219 => 
            array (
                'id' => 220,
                'province_id' => 4,
                'county_id' => 68,
                'name' => 'زیباشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            220 => 
            array (
                'id' => 221,
                'province_id' => 4,
                'county_id' => 68,
                'name' => 'طالخونچه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            221 => 
            array (
                'id' => 222,
                'province_id' => 4,
                'county_id' => 68,
                'name' => 'کرکوند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            222 => 
            array (
                'id' => 223,
                'province_id' => 4,
                'county_id' => 68,
                'name' => 'مبارکه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            223 => 
            array (
                'id' => 224,
                'province_id' => 4,
                'county_id' => 68,
                'name' => 'مجلسی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            224 => 
            array (
                'id' => 225,
                'province_id' => 4,
                'county_id' => 69,
                'name' => 'انارک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            225 => 
            array (
                'id' => 226,
                'province_id' => 4,
                'county_id' => 69,
                'name' => 'بافران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            226 => 
            array (
                'id' => 227,
                'province_id' => 4,
                'county_id' => 69,
                'name' => 'نایین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            227 => 
            array (
                'id' => 228,
                'province_id' => 4,
                'county_id' => 70,
                'name' => 'جوزدان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            228 => 
            array (
                'id' => 229,
                'province_id' => 4,
                'county_id' => 70,
                'name' => 'دهق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            229 => 
            array (
                'id' => 230,
                'province_id' => 4,
                'county_id' => 70,
                'name' => 'علویجه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            230 => 
            array (
                'id' => 231,
                'province_id' => 4,
                'county_id' => 70,
                'name' => 'کهریزسنگ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            231 => 
            array (
                'id' => 232,
                'province_id' => 4,
                'county_id' => 70,
                'name' => 'گلدشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            232 => 
            array (
                'id' => 233,
                'province_id' => 4,
                'county_id' => 70,
                'name' => 'نجف آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            233 => 
            array (
                'id' => 234,
                'province_id' => 4,
                'county_id' => 71,
                'name' => 'بادرود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            234 => 
            array (
                'id' => 235,
                'province_id' => 4,
                'county_id' => 71,
                'name' => 'خالدآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            235 => 
            array (
                'id' => 236,
                'province_id' => 4,
                'county_id' => 71,
                'name' => 'طرق رود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            236 => 
            array (
                'id' => 237,
                'province_id' => 4,
                'county_id' => 71,
                'name' => 'نطنز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            237 => 
            array (
                'id' => 238,
                'province_id' => 5,
                'county_id' => 72,
                'name' => 'اشتهارد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            238 => 
            array (
                'id' => 239,
                'province_id' => 5,
                'county_id' => 73,
                'name' => 'چهارباغ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            239 => 
            array (
                'id' => 240,
                'province_id' => 5,
                'county_id' => 73,
                'name' => 'شهرجدیدهشتگرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            240 => 
            array (
                'id' => 241,
                'province_id' => 5,
                'county_id' => 73,
                'name' => 'کوهسار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            241 => 
            array (
                'id' => 242,
                'province_id' => 5,
                'county_id' => 73,
                'name' => 'گلسار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            242 => 
            array (
                'id' => 243,
                'province_id' => 5,
                'county_id' => 73,
                'name' => 'هشتگرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            243 => 
            array (
                'id' => 244,
                'province_id' => 5,
                'county_id' => 74,
                'name' => 'طالقان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            244 => 
            array (
                'id' => 245,
                'province_id' => 5,
                'county_id' => 75,
                'name' => 'فردیس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            245 => 
            array (
                'id' => 246,
                'province_id' => 5,
                'county_id' => 75,
                'name' => 'مشکین دشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            246 => 
            array (
                'id' => 247,
                'province_id' => 5,
                'county_id' => 76,
                'name' => 'آسارا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            247 => 
            array (
                'id' => 248,
                'province_id' => 5,
                'county_id' => 76,
                'name' => 'کرج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            248 => 
            array (
                'id' => 249,
                'province_id' => 5,
                'county_id' => 76,
                'name' => 'کمال شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            249 => 
            array (
                'id' => 250,
                'province_id' => 5,
                'county_id' => 76,
                'name' => 'گرمدره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            250 => 
            array (
                'id' => 251,
                'province_id' => 5,
                'county_id' => 76,
                'name' => 'ماهدشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            251 => 
            array (
                'id' => 252,
                'province_id' => 5,
                'county_id' => 76,
                'name' => 'محمدشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            252 => 
            array (
                'id' => 253,
                'province_id' => 5,
                'county_id' => 77,
                'name' => 'تنکمان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            253 => 
            array (
                'id' => 254,
                'province_id' => 5,
                'county_id' => 77,
                'name' => 'نظرآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            254 => 
            array (
                'id' => 255,
                'province_id' => 6,
                'county_id' => 78,
                'name' => 'آبدانان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            255 => 
            array (
                'id' => 256,
                'province_id' => 6,
                'county_id' => 78,
                'name' => 'سراب باغ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            256 => 
            array (
                'id' => 257,
                'province_id' => 6,
                'county_id' => 78,
                'name' => 'مورموری',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            257 => 
            array (
                'id' => 258,
                'province_id' => 6,
                'county_id' => 79,
                'name' => 'ایلام',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            258 => 
            array (
                'id' => 259,
                'province_id' => 6,
                'county_id' => 79,
                'name' => 'چوار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            259 => 
            array (
                'id' => 260,
                'province_id' => 6,
                'county_id' => 80,
                'name' => 'ایوان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            260 => 
            array (
                'id' => 261,
                'province_id' => 6,
                'county_id' => 80,
                'name' => 'زرنه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            261 => 
            array (
                'id' => 262,
                'province_id' => 6,
                'county_id' => 81,
                'name' => 'بدره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            262 => 
            array (
                'id' => 263,
                'province_id' => 6,
                'county_id' => 82,
                'name' => 'آسمان آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            263 => 
            array (
                'id' => 264,
                'province_id' => 6,
                'county_id' => 82,
                'name' => 'بلاوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            264 => 
            array (
                'id' => 265,
                'province_id' => 6,
                'county_id' => 82,
                'name' => 'توحید',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            265 => 
            array (
                'id' => 266,
                'province_id' => 6,
                'county_id' => 82,
                'name' => 'سرابله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            266 => 
            array (
                'id' => 267,
                'province_id' => 6,
                'county_id' => 82,
                'name' => 'شباب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            267 => 
            array (
                'id' => 268,
                'province_id' => 6,
                'county_id' => 83,
                'name' => 'دره شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            268 => 
            array (
                'id' => 269,
                'province_id' => 6,
                'county_id' => 83,
                'name' => 'ماژین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            269 => 
            array (
                'id' => 270,
                'province_id' => 6,
                'county_id' => 84,
                'name' => 'پهله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            270 => 
            array (
                'id' => 271,
                'province_id' => 6,
                'county_id' => 84,
                'name' => 'دهلران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            271 => 
            array (
                'id' => 272,
                'province_id' => 6,
                'county_id' => 84,
                'name' => 'موسیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            272 => 
            array (
                'id' => 273,
                'province_id' => 6,
                'county_id' => 84,
                'name' => 'میمه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            273 => 
            array (
                'id' => 274,
                'province_id' => 6,
                'county_id' => 85,
                'name' => 'لومار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            274 => 
            array (
                'id' => 275,
                'province_id' => 6,
                'county_id' => 86,
                'name' => 'ارکواز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            275 => 
            array (
                'id' => 276,
                'province_id' => 6,
                'county_id' => 86,
                'name' => 'دلگشا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            276 => 
            array (
                'id' => 277,
                'province_id' => 6,
                'county_id' => 86,
                'name' => 'مهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            277 => 
            array (
                'id' => 278,
                'province_id' => 6,
                'county_id' => 87,
                'name' => 'صالح آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            278 => 
            array (
                'id' => 279,
                'province_id' => 6,
                'county_id' => 87,
                'name' => 'مهران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            279 => 
            array (
                'id' => 280,
                'province_id' => 7,
                'county_id' => 88,
                'name' => 'بوشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            280 => 
            array (
                'id' => 281,
                'province_id' => 7,
                'county_id' => 88,
                'name' => 'چغادک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            281 => 
            array (
                'id' => 282,
                'province_id' => 7,
                'county_id' => 88,
                'name' => 'خارک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            282 => 
            array (
                'id' => 283,
                'province_id' => 7,
                'county_id' => 88,
                'name' => 'عالی شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            283 => 
            array (
                'id' => 284,
                'province_id' => 7,
                'county_id' => 89,
                'name' => 'آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            284 => 
            array (
                'id' => 285,
                'province_id' => 7,
                'county_id' => 89,
                'name' => 'اهرم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            285 => 
            array (
                'id' => 286,
                'province_id' => 7,
                'county_id' => 89,
                'name' => 'دلوار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            286 => 
            array (
                'id' => 287,
                'province_id' => 7,
                'county_id' => 90,
                'name' => 'انارستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            287 => 
            array (
                'id' => 288,
                'province_id' => 7,
                'county_id' => 90,
                'name' => 'جم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            288 => 
            array (
                'id' => 289,
                'province_id' => 7,
                'county_id' => 90,
                'name' => 'ریز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            289 => 
            array (
                'id' => 290,
                'province_id' => 7,
                'county_id' => 91,
                'name' => 'آب پخش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            290 => 
            array (
                'id' => 291,
                'province_id' => 7,
                'county_id' => 91,
                'name' => 'برازجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            291 => 
            array (
                'id' => 292,
                'province_id' => 7,
                'county_id' => 91,
                'name' => 'بوشکان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            292 => 
            array (
                'id' => 293,
                'province_id' => 7,
                'county_id' => 91,
                'name' => 'تنگ ارم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            293 => 
            array (
                'id' => 294,
                'province_id' => 7,
                'county_id' => 91,
                'name' => 'دالکی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            294 => 
            array (
                'id' => 295,
                'province_id' => 7,
                'county_id' => 91,
                'name' => 'سعد آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            295 => 
            array (
                'id' => 296,
                'province_id' => 7,
                'county_id' => 91,
                'name' => 'شبانکاره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            296 => 
            array (
                'id' => 297,
                'province_id' => 7,
                'county_id' => 91,
                'name' => 'کلمه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            297 => 
            array (
                'id' => 298,
                'province_id' => 7,
                'county_id' => 91,
                'name' => 'وحدتیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            298 => 
            array (
                'id' => 299,
                'province_id' => 7,
                'county_id' => 92,
                'name' => 'بادوله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            299 => 
            array (
                'id' => 300,
                'province_id' => 7,
                'county_id' => 92,
                'name' => 'خورموج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            300 => 
            array (
                'id' => 301,
                'province_id' => 7,
                'county_id' => 92,
                'name' => 'شنبه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            301 => 
            array (
                'id' => 302,
                'province_id' => 7,
                'county_id' => 92,
                'name' => 'کاکی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            302 => 
            array (
                'id' => 303,
                'province_id' => 7,
                'county_id' => 93,
                'name' => 'آبدان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            303 => 
            array (
                'id' => 304,
                'province_id' => 7,
                'county_id' => 93,
                'name' => 'بردخون',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            304 => 
            array (
                'id' => 305,
                'province_id' => 7,
                'county_id' => 93,
                'name' => 'بردستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            305 => 
            array (
                'id' => 306,
                'province_id' => 7,
                'county_id' => 93,
                'name' => 'بندردیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            306 => 
            array (
                'id' => 307,
                'province_id' => 7,
                'county_id' => 93,
                'name' => 'دوراهک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            307 => 
            array (
                'id' => 308,
                'province_id' => 7,
                'county_id' => 94,
                'name' => 'امام حسن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            308 => 
            array (
                'id' => 309,
                'province_id' => 7,
                'county_id' => 94,
                'name' => 'بندردیلم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            309 => 
            array (
                'id' => 310,
                'province_id' => 7,
                'county_id' => 95,
                'name' => 'عسلویه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            310 => 
            array (
                'id' => 311,
                'province_id' => 7,
                'county_id' => 95,
                'name' => 'نخل تقی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            311 => 
            array (
                'id' => 312,
                'province_id' => 7,
                'county_id' => 96,
                'name' => 'بندرکنگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            312 => 
            array (
                'id' => 313,
                'province_id' => 7,
                'county_id' => 96,
                'name' => 'بنک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            313 => 
            array (
                'id' => 314,
                'province_id' => 7,
                'county_id' => 96,
                'name' => 'سیراف',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            314 => 
            array (
                'id' => 315,
                'province_id' => 7,
                'county_id' => 97,
                'name' => 'بندرریگ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            315 => 
            array (
                'id' => 316,
                'province_id' => 7,
                'county_id' => 97,
                'name' => 'بندرگناوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            316 => 
            array (
                'id' => 317,
                'province_id' => 8,
                'county_id' => 98,
                'name' => 'احمد آباد مستوفی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            317 => 
            array (
                'id' => 318,
                'province_id' => 8,
                'county_id' => 98,
                'name' => 'اسلامشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            318 => 
            array (
                'id' => 319,
                'province_id' => 8,
                'county_id' => 98,
                'name' => 'چهاردانگه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            319 => 
            array (
                'id' => 320,
                'province_id' => 8,
                'county_id' => 99,
                'name' => 'صالحیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            320 => 
            array (
                'id' => 321,
                'province_id' => 8,
                'county_id' => 99,
                'name' => 'گلستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            321 => 
            array (
                'id' => 322,
                'province_id' => 8,
                'county_id' => 99,
                'name' => 'نسیم شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            322 => 
            array (
                'id' => 323,
                'province_id' => 8,
                'county_id' => 100,
                'name' => 'پاکدشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            323 => 
            array (
                'id' => 324,
                'province_id' => 8,
                'county_id' => 100,
                'name' => 'شریف آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            324 => 
            array (
                'id' => 325,
                'province_id' => 8,
                'county_id' => 100,
                'name' => 'فرون اباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            325 => 
            array (
                'id' => 326,
                'province_id' => 8,
                'county_id' => 101,
                'name' => 'بومهن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            326 => 
            array (
                'id' => 327,
                'province_id' => 8,
                'county_id' => 101,
                'name' => 'پردیس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            327 => 
            array (
                'id' => 328,
                'province_id' => 8,
                'county_id' => 102,
                'name' => 'پیشوا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            328 => 
            array (
                'id' => 329,
                'province_id' => 8,
                'county_id' => 103,
                'name' => 'تهران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            329 => 
            array (
                'id' => 330,
                'province_id' => 8,
                'county_id' => 104,
                'name' => 'آبسرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            330 => 
            array (
                'id' => 331,
                'province_id' => 8,
                'county_id' => 104,
                'name' => 'آبعلی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            331 => 
            array (
                'id' => 332,
                'province_id' => 8,
                'county_id' => 104,
                'name' => 'دماوند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            332 => 
            array (
                'id' => 333,
                'province_id' => 8,
                'county_id' => 104,
                'name' => 'رودهن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            333 => 
            array (
                'id' => 334,
                'province_id' => 8,
                'county_id' => 104,
                'name' => 'کیلان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            334 => 
            array (
                'id' => 335,
                'province_id' => 8,
                'county_id' => 105,
                'name' => 'پرند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            335 => 
            array (
                'id' => 336,
                'province_id' => 8,
                'county_id' => 105,
                'name' => 'رباطکریم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            336 => 
            array (
                'id' => 337,
                'province_id' => 8,
                'county_id' => 105,
                'name' => 'نصیرشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            337 => 
            array (
                'id' => 338,
                'province_id' => 8,
                'county_id' => 106,
                'name' => 'باقرشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            338 => 
            array (
                'id' => 339,
                'province_id' => 8,
                'county_id' => 106,
                'name' => 'حسن آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            339 => 
            array (
                'id' => 340,
                'province_id' => 8,
                'county_id' => 106,
                'name' => 'ری',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            340 => 
            array (
                'id' => 341,
                'province_id' => 8,
                'county_id' => 106,
                'name' => 'کهریزک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            341 => 
            array (
                'id' => 342,
                'province_id' => 8,
                'county_id' => 107,
                'name' => 'تجریش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            342 => 
            array (
                'id' => 343,
                'province_id' => 8,
                'county_id' => 107,
                'name' => 'شمشک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            343 => 
            array (
                'id' => 344,
                'province_id' => 8,
                'county_id' => 107,
                'name' => 'فشم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            344 => 
            array (
                'id' => 345,
                'province_id' => 8,
                'county_id' => 107,
                'name' => 'لواسان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            345 => 
            array (
                'id' => 346,
                'province_id' => 8,
                'county_id' => 108,
                'name' => 'اندیشه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            346 => 
            array (
                'id' => 347,
                'province_id' => 8,
                'county_id' => 108,
                'name' => 'باغستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            347 => 
            array (
                'id' => 348,
                'province_id' => 8,
                'county_id' => 108,
                'name' => 'شاهدشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            348 => 
            array (
                'id' => 349,
                'province_id' => 8,
                'county_id' => 108,
                'name' => 'شهریار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            349 => 
            array (
                'id' => 350,
                'province_id' => 8,
                'county_id' => 108,
                'name' => 'صباشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            350 => 
            array (
                'id' => 351,
                'province_id' => 8,
                'county_id' => 108,
                'name' => 'فردوسیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            351 => 
            array (
                'id' => 352,
                'province_id' => 8,
                'county_id' => 108,
                'name' => 'وحیدیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            352 => 
            array (
                'id' => 353,
                'province_id' => 8,
                'county_id' => 109,
                'name' => 'ارجمند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            353 => 
            array (
                'id' => 354,
                'province_id' => 8,
                'county_id' => 109,
                'name' => 'فیروزکوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            354 => 
            array (
                'id' => 355,
                'province_id' => 8,
                'county_id' => 110,
                'name' => 'قدس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            355 => 
            array (
                'id' => 356,
                'province_id' => 8,
                'county_id' => 111,
                'name' => 'قرچک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            356 => 
            array (
                'id' => 357,
                'province_id' => 8,
                'county_id' => 112,
                'name' => 'صفادشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            357 => 
            array (
                'id' => 358,
                'province_id' => 8,
                'county_id' => 112,
                'name' => 'ملارد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            358 => 
            array (
                'id' => 359,
                'province_id' => 8,
                'county_id' => 113,
                'name' => 'جوادآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            359 => 
            array (
                'id' => 360,
                'province_id' => 8,
                'county_id' => 113,
                'name' => 'ورامین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            360 => 
            array (
                'id' => 361,
                'province_id' => 9,
                'county_id' => 114,
                'name' => 'اردل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            361 => 
            array (
                'id' => 362,
                'province_id' => 9,
                'county_id' => 114,
                'name' => 'دشتک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            362 => 
            array (
                'id' => 363,
                'province_id' => 9,
                'county_id' => 114,
                'name' => 'سرخون',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            363 => 
            array (
                'id' => 364,
                'province_id' => 9,
                'county_id' => 114,
                'name' => 'کاج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            364 => 
            array (
                'id' => 365,
                'province_id' => 9,
                'county_id' => 115,
                'name' => 'بروجن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            365 => 
            array (
                'id' => 366,
                'province_id' => 9,
                'county_id' => 115,
                'name' => 'بلداجی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            366 => 
            array (
                'id' => 367,
                'province_id' => 9,
                'county_id' => 115,
                'name' => 'سفیددشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            367 => 
            array (
                'id' => 368,
                'province_id' => 9,
                'county_id' => 115,
                'name' => 'فرادبنه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            368 => 
            array (
                'id' => 369,
                'province_id' => 9,
                'county_id' => 115,
                'name' => 'گندمان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            369 => 
            array (
                'id' => 370,
                'province_id' => 9,
                'county_id' => 115,
                'name' => 'نقنه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            370 => 
            array (
                'id' => 371,
                'province_id' => 9,
                'county_id' => 116,
                'name' => 'بن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            371 => 
            array (
                'id' => 372,
                'province_id' => 9,
                'county_id' => 116,
                'name' => 'وردنجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            372 => 
            array (
                'id' => 373,
                'province_id' => 9,
                'county_id' => 117,
                'name' => 'سامان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            373 => 
            array (
                'id' => 374,
                'province_id' => 9,
                'county_id' => 118,
                'name' => 'سودجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            374 => 
            array (
                'id' => 375,
                'province_id' => 9,
                'county_id' => 118,
                'name' => 'سورشجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            375 => 
            array (
                'id' => 376,
                'province_id' => 9,
                'county_id' => 118,
                'name' => 'شهرکرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            376 => 
            array (
                'id' => 377,
                'province_id' => 9,
                'county_id' => 118,
                'name' => 'طاقانک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            377 => 
            array (
                'id' => 378,
                'province_id' => 9,
                'county_id' => 118,
                'name' => 'فرخ شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            378 => 
            array (
                'id' => 379,
                'province_id' => 9,
                'county_id' => 118,
                'name' => 'کیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            379 => 
            array (
                'id' => 380,
                'province_id' => 9,
                'county_id' => 118,
                'name' => 'نافچ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            380 => 
            array (
                'id' => 381,
                'province_id' => 9,
                'county_id' => 118,
                'name' => 'هارونی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            381 => 
            array (
                'id' => 382,
                'province_id' => 9,
                'county_id' => 118,
                'name' => 'هفشجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            382 => 
            array (
                'id' => 383,
                'province_id' => 9,
                'county_id' => 119,
                'name' => 'باباحیدر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            383 => 
            array (
                'id' => 384,
                'province_id' => 9,
                'county_id' => 119,
                'name' => 'پردنجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            384 => 
            array (
                'id' => 385,
                'province_id' => 9,
                'county_id' => 119,
                'name' => 'جونقان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            385 => 
            array (
                'id' => 386,
                'province_id' => 9,
                'county_id' => 119,
                'name' => 'چلیچه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            386 => 
            array (
                'id' => 387,
                'province_id' => 9,
                'county_id' => 119,
                'name' => 'فارسان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            387 => 
            array (
                'id' => 388,
                'province_id' => 9,
                'county_id' => 119,
                'name' => 'گوجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            388 => 
            array (
                'id' => 389,
                'province_id' => 9,
                'county_id' => 120,
                'name' => 'بازفت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            389 => 
            array (
                'id' => 390,
                'province_id' => 9,
                'county_id' => 120,
                'name' => 'چلگرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            390 => 
            array (
                'id' => 391,
                'province_id' => 9,
                'county_id' => 120,
                'name' => 'صمصامی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            391 => 
            array (
                'id' => 392,
                'province_id' => 9,
                'county_id' => 121,
                'name' => 'دستنا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            392 => 
            array (
                'id' => 393,
                'province_id' => 9,
                'county_id' => 121,
                'name' => 'شلمزار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            393 => 
            array (
                'id' => 394,
                'province_id' => 9,
                'county_id' => 121,
                'name' => 'گهرو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            394 => 
            array (
                'id' => 395,
                'province_id' => 9,
                'county_id' => 121,
                'name' => 'ناغان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            395 => 
            array (
                'id' => 396,
                'province_id' => 9,
                'county_id' => 122,
                'name' => 'آلونی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            396 => 
            array (
                'id' => 397,
                'province_id' => 9,
                'county_id' => 122,
                'name' => 'سردشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            397 => 
            array (
                'id' => 398,
                'province_id' => 9,
                'county_id' => 122,
                'name' => 'لردگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            398 => 
            array (
                'id' => 399,
                'province_id' => 9,
                'county_id' => 122,
                'name' => 'مال خلیفه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            399 => 
            array (
                'id' => 400,
                'province_id' => 9,
                'county_id' => 122,
                'name' => 'منج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            400 => 
            array (
                'id' => 401,
                'province_id' => 10,
                'county_id' => 123,
                'name' => 'ارسک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            401 => 
            array (
                'id' => 402,
                'province_id' => 10,
                'county_id' => 123,
                'name' => 'بشرویه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            402 => 
            array (
                'id' => 403,
                'province_id' => 10,
                'county_id' => 124,
                'name' => 'بیرجند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            403 => 
            array (
                'id' => 404,
                'province_id' => 10,
                'county_id' => 125,
                'name' => 'خوسف',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            404 => 
            array (
                'id' => 405,
                'province_id' => 10,
                'county_id' => 125,
                'name' => 'محمدشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            405 => 
            array (
                'id' => 406,
                'province_id' => 10,
                'county_id' => 126,
                'name' => 'اسدیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            406 => 
            array (
                'id' => 407,
                'province_id' => 10,
                'county_id' => 126,
                'name' => 'طبس مسینا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            407 => 
            array (
                'id' => 408,
                'province_id' => 10,
                'county_id' => 126,
                'name' => 'قهستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            408 => 
            array (
                'id' => 409,
                'province_id' => 10,
                'county_id' => 126,
                'name' => 'گزیک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            409 => 
            array (
                'id' => 410,
                'province_id' => 10,
                'county_id' => 127,
                'name' => 'حاجی آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            410 => 
            array (
                'id' => 411,
                'province_id' => 10,
                'county_id' => 127,
                'name' => 'زهان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            411 => 
            array (
                'id' => 412,
                'province_id' => 10,
                'county_id' => 128,
                'name' => 'آیسک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            412 => 
            array (
                'id' => 413,
                'province_id' => 10,
                'county_id' => 128,
                'name' => 'سرایان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            413 => 
            array (
                'id' => 414,
                'province_id' => 10,
                'county_id' => 128,
                'name' => 'سه قلعه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            414 => 
            array (
                'id' => 415,
                'province_id' => 10,
                'county_id' => 129,
                'name' => 'سربیشه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            415 => 
            array (
                'id' => 416,
                'province_id' => 10,
                'county_id' => 129,
                'name' => 'مود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            416 => 
            array (
                'id' => 417,
                'province_id' => 10,
                'county_id' => 130,
                'name' => 'دیهوک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            417 => 
            array (
                'id' => 418,
                'province_id' => 10,
                'county_id' => 130,
                'name' => 'طبس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            418 => 
            array (
                'id' => 419,
                'province_id' => 10,
                'county_id' => 130,
                'name' => 'عشق آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            419 => 
            array (
                'id' => 420,
                'province_id' => 10,
                'county_id' => 131,
                'name' => 'اسلامیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            420 => 
            array (
                'id' => 421,
                'province_id' => 10,
                'county_id' => 131,
                'name' => 'فردوس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            421 => 
            array (
                'id' => 422,
                'province_id' => 10,
                'county_id' => 132,
                'name' => 'آرین شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            422 => 
            array (
                'id' => 423,
                'province_id' => 10,
                'county_id' => 132,
                'name' => 'اسفدن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            423 => 
            array (
                'id' => 424,
                'province_id' => 10,
                'county_id' => 132,
                'name' => 'خضری دشت بیاض',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            424 => 
            array (
                'id' => 425,
                'province_id' => 10,
                'county_id' => 132,
                'name' => 'قاین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            425 => 
            array (
                'id' => 426,
                'province_id' => 10,
                'county_id' => 132,
                'name' => 'نیمبلوک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            426 => 
            array (
                'id' => 427,
                'province_id' => 10,
                'county_id' => 133,
                'name' => 'شوسف',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            427 => 
            array (
                'id' => 428,
                'province_id' => 10,
                'county_id' => 133,
                'name' => 'نهبندان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            428 => 
            array (
                'id' => 429,
                'province_id' => 11,
                'county_id' => 134,
                'name' => 'باخرز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            429 => 
            array (
                'id' => 430,
                'province_id' => 11,
                'county_id' => 135,
                'name' => 'بجستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            430 => 
            array (
                'id' => 431,
                'province_id' => 11,
                'county_id' => 135,
                'name' => 'یونسی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            431 => 
            array (
                'id' => 432,
                'province_id' => 11,
                'county_id' => 136,
                'name' => 'انابد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            432 => 
            array (
                'id' => 433,
                'province_id' => 11,
                'county_id' => 136,
                'name' => 'بردسکن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            433 => 
            array (
                'id' => 434,
                'province_id' => 11,
                'county_id' => 136,
                'name' => 'شهراباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            434 => 
            array (
                'id' => 435,
                'province_id' => 11,
                'county_id' => 137,
                'name' => 'شاندیز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            435 => 
            array (
                'id' => 436,
                'province_id' => 11,
                'county_id' => 137,
                'name' => 'طرقبه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            436 => 
            array (
                'id' => 437,
                'province_id' => 11,
                'county_id' => 138,
                'name' => 'تایباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            437 => 
            array (
                'id' => 438,
                'province_id' => 11,
                'county_id' => 138,
                'name' => 'کاریز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            438 => 
            array (
                'id' => 439,
                'province_id' => 11,
                'county_id' => 138,
                'name' => 'مشهدریزه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            439 => 
            array (
                'id' => 440,
                'province_id' => 11,
                'county_id' => 139,
                'name' => 'احمدابادصولت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            440 => 
            array (
                'id' => 441,
                'province_id' => 11,
                'county_id' => 139,
                'name' => 'تربت جام',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            441 => 
            array (
                'id' => 442,
                'province_id' => 11,
                'county_id' => 139,
                'name' => 'صالح آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            442 => 
            array (
                'id' => 443,
                'province_id' => 11,
                'county_id' => 139,
                'name' => 'نصرآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            443 => 
            array (
                'id' => 444,
                'province_id' => 11,
                'county_id' => 139,
                'name' => 'نیل شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            444 => 
            array (
                'id' => 445,
                'province_id' => 11,
                'county_id' => 140,
                'name' => 'بایک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            445 => 
            array (
                'id' => 446,
                'province_id' => 11,
                'county_id' => 140,
                'name' => 'تربت حیدریه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            446 => 
            array (
                'id' => 447,
                'province_id' => 11,
                'county_id' => 140,
                'name' => 'رباط سنگ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            447 => 
            array (
                'id' => 448,
                'province_id' => 11,
                'county_id' => 140,
                'name' => 'کدکن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            448 => 
            array (
                'id' => 449,
                'province_id' => 11,
                'county_id' => 141,
                'name' => 'جغتای',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            449 => 
            array (
                'id' => 450,
                'province_id' => 11,
                'county_id' => 142,
                'name' => 'نقاب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            450 => 
            array (
                'id' => 451,
                'province_id' => 11,
                'county_id' => 143,
                'name' => 'چناران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            451 => 
            array (
                'id' => 452,
                'province_id' => 11,
                'county_id' => 143,
                'name' => 'گلبهار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            452 => 
            array (
                'id' => 453,
                'province_id' => 11,
                'county_id' => 143,
                'name' => 'گلمکان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            453 => 
            array (
                'id' => 454,
                'province_id' => 11,
                'county_id' => 144,
                'name' => 'خلیل آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            454 => 
            array (
                'id' => 455,
                'province_id' => 11,
                'county_id' => 144,
                'name' => 'کندر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            455 => 
            array (
                'id' => 456,
                'province_id' => 11,
                'county_id' => 145,
                'name' => 'خواف',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            456 => 
            array (
                'id' => 457,
                'province_id' => 11,
                'county_id' => 145,
                'name' => 'سلامی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            457 => 
            array (
                'id' => 458,
                'province_id' => 11,
                'county_id' => 145,
                'name' => 'سنگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            458 => 
            array (
                'id' => 459,
                'province_id' => 11,
                'county_id' => 145,
                'name' => 'قاسم آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            459 => 
            array (
                'id' => 460,
                'province_id' => 11,
                'county_id' => 145,
                'name' => 'نشتیفان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            460 => 
            array (
                'id' => 461,
                'province_id' => 11,
                'county_id' => 146,
                'name' => 'سلطان آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            461 => 
            array (
                'id' => 462,
                'province_id' => 11,
                'county_id' => 147,
                'name' => 'داورزن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            462 => 
            array (
                'id' => 463,
                'province_id' => 11,
                'county_id' => 148,
                'name' => 'چاپشلو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            463 => 
            array (
                'id' => 464,
                'province_id' => 11,
                'county_id' => 148,
                'name' => 'درگز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            464 => 
            array (
                'id' => 465,
                'province_id' => 11,
                'county_id' => 148,
                'name' => 'لطف آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            465 => 
            array (
                'id' => 466,
                'province_id' => 11,
                'county_id' => 148,
                'name' => 'نوخندان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            466 => 
            array (
                'id' => 467,
                'province_id' => 11,
                'county_id' => 149,
                'name' => 'جنگل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            467 => 
            array (
                'id' => 468,
                'province_id' => 11,
                'county_id' => 149,
                'name' => 'رشتخوار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            468 => 
            array (
                'id' => 469,
                'province_id' => 11,
                'county_id' => 150,
                'name' => 'دولت آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            469 => 
            array (
                'id' => 470,
                'province_id' => 11,
                'county_id' => 151,
                'name' => 'روداب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            470 => 
            array (
                'id' => 471,
                'province_id' => 11,
                'county_id' => 151,
                'name' => 'سبزوار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            471 => 
            array (
                'id' => 472,
                'province_id' => 11,
                'county_id' => 151,
                'name' => 'ششتمد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            472 => 
            array (
                'id' => 473,
                'province_id' => 11,
                'county_id' => 152,
                'name' => 'سرخس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            473 => 
            array (
                'id' => 474,
                'province_id' => 11,
                'county_id' => 152,
                'name' => 'مزدآوند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            474 => 
            array (
                'id' => 475,
                'province_id' => 11,
                'county_id' => 153,
                'name' => 'سفیدسنگ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            475 => 
            array (
                'id' => 476,
                'province_id' => 11,
                'county_id' => 153,
                'name' => 'فرهادگرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            476 => 
            array (
                'id' => 477,
                'province_id' => 11,
                'county_id' => 153,
                'name' => 'فریمان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            477 => 
            array (
                'id' => 478,
                'province_id' => 11,
                'county_id' => 153,
                'name' => 'قلندرآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            478 => 
            array (
                'id' => 479,
                'province_id' => 11,
                'county_id' => 154,
                'name' => 'فیروزه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            479 => 
            array (
                'id' => 480,
                'province_id' => 11,
                'county_id' => 154,
                'name' => 'همت آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            480 => 
            array (
                'id' => 481,
                'province_id' => 11,
                'county_id' => 155,
                'name' => 'باجگیران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            481 => 
            array (
                'id' => 482,
                'province_id' => 11,
                'county_id' => 155,
                'name' => 'قوچان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            482 => 
            array (
                'id' => 483,
                'province_id' => 11,
                'county_id' => 156,
                'name' => 'ریوش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            483 => 
            array (
                'id' => 484,
                'province_id' => 11,
                'county_id' => 156,
                'name' => 'کاشمر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            484 => 
            array (
                'id' => 485,
                'province_id' => 11,
                'county_id' => 157,
                'name' => 'شهرزو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            485 => 
            array (
                'id' => 486,
                'province_id' => 11,
                'county_id' => 157,
                'name' => 'کلات',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            486 => 
            array (
                'id' => 487,
                'province_id' => 11,
                'county_id' => 158,
                'name' => 'بیدخت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            487 => 
            array (
                'id' => 488,
                'province_id' => 11,
                'county_id' => 158,
                'name' => 'کاخک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            488 => 
            array (
                'id' => 489,
                'province_id' => 11,
                'county_id' => 158,
                'name' => 'گناباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            489 => 
            array (
                'id' => 490,
                'province_id' => 11,
                'county_id' => 159,
                'name' => 'رضویه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            490 => 
            array (
                'id' => 491,
                'province_id' => 11,
                'county_id' => 159,
                'name' => 'مشهد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            491 => 
            array (
                'id' => 492,
                'province_id' => 11,
                'county_id' => 159,
                'name' => 'مشهد ثامن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            492 => 
            array (
                'id' => 493,
                'province_id' => 11,
                'county_id' => 159,
                'name' => 'ملک آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            493 => 
            array (
                'id' => 494,
                'province_id' => 11,
                'county_id' => 160,
                'name' => 'شادمهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            494 => 
            array (
                'id' => 495,
                'province_id' => 11,
                'county_id' => 160,
                'name' => 'فیض آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            495 => 
            array (
                'id' => 496,
                'province_id' => 11,
                'county_id' => 161,
                'name' => 'بار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            496 => 
            array (
                'id' => 497,
                'province_id' => 11,
                'county_id' => 161,
                'name' => 'چکنه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            497 => 
            array (
                'id' => 498,
                'province_id' => 11,
                'county_id' => 161,
                'name' => 'خرو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            498 => 
            array (
                'id' => 499,
                'province_id' => 11,
                'county_id' => 161,
                'name' => 'درود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            499 => 
            array (
                'id' => 500,
                'province_id' => 11,
                'county_id' => 161,
                'name' => 'عشق آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        \DB::table('cities')->insert(array (
            0 => 
            array (
                'id' => 501,
                'province_id' => 11,
                'county_id' => 161,
                'name' => 'قدمگاه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 502,
                'province_id' => 11,
                'county_id' => 161,
                'name' => 'نیشابور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 503,
                'province_id' => 12,
                'county_id' => 162,
                'name' => 'اسفراین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 504,
                'province_id' => 12,
                'county_id' => 162,
                'name' => 'صفی آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 505,
                'province_id' => 12,
                'county_id' => 163,
                'name' => 'بجنورد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 506,
                'province_id' => 12,
                'county_id' => 163,
                'name' => 'چناران شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 507,
                'province_id' => 12,
                'county_id' => 163,
                'name' => 'حصارگرمخان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            7 => 
            array (
                'id' => 508,
                'province_id' => 12,
                'county_id' => 164,
                'name' => 'جاجرم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            8 => 
            array (
                'id' => 509,
                'province_id' => 12,
                'county_id' => 164,
                'name' => 'سنخواست',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            9 => 
            array (
                'id' => 510,
                'province_id' => 12,
                'county_id' => 164,
                'name' => 'شوقان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            10 => 
            array (
                'id' => 511,
                'province_id' => 12,
                'county_id' => 165,
                'name' => 'راز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            11 => 
            array (
                'id' => 512,
                'province_id' => 12,
                'county_id' => 166,
                'name' => 'زیارت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            12 => 
            array (
                'id' => 513,
                'province_id' => 12,
                'county_id' => 166,
                'name' => 'شیروان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            13 => 
            array (
                'id' => 514,
                'province_id' => 12,
                'county_id' => 166,
                'name' => 'قوشخانه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            14 => 
            array (
                'id' => 515,
                'province_id' => 12,
                'county_id' => 166,
                'name' => 'لوجلی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            15 => 
            array (
                'id' => 516,
                'province_id' => 12,
                'county_id' => 167,
                'name' => 'تیتکانلو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            16 => 
            array (
                'id' => 517,
                'province_id' => 12,
                'county_id' => 167,
                'name' => 'فاروج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            17 => 
            array (
                'id' => 518,
                'province_id' => 12,
                'county_id' => 168,
                'name' => 'ایور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            18 => 
            array (
                'id' => 519,
                'province_id' => 12,
                'county_id' => 168,
                'name' => 'درق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            19 => 
            array (
                'id' => 520,
                'province_id' => 12,
                'county_id' => 168,
                'name' => 'گرمه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            20 => 
            array (
                'id' => 521,
                'province_id' => 12,
                'county_id' => 169,
                'name' => 'آشخانه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            21 => 
            array (
                'id' => 522,
                'province_id' => 12,
                'county_id' => 169,
                'name' => 'آوا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            22 => 
            array (
                'id' => 523,
                'province_id' => 12,
                'county_id' => 169,
                'name' => 'پیش قلعه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            23 => 
            array (
                'id' => 524,
                'province_id' => 12,
                'county_id' => 169,
                'name' => 'قاضی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            24 => 
            array (
                'id' => 525,
                'province_id' => 13,
                'county_id' => 170,
                'name' => 'آبادان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            25 => 
            array (
                'id' => 526,
                'province_id' => 13,
                'county_id' => 170,
                'name' => 'اروندکنار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            26 => 
            array (
                'id' => 527,
                'province_id' => 13,
                'county_id' => 170,
                'name' => 'چویبده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            27 => 
            array (
                'id' => 528,
                'province_id' => 13,
                'county_id' => 171,
                'name' => 'آغاجاری',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            28 => 
            array (
                'id' => 529,
                'province_id' => 13,
                'county_id' => 172,
                'name' => 'امیدیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            29 => 
            array (
                'id' => 530,
                'province_id' => 13,
                'county_id' => 172,
                'name' => 'جایزان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            30 => 
            array (
                'id' => 531,
                'province_id' => 13,
                'county_id' => 173,
                'name' => 'آبژدان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            31 => 
            array (
                'id' => 532,
                'province_id' => 13,
                'county_id' => 173,
                'name' => 'قلعه خواجه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            32 => 
            array (
                'id' => 533,
                'province_id' => 13,
                'county_id' => 174,
                'name' => 'آزادی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            33 => 
            array (
                'id' => 534,
                'province_id' => 13,
                'county_id' => 174,
                'name' => 'اندیمشک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            34 => 
            array (
                'id' => 535,
                'province_id' => 13,
                'county_id' => 174,
                'name' => 'بیدروبه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            35 => 
            array (
                'id' => 536,
                'province_id' => 13,
                'county_id' => 174,
                'name' => 'چم گلک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            36 => 
            array (
                'id' => 537,
                'province_id' => 13,
                'county_id' => 174,
                'name' => 'حسینیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            37 => 
            array (
                'id' => 538,
                'province_id' => 13,
                'county_id' => 175,
                'name' => 'الهایی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            38 => 
            array (
                'id' => 539,
                'province_id' => 13,
                'county_id' => 175,
                'name' => 'اهواز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            39 => 
            array (
                'id' => 540,
                'province_id' => 13,
                'county_id' => 176,
                'name' => 'ایذه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            40 => 
            array (
                'id' => 541,
                'province_id' => 13,
                'county_id' => 176,
                'name' => 'دهدز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            41 => 
            array (
                'id' => 542,
                'province_id' => 13,
                'county_id' => 177,
                'name' => 'باغ ملک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            42 => 
            array (
                'id' => 543,
                'province_id' => 13,
                'county_id' => 177,
                'name' => 'صیدون',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            43 => 
            array (
                'id' => 544,
                'province_id' => 13,
                'county_id' => 177,
                'name' => 'قلعه تل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            44 => 
            array (
                'id' => 545,
                'province_id' => 13,
                'county_id' => 177,
                'name' => 'میداود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            45 => 
            array (
                'id' => 546,
                'province_id' => 13,
                'county_id' => 178,
                'name' => 'شیبان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            46 => 
            array (
                'id' => 547,
                'province_id' => 13,
                'county_id' => 178,
                'name' => 'ملاثانی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            47 => 
            array (
                'id' => 548,
                'province_id' => 13,
                'county_id' => 178,
                'name' => 'ویس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            48 => 
            array (
                'id' => 549,
                'province_id' => 13,
                'county_id' => 179,
                'name' => 'بندرامام خمینی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            49 => 
            array (
                'id' => 550,
                'province_id' => 13,
                'county_id' => 179,
                'name' => 'بندرماهشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            50 => 
            array (
                'id' => 551,
                'province_id' => 13,
                'county_id' => 179,
                'name' => 'چمران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            51 => 
            array (
                'id' => 552,
                'province_id' => 13,
                'county_id' => 180,
                'name' => 'بهبهان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            52 => 
            array (
                'id' => 553,
                'province_id' => 13,
                'county_id' => 180,
                'name' => 'تشان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            53 => 
            array (
                'id' => 554,
                'province_id' => 13,
                'county_id' => 180,
                'name' => 'سردشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            54 => 
            array (
                'id' => 555,
                'province_id' => 13,
                'county_id' => 180,
                'name' => 'منصوریه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            55 => 
            array (
                'id' => 556,
                'province_id' => 13,
                'county_id' => 181,
                'name' => 'حمیدیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            56 => 
            array (
                'id' => 557,
                'province_id' => 13,
                'county_id' => 182,
                'name' => 'خرمشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            57 => 
            array (
                'id' => 558,
                'province_id' => 13,
                'county_id' => 182,
                'name' => 'مقاومت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            58 => 
            array (
                'id' => 559,
                'province_id' => 13,
                'county_id' => 182,
                'name' => 'مینوشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            59 => 
            array (
                'id' => 560,
                'province_id' => 13,
                'county_id' => 183,
                'name' => 'چغامیش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            60 => 
            array (
                'id' => 561,
                'province_id' => 13,
                'county_id' => 183,
                'name' => 'حمزه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            61 => 
            array (
                'id' => 562,
                'province_id' => 13,
                'county_id' => 183,
                'name' => 'دزفول',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            62 => 
            array (
                'id' => 563,
                'province_id' => 13,
                'county_id' => 183,
                'name' => 'سالند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            63 => 
            array (
                'id' => 564,
                'province_id' => 13,
                'county_id' => 183,
                'name' => 'سیاه منصور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            64 => 
            array (
                'id' => 565,
                'province_id' => 13,
                'county_id' => 183,
                'name' => 'شمس آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            65 => 
            array (
                'id' => 566,
                'province_id' => 13,
                'county_id' => 183,
                'name' => 'شهر امام',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            66 => 
            array (
                'id' => 567,
                'province_id' => 13,
                'county_id' => 183,
                'name' => 'صفی آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            67 => 
            array (
                'id' => 568,
                'province_id' => 13,
                'county_id' => 183,
                'name' => 'میانرود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            68 => 
            array (
                'id' => 569,
                'province_id' => 13,
                'county_id' => 184,
                'name' => 'ابوحمیظه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            69 => 
            array (
                'id' => 570,
                'province_id' => 13,
                'county_id' => 184,
                'name' => 'بستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            70 => 
            array (
                'id' => 571,
                'province_id' => 13,
                'county_id' => 184,
                'name' => 'سوسنگرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            71 => 
            array (
                'id' => 572,
                'province_id' => 13,
                'county_id' => 184,
                'name' => 'کوت سیدنعیم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            72 => 
            array (
                'id' => 573,
                'province_id' => 13,
                'county_id' => 185,
                'name' => 'رامشیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            73 => 
            array (
                'id' => 574,
                'province_id' => 13,
                'county_id' => 185,
                'name' => 'مشراگه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            74 => 
            array (
                'id' => 575,
                'province_id' => 13,
                'county_id' => 186,
                'name' => 'رامهرمز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            75 => 
            array (
                'id' => 576,
                'province_id' => 13,
                'county_id' => 187,
                'name' => 'خنافره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            76 => 
            array (
                'id' => 577,
                'province_id' => 13,
                'county_id' => 187,
                'name' => 'دارخوین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            77 => 
            array (
                'id' => 578,
                'province_id' => 13,
                'county_id' => 187,
                'name' => 'شادگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            78 => 
            array (
                'id' => 579,
                'province_id' => 13,
                'county_id' => 188,
                'name' => 'الوان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            79 => 
            array (
                'id' => 580,
                'province_id' => 13,
                'county_id' => 188,
                'name' => 'حر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            80 => 
            array (
                'id' => 581,
                'province_id' => 13,
                'county_id' => 188,
                'name' => 'شاوور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            81 => 
            array (
                'id' => 582,
                'province_id' => 13,
                'county_id' => 188,
                'name' => 'شوش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            82 => 
            array (
                'id' => 583,
                'province_id' => 13,
                'county_id' => 188,
                'name' => 'فتح المبین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            83 => 
            array (
                'id' => 584,
                'province_id' => 13,
                'county_id' => 189,
                'name' => 'سرداران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            84 => 
            array (
                'id' => 585,
                'province_id' => 13,
                'county_id' => 189,
                'name' => 'شرافت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            85 => 
            array (
                'id' => 586,
                'province_id' => 13,
                'county_id' => 189,
                'name' => 'شوشتر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            86 => 
            array (
                'id' => 587,
                'province_id' => 13,
                'county_id' => 189,
                'name' => 'گوریه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            87 => 
            array (
                'id' => 588,
                'province_id' => 13,
                'county_id' => 190,
                'name' => 'کوت عبداله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            88 => 
            array (
                'id' => 589,
                'province_id' => 13,
                'county_id' => 191,
                'name' => 'ترکالکی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            89 => 
            array (
                'id' => 590,
                'province_id' => 13,
                'county_id' => 191,
                'name' => 'جنت مکان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            90 => 
            array (
                'id' => 591,
                'province_id' => 13,
                'county_id' => 191,
                'name' => 'سماله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            91 => 
            array (
                'id' => 592,
                'province_id' => 13,
                'county_id' => 191,
                'name' => 'صالح شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            92 => 
            array (
                'id' => 593,
                'province_id' => 13,
                'county_id' => 191,
                'name' => 'گتوند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            93 => 
            array (
                'id' => 594,
                'province_id' => 13,
                'county_id' => 192,
                'name' => 'لالی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            94 => 
            array (
                'id' => 595,
                'province_id' => 13,
                'county_id' => 193,
                'name' => 'گلگیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            95 => 
            array (
                'id' => 596,
                'province_id' => 13,
                'county_id' => 193,
                'name' => 'مسجدسلیمان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            96 => 
            array (
                'id' => 597,
                'province_id' => 13,
                'county_id' => 194,
                'name' => 'هفتگل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            97 => 
            array (
                'id' => 598,
                'province_id' => 13,
                'county_id' => 195,
                'name' => 'زهره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            98 => 
            array (
                'id' => 599,
                'province_id' => 13,
                'county_id' => 195,
                'name' => 'هندیجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            99 => 
            array (
                'id' => 600,
                'province_id' => 13,
                'county_id' => 196,
                'name' => 'رفیع',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            100 => 
            array (
                'id' => 601,
                'province_id' => 13,
                'county_id' => 196,
                'name' => 'هویزه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            101 => 
            array (
                'id' => 602,
                'province_id' => 14,
                'county_id' => 197,
                'name' => 'ابهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            102 => 
            array (
                'id' => 603,
                'province_id' => 14,
                'county_id' => 197,
                'name' => 'صایین قلعه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            103 => 
            array (
                'id' => 604,
                'province_id' => 14,
                'county_id' => 197,
                'name' => 'هیدج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            104 => 
            array (
                'id' => 605,
                'province_id' => 14,
                'county_id' => 198,
                'name' => 'حلب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            105 => 
            array (
                'id' => 606,
                'province_id' => 14,
                'county_id' => 198,
                'name' => 'زرین آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            106 => 
            array (
                'id' => 607,
                'province_id' => 14,
                'county_id' => 199,
                'name' => 'زرین رود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            107 => 
            array (
                'id' => 608,
                'province_id' => 14,
                'county_id' => 199,
                'name' => 'سجاس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            108 => 
            array (
                'id' => 609,
                'province_id' => 14,
                'county_id' => 199,
                'name' => 'سهرورد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            109 => 
            array (
                'id' => 610,
                'province_id' => 14,
                'county_id' => 199,
                'name' => 'قیدار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            110 => 
            array (
                'id' => 611,
                'province_id' => 14,
                'county_id' => 199,
                'name' => 'کرسف',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            111 => 
            array (
                'id' => 612,
                'province_id' => 14,
                'county_id' => 199,
                'name' => 'گرماب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            112 => 
            array (
                'id' => 613,
                'province_id' => 14,
                'county_id' => 199,
                'name' => 'نوربهار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            113 => 
            array (
                'id' => 614,
                'province_id' => 14,
                'county_id' => 200,
                'name' => 'خرمدره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            114 => 
            array (
                'id' => 615,
                'province_id' => 14,
                'county_id' => 201,
                'name' => 'ارمغانخانه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            115 => 
            array (
                'id' => 616,
                'province_id' => 14,
                'county_id' => 201,
                'name' => 'زنجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            116 => 
            array (
                'id' => 617,
                'province_id' => 14,
                'county_id' => 201,
                'name' => 'نیک پی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            117 => 
            array (
                'id' => 618,
                'province_id' => 14,
                'county_id' => 202,
                'name' => 'سلطانیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            118 => 
            array (
                'id' => 619,
                'province_id' => 14,
                'county_id' => 203,
                'name' => 'آب بر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            119 => 
            array (
                'id' => 620,
                'province_id' => 14,
                'county_id' => 203,
                'name' => 'چورزق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            120 => 
            array (
                'id' => 621,
                'province_id' => 14,
                'county_id' => 204,
                'name' => 'دندی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            121 => 
            array (
                'id' => 622,
                'province_id' => 14,
                'county_id' => 204,
                'name' => 'ماه نشان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            122 => 
            array (
                'id' => 623,
                'province_id' => 15,
                'county_id' => 205,
                'name' => 'آرادان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            123 => 
            array (
                'id' => 624,
                'province_id' => 15,
                'county_id' => 205,
                'name' => 'کهن آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            124 => 
            array (
                'id' => 625,
                'province_id' => 15,
                'county_id' => 206,
                'name' => 'امیریه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            125 => 
            array (
                'id' => 626,
                'province_id' => 15,
                'county_id' => 206,
                'name' => 'دامغان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            126 => 
            array (
                'id' => 627,
                'province_id' => 15,
                'county_id' => 206,
                'name' => 'دیباج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            127 => 
            array (
                'id' => 628,
                'province_id' => 15,
                'county_id' => 206,
                'name' => 'کلاته',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            128 => 
            array (
                'id' => 629,
                'province_id' => 15,
                'county_id' => 207,
                'name' => 'سرخه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            129 => 
            array (
                'id' => 630,
                'province_id' => 15,
                'county_id' => 208,
                'name' => 'سمنان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            130 => 
            array (
                'id' => 631,
                'province_id' => 15,
                'county_id' => 209,
                'name' => 'بسطام',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            131 => 
            array (
                'id' => 632,
                'province_id' => 15,
                'county_id' => 209,
                'name' => 'بیارجمند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            132 => 
            array (
                'id' => 633,
                'province_id' => 15,
                'county_id' => 209,
                'name' => 'رودیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            133 => 
            array (
                'id' => 634,
                'province_id' => 15,
                'county_id' => 209,
                'name' => 'شاهرود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            134 => 
            array (
                'id' => 635,
                'province_id' => 15,
                'county_id' => 209,
                'name' => 'کلاته خیج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            135 => 
            array (
                'id' => 636,
                'province_id' => 15,
                'county_id' => 209,
                'name' => 'مجن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            136 => 
            array (
                'id' => 637,
                'province_id' => 15,
                'county_id' => 210,
                'name' => 'ایوانکی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            137 => 
            array (
                'id' => 638,
                'province_id' => 15,
                'county_id' => 210,
                'name' => 'گرمسار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            138 => 
            array (
                'id' => 639,
                'province_id' => 15,
                'county_id' => 211,
                'name' => 'درجزین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            139 => 
            array (
                'id' => 640,
                'province_id' => 15,
                'county_id' => 211,
                'name' => 'شهمیرزاد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            140 => 
            array (
                'id' => 641,
                'province_id' => 15,
                'county_id' => 211,
                'name' => 'مهدی شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            141 => 
            array (
                'id' => 642,
                'province_id' => 15,
                'county_id' => 212,
                'name' => 'میامی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            142 => 
            array (
                'id' => 643,
                'province_id' => 16,
                'county_id' => 213,
                'name' => 'ایرانشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            143 => 
            array (
                'id' => 644,
                'province_id' => 16,
                'county_id' => 213,
                'name' => 'بزمان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            144 => 
            array (
                'id' => 645,
                'province_id' => 16,
                'county_id' => 213,
                'name' => 'بمپور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            145 => 
            array (
                'id' => 646,
                'province_id' => 16,
                'county_id' => 213,
                'name' => 'محمدان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            146 => 
            array (
                'id' => 647,
                'province_id' => 16,
                'county_id' => 214,
                'name' => 'چابهار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            147 => 
            array (
                'id' => 648,
                'province_id' => 16,
                'county_id' => 214,
                'name' => 'نگور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            148 => 
            array (
                'id' => 649,
                'province_id' => 16,
                'county_id' => 215,
                'name' => 'خاش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            149 => 
            array (
                'id' => 650,
                'province_id' => 16,
                'county_id' => 215,
                'name' => 'نوک آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            150 => 
            array (
                'id' => 651,
                'province_id' => 16,
                'county_id' => 216,
                'name' => 'گلمورتی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            151 => 
            array (
                'id' => 652,
                'province_id' => 16,
                'county_id' => 217,
                'name' => 'بنجار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            152 => 
            array (
                'id' => 653,
                'province_id' => 16,
                'county_id' => 217,
                'name' => 'زابل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            153 => 
            array (
                'id' => 654,
                'province_id' => 16,
                'county_id' => 218,
                'name' => 'زاهدان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            154 => 
            array (
                'id' => 655,
                'province_id' => 16,
                'county_id' => 218,
                'name' => 'نصرت آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            155 => 
            array (
                'id' => 656,
                'province_id' => 16,
                'county_id' => 219,
                'name' => 'زهک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            156 => 
            array (
                'id' => 657,
                'province_id' => 16,
                'county_id' => 220,
                'name' => 'جالق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            157 => 
            array (
                'id' => 658,
                'province_id' => 16,
                'county_id' => 220,
                'name' => 'سراوان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            158 => 
            array (
                'id' => 659,
                'province_id' => 16,
                'county_id' => 220,
                'name' => 'سیرکان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            159 => 
            array (
                'id' => 660,
                'province_id' => 16,
                'county_id' => 220,
                'name' => 'گشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            160 => 
            array (
                'id' => 661,
                'province_id' => 16,
                'county_id' => 220,
                'name' => 'محمدی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            161 => 
            array (
                'id' => 662,
                'province_id' => 16,
                'county_id' => 221,
                'name' => 'پیشین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            162 => 
            array (
                'id' => 663,
                'province_id' => 16,
                'county_id' => 221,
                'name' => 'راسک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            163 => 
            array (
                'id' => 664,
                'province_id' => 16,
                'county_id' => 221,
                'name' => 'سرباز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            164 => 
            array (
                'id' => 665,
                'province_id' => 16,
                'county_id' => 222,
                'name' => 'سوران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            165 => 
            array (
                'id' => 666,
                'province_id' => 16,
                'county_id' => 222,
                'name' => 'هیدوچ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            166 => 
            array (
                'id' => 667,
                'province_id' => 16,
                'county_id' => 223,
                'name' => 'فنوج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            167 => 
            array (
                'id' => 668,
                'province_id' => 16,
                'county_id' => 224,
                'name' => 'قصرقند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            168 => 
            array (
                'id' => 669,
                'province_id' => 16,
                'county_id' => 225,
                'name' => 'زرآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            169 => 
            array (
                'id' => 670,
                'province_id' => 16,
                'county_id' => 225,
                'name' => 'کنارک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            170 => 
            array (
                'id' => 671,
                'province_id' => 16,
                'county_id' => 226,
                'name' => 'مهرستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            171 => 
            array (
                'id' => 672,
                'province_id' => 16,
                'county_id' => 227,
                'name' => 'میرجاوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            172 => 
            array (
                'id' => 673,
                'province_id' => 16,
                'county_id' => 228,
                'name' => 'اسپکه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            173 => 
            array (
                'id' => 674,
                'province_id' => 16,
                'county_id' => 228,
                'name' => 'بنت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            174 => 
            array (
                'id' => 675,
                'province_id' => 16,
                'county_id' => 228,
                'name' => 'نیک شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            175 => 
            array (
                'id' => 676,
                'province_id' => 16,
                'county_id' => 229,
                'name' => 'ادیمی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            176 => 
            array (
                'id' => 677,
                'province_id' => 16,
                'county_id' => 230,
                'name' => 'شهرک علی اکبر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            177 => 
            array (
                'id' => 678,
                'province_id' => 16,
                'county_id' => 230,
                'name' => 'محمدآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            178 => 
            array (
                'id' => 679,
                'province_id' => 16,
                'county_id' => 231,
                'name' => 'دوست محمد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            179 => 
            array (
                'id' => 680,
                'province_id' => 17,
                'county_id' => 232,
                'name' => 'آباده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            180 => 
            array (
                'id' => 681,
                'province_id' => 17,
                'county_id' => 232,
                'name' => 'ایزدخواست',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            181 => 
            array (
                'id' => 682,
                'province_id' => 17,
                'county_id' => 232,
                'name' => 'بهمن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            182 => 
            array (
                'id' => 683,
                'province_id' => 17,
                'county_id' => 232,
                'name' => 'سورمق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            183 => 
            array (
                'id' => 684,
                'province_id' => 17,
                'county_id' => 232,
                'name' => 'صغاد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            184 => 
            array (
                'id' => 685,
                'province_id' => 17,
                'county_id' => 233,
                'name' => 'ارسنجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            185 => 
            array (
                'id' => 686,
                'province_id' => 17,
                'county_id' => 234,
                'name' => 'استهبان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            186 => 
            array (
                'id' => 687,
                'province_id' => 17,
                'county_id' => 234,
                'name' => 'ایج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            187 => 
            array (
                'id' => 688,
                'province_id' => 17,
                'county_id' => 234,
                'name' => 'رونیز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            188 => 
            array (
                'id' => 689,
                'province_id' => 17,
                'county_id' => 235,
                'name' => 'اقلید',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            189 => 
            array (
                'id' => 690,
                'province_id' => 17,
                'county_id' => 235,
                'name' => 'حسن اباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            190 => 
            array (
                'id' => 691,
                'province_id' => 17,
                'county_id' => 235,
                'name' => 'دژکرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            191 => 
            array (
                'id' => 692,
                'province_id' => 17,
                'county_id' => 235,
                'name' => 'سده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            192 => 
            array (
                'id' => 693,
                'province_id' => 17,
                'county_id' => 236,
                'name' => 'بوانات',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            193 => 
            array (
                'id' => 694,
                'province_id' => 17,
                'county_id' => 236,
                'name' => 'حسامی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            194 => 
            array (
                'id' => 695,
                'province_id' => 17,
                'county_id' => 236,
                'name' => 'کره ای',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            195 => 
            array (
                'id' => 696,
                'province_id' => 17,
                'county_id' => 236,
                'name' => 'مزایجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            196 => 
            array (
                'id' => 697,
                'province_id' => 17,
                'county_id' => 237,
                'name' => 'سعادت شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            197 => 
            array (
                'id' => 698,
                'province_id' => 17,
                'county_id' => 237,
                'name' => 'مادرسلیمان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            198 => 
            array (
                'id' => 699,
                'province_id' => 17,
                'county_id' => 238,
                'name' => 'باب انار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            199 => 
            array (
                'id' => 700,
                'province_id' => 17,
                'county_id' => 238,
                'name' => 'جهرم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            200 => 
            array (
                'id' => 701,
                'province_id' => 17,
                'county_id' => 238,
                'name' => 'خاوران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            201 => 
            array (
                'id' => 702,
                'province_id' => 17,
                'county_id' => 238,
                'name' => 'دوزه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            202 => 
            array (
                'id' => 703,
                'province_id' => 17,
                'county_id' => 238,
                'name' => 'قطب آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            203 => 
            array (
                'id' => 704,
                'province_id' => 17,
                'county_id' => 239,
                'name' => 'خرامه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            204 => 
            array (
                'id' => 705,
                'province_id' => 17,
                'county_id' => 239,
                'name' => 'سلطان شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            205 => 
            array (
                'id' => 706,
                'province_id' => 17,
                'county_id' => 240,
                'name' => 'صفاشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            206 => 
            array (
                'id' => 707,
                'province_id' => 17,
                'county_id' => 240,
                'name' => 'قادراباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            207 => 
            array (
                'id' => 708,
                'province_id' => 17,
                'county_id' => 241,
                'name' => 'خنج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            208 => 
            array (
                'id' => 709,
                'province_id' => 17,
                'county_id' => 242,
                'name' => 'جنت شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            209 => 
            array (
                'id' => 710,
                'province_id' => 17,
                'county_id' => 242,
                'name' => 'داراب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            210 => 
            array (
                'id' => 711,
                'province_id' => 17,
                'county_id' => 242,
                'name' => 'دوبرجی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            211 => 
            array (
                'id' => 712,
                'province_id' => 17,
                'county_id' => 242,
                'name' => 'فدامی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            212 => 
            array (
                'id' => 713,
                'province_id' => 17,
                'county_id' => 243,
                'name' => 'کوپن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            213 => 
            array (
                'id' => 714,
                'province_id' => 17,
                'county_id' => 243,
                'name' => 'مصیری',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            214 => 
            array (
                'id' => 715,
                'province_id' => 17,
                'county_id' => 244,
                'name' => 'حاجی آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            215 => 
            array (
                'id' => 716,
                'province_id' => 17,
                'county_id' => 244,
                'name' => 'دبیران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            216 => 
            array (
                'id' => 717,
                'province_id' => 17,
                'county_id' => 244,
                'name' => 'شهرپیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            217 => 
            array (
                'id' => 718,
                'province_id' => 17,
                'county_id' => 245,
                'name' => 'اردکان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            218 => 
            array (
                'id' => 719,
                'province_id' => 17,
                'county_id' => 245,
                'name' => 'بیضا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            219 => 
            array (
                'id' => 720,
                'province_id' => 17,
                'county_id' => 245,
                'name' => 'هماشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            220 => 
            array (
                'id' => 721,
                'province_id' => 17,
                'county_id' => 246,
                'name' => 'سروستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            221 => 
            array (
                'id' => 722,
                'province_id' => 17,
                'county_id' => 246,
                'name' => 'کوهنجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            222 => 
            array (
                'id' => 723,
                'province_id' => 17,
                'county_id' => 247,
                'name' => 'خانه زنیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            223 => 
            array (
                'id' => 724,
                'province_id' => 17,
                'county_id' => 247,
                'name' => 'داریان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            224 => 
            array (
                'id' => 725,
                'province_id' => 17,
                'county_id' => 247,
                'name' => 'زرقان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            225 => 
            array (
                'id' => 726,
                'province_id' => 17,
                'county_id' => 247,
                'name' => 'شهرصدرا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            226 => 
            array (
                'id' => 727,
                'province_id' => 17,
                'county_id' => 247,
                'name' => 'شیراز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            227 => 
            array (
                'id' => 728,
                'province_id' => 17,
                'county_id' => 247,
                'name' => 'لپویی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            228 => 
            array (
                'id' => 729,
                'province_id' => 17,
                'county_id' => 248,
                'name' => 'دهرم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            229 => 
            array (
                'id' => 730,
                'province_id' => 17,
                'county_id' => 248,
                'name' => 'فراشبند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            230 => 
            array (
                'id' => 731,
                'province_id' => 17,
                'county_id' => 248,
                'name' => 'نوجین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            231 => 
            array (
                'id' => 732,
                'province_id' => 17,
                'county_id' => 249,
                'name' => 'زاهدشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            232 => 
            array (
                'id' => 733,
                'province_id' => 17,
                'county_id' => 249,
                'name' => 'ششده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            233 => 
            array (
                'id' => 734,
                'province_id' => 17,
                'county_id' => 249,
                'name' => 'فسا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            234 => 
            array (
                'id' => 735,
                'province_id' => 17,
                'county_id' => 249,
                'name' => 'قره بلاغ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            235 => 
            array (
                'id' => 736,
                'province_id' => 17,
                'county_id' => 249,
                'name' => 'میانشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            236 => 
            array (
                'id' => 737,
                'province_id' => 17,
                'county_id' => 249,
                'name' => 'نوبندگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            237 => 
            array (
                'id' => 738,
                'province_id' => 17,
                'county_id' => 250,
                'name' => 'فیروزآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            238 => 
            array (
                'id' => 739,
                'province_id' => 17,
                'county_id' => 250,
                'name' => 'میمند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            239 => 
            array (
                'id' => 740,
                'province_id' => 17,
                'county_id' => 251,
                'name' => 'افزر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            240 => 
            array (
                'id' => 741,
                'province_id' => 17,
                'county_id' => 251,
                'name' => 'امام شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            241 => 
            array (
                'id' => 742,
                'province_id' => 17,
                'county_id' => 251,
                'name' => 'قیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            242 => 
            array (
                'id' => 743,
                'province_id' => 17,
                'county_id' => 251,
            'name' => 'کارزین (فتح آباد)',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            243 => 
            array (
                'id' => 744,
                'province_id' => 17,
                'county_id' => 251,
                'name' => 'مبارک آباددیز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            244 => 
            array (
                'id' => 745,
                'province_id' => 17,
                'county_id' => 252,
                'name' => 'بالاده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            245 => 
            array (
                'id' => 746,
                'province_id' => 17,
                'county_id' => 252,
                'name' => 'خشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            246 => 
            array (
                'id' => 747,
                'province_id' => 17,
                'county_id' => 252,
                'name' => 'قایمیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            247 => 
            array (
                'id' => 748,
                'province_id' => 17,
                'county_id' => 252,
                'name' => 'کازرون',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            248 => 
            array (
                'id' => 749,
                'province_id' => 17,
                'county_id' => 252,
                'name' => 'کنارتخته',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            249 => 
            array (
                'id' => 750,
                'province_id' => 17,
                'county_id' => 252,
                'name' => 'نودان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            250 => 
            array (
                'id' => 751,
                'province_id' => 17,
                'county_id' => 253,
                'name' => 'کوار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            251 => 
            array (
                'id' => 752,
                'province_id' => 17,
                'county_id' => 254,
                'name' => 'گراش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            252 => 
            array (
                'id' => 753,
                'province_id' => 17,
                'county_id' => 255,
                'name' => 'اوز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            253 => 
            array (
                'id' => 754,
                'province_id' => 17,
                'county_id' => 255,
                'name' => 'بنارویه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            254 => 
            array (
                'id' => 755,
                'province_id' => 17,
                'county_id' => 255,
                'name' => 'بیرم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            255 => 
            array (
                'id' => 756,
                'province_id' => 17,
                'county_id' => 255,
                'name' => 'جویم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            256 => 
            array (
                'id' => 757,
                'province_id' => 17,
                'county_id' => 255,
                'name' => 'خور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            257 => 
            array (
                'id' => 758,
                'province_id' => 17,
                'county_id' => 255,
                'name' => 'عمادده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            258 => 
            array (
                'id' => 759,
                'province_id' => 17,
                'county_id' => 255,
                'name' => 'لار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            259 => 
            array (
                'id' => 760,
                'province_id' => 17,
                'county_id' => 255,
                'name' => 'لطیفی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            260 => 
            array (
                'id' => 761,
                'province_id' => 17,
                'county_id' => 256,
                'name' => 'اشکنان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            261 => 
            array (
                'id' => 762,
                'province_id' => 17,
                'county_id' => 256,
                'name' => 'اهل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            262 => 
            array (
                'id' => 763,
                'province_id' => 17,
                'county_id' => 256,
                'name' => 'علامرودشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            263 => 
            array (
                'id' => 764,
                'province_id' => 17,
                'county_id' => 256,
                'name' => 'لامرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            264 => 
            array (
                'id' => 765,
                'province_id' => 17,
                'county_id' => 257,
                'name' => 'خانیمن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            265 => 
            array (
                'id' => 766,
                'province_id' => 17,
                'county_id' => 257,
                'name' => 'رامجرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            266 => 
            array (
                'id' => 767,
                'province_id' => 17,
                'county_id' => 257,
                'name' => 'سیدان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            267 => 
            array (
                'id' => 768,
                'province_id' => 17,
                'county_id' => 257,
                'name' => 'کامفیروز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            268 => 
            array (
                'id' => 769,
                'province_id' => 17,
                'county_id' => 257,
                'name' => 'مرودشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            269 => 
            array (
                'id' => 770,
                'province_id' => 17,
                'county_id' => 258,
                'name' => 'بابامنیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            270 => 
            array (
                'id' => 771,
                'province_id' => 17,
                'county_id' => 258,
                'name' => 'خومه زار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            271 => 
            array (
                'id' => 772,
                'province_id' => 17,
                'county_id' => 258,
                'name' => 'نورآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            272 => 
            array (
                'id' => 773,
                'province_id' => 17,
                'county_id' => 259,
                'name' => 'اسیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            273 => 
            array (
                'id' => 774,
                'province_id' => 17,
                'county_id' => 259,
                'name' => 'خوزی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            274 => 
            array (
                'id' => 775,
                'province_id' => 17,
                'county_id' => 259,
                'name' => 'گله دار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            275 => 
            array (
                'id' => 776,
                'province_id' => 17,
                'county_id' => 259,
                'name' => 'مهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            276 => 
            array (
                'id' => 777,
                'province_id' => 17,
                'county_id' => 259,
                'name' => 'وراوی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            277 => 
            array (
                'id' => 778,
                'province_id' => 17,
                'county_id' => 260,
                'name' => 'آباده طشک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            278 => 
            array (
                'id' => 779,
                'province_id' => 17,
                'county_id' => 260,
                'name' => 'قطرویه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            279 => 
            array (
                'id' => 780,
                'province_id' => 17,
                'county_id' => 260,
                'name' => 'مشکان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            280 => 
            array (
                'id' => 781,
                'province_id' => 17,
                'county_id' => 260,
                'name' => 'نی ریز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            281 => 
            array (
                'id' => 782,
                'province_id' => 18,
                'county_id' => 261,
                'name' => 'آبیک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            282 => 
            array (
                'id' => 783,
                'province_id' => 18,
                'county_id' => 261,
                'name' => 'خاکعلی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            283 => 
            array (
                'id' => 784,
                'province_id' => 18,
                'county_id' => 262,
                'name' => 'آبگرم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            284 => 
            array (
                'id' => 785,
                'province_id' => 18,
                'county_id' => 262,
                'name' => 'آوج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            285 => 
            array (
                'id' => 786,
                'province_id' => 18,
                'county_id' => 263,
                'name' => 'الوند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            286 => 
            array (
                'id' => 787,
                'province_id' => 18,
                'county_id' => 263,
                'name' => 'بیدستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            287 => 
            array (
                'id' => 788,
                'province_id' => 18,
                'county_id' => 263,
                'name' => 'شریفیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            288 => 
            array (
                'id' => 789,
                'province_id' => 18,
                'county_id' => 263,
                'name' => 'محمدیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            289 => 
            array (
                'id' => 790,
                'province_id' => 18,
                'county_id' => 264,
                'name' => 'ارداق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            290 => 
            array (
                'id' => 791,
                'province_id' => 18,
                'county_id' => 264,
                'name' => 'بویین زهرا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            291 => 
            array (
                'id' => 792,
                'province_id' => 18,
                'county_id' => 264,
                'name' => 'دانسفهان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            292 => 
            array (
                'id' => 793,
                'province_id' => 18,
                'county_id' => 264,
                'name' => 'سگزآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            293 => 
            array (
                'id' => 794,
                'province_id' => 18,
                'county_id' => 264,
                'name' => 'شال',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            294 => 
            array (
                'id' => 795,
                'province_id' => 18,
                'county_id' => 265,
                'name' => 'اسفرورین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            295 => 
            array (
                'id' => 796,
                'province_id' => 18,
                'county_id' => 265,
                'name' => 'تاکستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            296 => 
            array (
                'id' => 797,
                'province_id' => 18,
                'county_id' => 265,
                'name' => 'خرمدشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            297 => 
            array (
                'id' => 798,
                'province_id' => 18,
                'county_id' => 265,
                'name' => 'ضیاڈآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            298 => 
            array (
                'id' => 799,
                'province_id' => 18,
                'county_id' => 265,
                'name' => 'نرجه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            299 => 
            array (
                'id' => 800,
                'province_id' => 18,
                'county_id' => 266,
                'name' => 'اقبالیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            300 => 
            array (
                'id' => 801,
                'province_id' => 18,
                'county_id' => 266,
                'name' => 'رازمیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            301 => 
            array (
                'id' => 802,
                'province_id' => 18,
                'county_id' => 266,
                'name' => 'سیردان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            302 => 
            array (
                'id' => 803,
                'province_id' => 18,
                'county_id' => 266,
                'name' => 'قزوین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            303 => 
            array (
                'id' => 804,
                'province_id' => 18,
                'county_id' => 266,
                'name' => 'کوهین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            304 => 
            array (
                'id' => 805,
                'province_id' => 18,
                'county_id' => 266,
                'name' => 'محمودآبادنمونه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            305 => 
            array (
                'id' => 806,
                'province_id' => 18,
                'county_id' => 266,
                'name' => 'معلم کلایه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            306 => 
            array (
                'id' => 807,
                'province_id' => 19,
                'county_id' => 267,
                'name' => 'جعفریه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            307 => 
            array (
                'id' => 808,
                'province_id' => 19,
                'county_id' => 267,
                'name' => 'دستجرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            308 => 
            array (
                'id' => 809,
                'province_id' => 19,
                'county_id' => 267,
                'name' => 'سلفچگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            309 => 
            array (
                'id' => 810,
                'province_id' => 19,
                'county_id' => 267,
                'name' => 'قم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            310 => 
            array (
                'id' => 811,
                'province_id' => 19,
                'county_id' => 267,
                'name' => 'قنوات',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            311 => 
            array (
                'id' => 812,
                'province_id' => 19,
                'county_id' => 267,
                'name' => 'کهک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            312 => 
            array (
                'id' => 813,
                'province_id' => 20,
                'county_id' => 268,
                'name' => 'آرمرده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            313 => 
            array (
                'id' => 814,
                'province_id' => 20,
                'county_id' => 268,
                'name' => 'بانه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            314 => 
            array (
                'id' => 815,
                'province_id' => 20,
                'county_id' => 268,
                'name' => 'بویین سفلی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            315 => 
            array (
                'id' => 816,
                'province_id' => 20,
                'county_id' => 268,
                'name' => 'کانی سور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            316 => 
            array (
                'id' => 817,
                'province_id' => 20,
                'county_id' => 269,
                'name' => 'بابارشانی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            317 => 
            array (
                'id' => 818,
                'province_id' => 20,
                'county_id' => 269,
                'name' => 'بیجار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            318 => 
            array (
                'id' => 819,
                'province_id' => 20,
                'county_id' => 269,
                'name' => 'پیرتاج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            319 => 
            array (
                'id' => 820,
                'province_id' => 20,
                'county_id' => 269,
                'name' => 'توپ آغاج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            320 => 
            array (
                'id' => 821,
                'province_id' => 20,
                'county_id' => 269,
                'name' => 'یاسوکند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            321 => 
            array (
                'id' => 822,
                'province_id' => 20,
                'county_id' => 270,
                'name' => 'بلبان آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            322 => 
            array (
                'id' => 823,
                'province_id' => 20,
                'county_id' => 270,
                'name' => 'دهگلان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            323 => 
            array (
                'id' => 824,
                'province_id' => 20,
                'county_id' => 271,
                'name' => 'دیواندره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            324 => 
            array (
                'id' => 825,
                'province_id' => 20,
                'county_id' => 271,
                'name' => 'زرینه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            325 => 
            array (
                'id' => 826,
                'province_id' => 20,
                'county_id' => 272,
                'name' => 'اورامان تخت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            326 => 
            array (
                'id' => 827,
                'province_id' => 20,
                'county_id' => 272,
                'name' => 'سروآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            327 => 
            array (
                'id' => 828,
                'province_id' => 20,
                'county_id' => 273,
                'name' => 'سقز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            328 => 
            array (
                'id' => 829,
                'province_id' => 20,
                'county_id' => 273,
                'name' => 'صاحب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            329 => 
            array (
                'id' => 830,
                'province_id' => 20,
                'county_id' => 274,
                'name' => 'سنندج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            330 => 
            array (
                'id' => 831,
                'province_id' => 20,
                'county_id' => 274,
                'name' => 'شویشه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            331 => 
            array (
                'id' => 832,
                'province_id' => 20,
                'county_id' => 275,
                'name' => 'دزج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            332 => 
            array (
                'id' => 833,
                'province_id' => 20,
                'county_id' => 275,
                'name' => 'دلبران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            333 => 
            array (
                'id' => 834,
                'province_id' => 20,
                'county_id' => 275,
                'name' => 'سریش آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            334 => 
            array (
                'id' => 835,
                'province_id' => 20,
                'county_id' => 275,
                'name' => 'قروه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            335 => 
            array (
                'id' => 836,
                'province_id' => 20,
                'county_id' => 276,
                'name' => 'کامیاران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            336 => 
            array (
                'id' => 837,
                'province_id' => 20,
                'county_id' => 276,
                'name' => 'موچش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            337 => 
            array (
                'id' => 838,
                'province_id' => 20,
                'county_id' => 277,
                'name' => 'برده رشه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            338 => 
            array (
                'id' => 839,
                'province_id' => 20,
                'county_id' => 277,
                'name' => 'چناره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            339 => 
            array (
                'id' => 840,
                'province_id' => 20,
                'county_id' => 277,
                'name' => 'کانی دینار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            340 => 
            array (
                'id' => 841,
                'province_id' => 20,
                'county_id' => 277,
                'name' => 'مریوان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            341 => 
            array (
                'id' => 842,
                'province_id' => 21,
                'county_id' => 278,
                'name' => 'ارزوییه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            342 => 
            array (
                'id' => 843,
                'province_id' => 21,
                'county_id' => 279,
                'name' => 'امین شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            343 => 
            array (
                'id' => 844,
                'province_id' => 21,
                'county_id' => 279,
                'name' => 'انار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            344 => 
            array (
                'id' => 845,
                'province_id' => 21,
                'county_id' => 280,
                'name' => 'بافت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            345 => 
            array (
                'id' => 846,
                'province_id' => 21,
                'county_id' => 280,
                'name' => 'بزنجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            346 => 
            array (
                'id' => 847,
                'province_id' => 21,
                'county_id' => 281,
                'name' => 'بردسیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            347 => 
            array (
                'id' => 848,
                'province_id' => 21,
                'county_id' => 281,
                'name' => 'دشتکار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            348 => 
            array (
                'id' => 849,
                'province_id' => 21,
                'county_id' => 281,
                'name' => 'گلزار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            349 => 
            array (
                'id' => 850,
                'province_id' => 21,
                'county_id' => 281,
                'name' => 'لاله زار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            350 => 
            array (
                'id' => 851,
                'province_id' => 21,
                'county_id' => 281,
                'name' => 'نگار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            351 => 
            array (
                'id' => 852,
                'province_id' => 21,
                'county_id' => 282,
                'name' => 'بروات',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            352 => 
            array (
                'id' => 853,
                'province_id' => 21,
                'county_id' => 282,
                'name' => 'بم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            353 => 
            array (
                'id' => 854,
                'province_id' => 21,
                'county_id' => 283,
                'name' => 'بلوک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            354 => 
            array (
                'id' => 855,
                'province_id' => 21,
                'county_id' => 283,
                'name' => 'جبالبارز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            355 => 
            array (
                'id' => 856,
                'province_id' => 21,
                'county_id' => 283,
                'name' => 'جیرفت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            356 => 
            array (
                'id' => 857,
                'province_id' => 21,
                'county_id' => 283,
                'name' => 'درب بهشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            357 => 
            array (
                'id' => 858,
                'province_id' => 21,
                'county_id' => 284,
                'name' => 'رابر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            358 => 
            array (
                'id' => 859,
                'province_id' => 21,
                'county_id' => 284,
                'name' => 'هنزا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            359 => 
            array (
                'id' => 860,
                'province_id' => 21,
                'county_id' => 285,
                'name' => 'راور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            360 => 
            array (
                'id' => 861,
                'province_id' => 21,
                'county_id' => 285,
                'name' => 'هجدک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            361 => 
            array (
                'id' => 862,
                'province_id' => 21,
                'county_id' => 286,
                'name' => 'بهرمان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            362 => 
            array (
                'id' => 863,
                'province_id' => 21,
                'county_id' => 286,
                'name' => 'رفسنجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            363 => 
            array (
                'id' => 864,
                'province_id' => 21,
                'county_id' => 286,
                'name' => 'صفاییه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            364 => 
            array (
                'id' => 865,
                'province_id' => 21,
                'county_id' => 286,
                'name' => 'کشکوییه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            365 => 
            array (
                'id' => 866,
                'province_id' => 21,
                'county_id' => 286,
                'name' => 'مس سرچشمه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            366 => 
            array (
                'id' => 867,
                'province_id' => 21,
                'county_id' => 287,
                'name' => 'رودبار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            367 => 
            array (
                'id' => 868,
                'province_id' => 21,
                'county_id' => 287,
                'name' => 'زهکلوت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            368 => 
            array (
                'id' => 869,
                'province_id' => 21,
                'county_id' => 288,
                'name' => 'گنبکی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            369 => 
            array (
                'id' => 870,
                'province_id' => 21,
                'county_id' => 288,
                'name' => 'محمدآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            370 => 
            array (
                'id' => 871,
                'province_id' => 21,
                'county_id' => 289,
                'name' => 'خانوک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            371 => 
            array (
                'id' => 872,
                'province_id' => 21,
                'county_id' => 289,
                'name' => 'ریحان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            372 => 
            array (
                'id' => 873,
                'province_id' => 21,
                'county_id' => 289,
                'name' => 'زرند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            373 => 
            array (
                'id' => 874,
                'province_id' => 21,
                'county_id' => 289,
                'name' => 'یزدان شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            374 => 
            array (
                'id' => 875,
                'province_id' => 21,
                'county_id' => 290,
                'name' => 'بلورد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            375 => 
            array (
                'id' => 876,
                'province_id' => 21,
                'county_id' => 290,
                'name' => 'پاریز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            376 => 
            array (
                'id' => 877,
                'province_id' => 21,
                'county_id' => 290,
                'name' => 'خواجو شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            377 => 
            array (
                'id' => 878,
                'province_id' => 21,
                'county_id' => 290,
                'name' => 'زیدآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            378 => 
            array (
                'id' => 879,
                'province_id' => 21,
                'county_id' => 290,
                'name' => 'سیرجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            379 => 
            array (
                'id' => 880,
                'province_id' => 21,
                'county_id' => 290,
                'name' => 'نجف شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            380 => 
            array (
                'id' => 881,
                'province_id' => 21,
                'county_id' => 290,
                'name' => 'هماشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            381 => 
            array (
                'id' => 882,
                'province_id' => 21,
                'county_id' => 291,
                'name' => 'جوزم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            382 => 
            array (
                'id' => 883,
                'province_id' => 21,
                'county_id' => 291,
                'name' => 'خاتون اباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            383 => 
            array (
                'id' => 884,
                'province_id' => 21,
                'county_id' => 291,
                'name' => 'خورسند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            384 => 
            array (
                'id' => 885,
                'province_id' => 21,
                'county_id' => 291,
                'name' => 'دهج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            385 => 
            array (
                'id' => 886,
                'province_id' => 21,
                'county_id' => 291,
                'name' => 'شهربابک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            386 => 
            array (
                'id' => 887,
                'province_id' => 21,
                'county_id' => 292,
                'name' => 'دوساری',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            387 => 
            array (
                'id' => 888,
                'province_id' => 21,
                'county_id' => 292,
                'name' => 'عنبرآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            388 => 
            array (
                'id' => 889,
                'province_id' => 21,
                'county_id' => 292,
                'name' => 'مردهک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            389 => 
            array (
                'id' => 890,
                'province_id' => 21,
                'county_id' => 293,
                'name' => 'فاریاب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            390 => 
            array (
                'id' => 891,
                'province_id' => 21,
                'county_id' => 294,
                'name' => 'فهرج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            391 => 
            array (
                'id' => 892,
                'province_id' => 21,
                'county_id' => 295,
                'name' => 'قلعه گنج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            392 => 
            array (
                'id' => 893,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'اختیارآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            393 => 
            array (
                'id' => 894,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'اندوهجرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            394 => 
            array (
                'id' => 895,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'باغین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            395 => 
            array (
                'id' => 896,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'جوپار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            396 => 
            array (
                'id' => 897,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'چترود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            397 => 
            array (
                'id' => 898,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'راین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            398 => 
            array (
                'id' => 899,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'زنگی آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            399 => 
            array (
                'id' => 900,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'شهداد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            400 => 
            array (
                'id' => 901,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'کاظم آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            401 => 
            array (
                'id' => 902,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'کرمان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            402 => 
            array (
                'id' => 903,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'گلباف',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            403 => 
            array (
                'id' => 904,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'ماهان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            404 => 
            array (
                'id' => 905,
                'province_id' => 21,
                'county_id' => 296,
                'name' => 'محی آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            405 => 
            array (
                'id' => 906,
                'province_id' => 21,
                'county_id' => 297,
                'name' => 'کوهبنان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            406 => 
            array (
                'id' => 907,
                'province_id' => 21,
                'county_id' => 297,
                'name' => 'کیانشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            407 => 
            array (
                'id' => 908,
                'province_id' => 21,
                'county_id' => 298,
                'name' => 'کهنوج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            408 => 
            array (
                'id' => 909,
                'province_id' => 21,
                'county_id' => 299,
                'name' => 'منوجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            409 => 
            array (
                'id' => 910,
                'province_id' => 21,
                'county_id' => 299,
                'name' => 'نودژ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            410 => 
            array (
                'id' => 911,
                'province_id' => 21,
                'county_id' => 300,
                'name' => 'نرماشیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            411 => 
            array (
                'id' => 912,
                'province_id' => 21,
                'county_id' => 300,
                'name' => 'نظام شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            412 => 
            array (
                'id' => 913,
                'province_id' => 22,
                'county_id' => 301,
                'name' => 'اسلام آبادغرب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            413 => 
            array (
                'id' => 914,
                'province_id' => 22,
                'county_id' => 301,
                'name' => 'حمیل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            414 => 
            array (
                'id' => 915,
                'province_id' => 22,
                'county_id' => 302,
                'name' => 'بانوره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            415 => 
            array (
                'id' => 916,
                'province_id' => 22,
                'county_id' => 302,
                'name' => 'باینگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            416 => 
            array (
                'id' => 917,
                'province_id' => 22,
                'county_id' => 302,
                'name' => 'پاوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            417 => 
            array (
                'id' => 918,
                'province_id' => 22,
                'county_id' => 302,
                'name' => 'نودشه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            418 => 
            array (
                'id' => 919,
                'province_id' => 22,
                'county_id' => 302,
                'name' => 'نوسود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            419 => 
            array (
                'id' => 920,
                'province_id' => 22,
                'county_id' => 303,
                'name' => 'ازگله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            420 => 
            array (
                'id' => 921,
                'province_id' => 22,
                'county_id' => 303,
                'name' => 'تازه آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            421 => 
            array (
                'id' => 922,
                'province_id' => 22,
                'county_id' => 304,
                'name' => 'جوانرود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            422 => 
            array (
                'id' => 923,
                'province_id' => 22,
                'county_id' => 305,
                'name' => 'ریجاب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            423 => 
            array (
                'id' => 924,
                'province_id' => 22,
                'county_id' => 305,
                'name' => 'کرند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            424 => 
            array (
                'id' => 925,
                'province_id' => 22,
                'county_id' => 305,
                'name' => 'گهواره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            425 => 
            array (
                'id' => 926,
                'province_id' => 22,
                'county_id' => 306,
                'name' => 'روانسر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            426 => 
            array (
                'id' => 927,
                'province_id' => 22,
                'county_id' => 306,
                'name' => 'شاهو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            427 => 
            array (
                'id' => 928,
                'province_id' => 22,
                'county_id' => 307,
                'name' => 'سرپل ذهاب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            428 => 
            array (
                'id' => 929,
                'province_id' => 22,
                'county_id' => 308,
                'name' => 'سطر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            429 => 
            array (
                'id' => 930,
                'province_id' => 22,
                'county_id' => 308,
                'name' => 'سنقر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            430 => 
            array (
                'id' => 931,
                'province_id' => 22,
                'county_id' => 309,
                'name' => 'صحنه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            431 => 
            array (
                'id' => 932,
                'province_id' => 22,
                'county_id' => 309,
                'name' => 'میان راهان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            432 => 
            array (
                'id' => 933,
                'province_id' => 22,
                'county_id' => 310,
                'name' => 'سومار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            433 => 
            array (
                'id' => 934,
                'province_id' => 22,
                'county_id' => 310,
                'name' => 'قصرشیرین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            434 => 
            array (
                'id' => 935,
                'province_id' => 22,
                'county_id' => 311,
                'name' => 'رباط',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            435 => 
            array (
                'id' => 936,
                'province_id' => 22,
                'county_id' => 311,
                'name' => 'کرمانشاه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            436 => 
            array (
                'id' => 937,
                'province_id' => 22,
                'county_id' => 311,
                'name' => 'کوزران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            437 => 
            array (
                'id' => 938,
                'province_id' => 22,
                'county_id' => 311,
                'name' => 'هلشی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            438 => 
            array (
                'id' => 939,
                'province_id' => 22,
                'county_id' => 312,
                'name' => 'کنگاور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            439 => 
            array (
                'id' => 940,
                'province_id' => 22,
                'county_id' => 312,
                'name' => 'گودین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            440 => 
            array (
                'id' => 941,
                'province_id' => 22,
                'county_id' => 313,
                'name' => 'سرمست',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            441 => 
            array (
                'id' => 942,
                'province_id' => 22,
                'county_id' => 313,
                'name' => 'گیلانغرب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            442 => 
            array (
                'id' => 943,
                'province_id' => 22,
                'county_id' => 314,
                'name' => 'بیستون',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            443 => 
            array (
                'id' => 944,
                'province_id' => 22,
                'county_id' => 314,
                'name' => 'هرسین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            444 => 
            array (
                'id' => 945,
                'province_id' => 23,
                'county_id' => 315,
                'name' => 'باشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            445 => 
            array (
                'id' => 946,
                'province_id' => 23,
                'county_id' => 316,
                'name' => 'چیتاب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            446 => 
            array (
                'id' => 947,
                'province_id' => 23,
                'county_id' => 316,
                'name' => 'گراب سفلی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            447 => 
            array (
                'id' => 948,
                'province_id' => 23,
                'county_id' => 316,
                'name' => 'مادوان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            448 => 
            array (
                'id' => 949,
                'province_id' => 23,
                'county_id' => 316,
                'name' => 'مارگون',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            449 => 
            array (
                'id' => 950,
                'province_id' => 23,
                'county_id' => 316,
                'name' => 'یاسوج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            450 => 
            array (
                'id' => 951,
                'province_id' => 23,
                'county_id' => 317,
                'name' => 'لیکک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            451 => 
            array (
                'id' => 952,
                'province_id' => 23,
                'county_id' => 318,
                'name' => 'چرام',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            452 => 
            array (
                'id' => 953,
                'province_id' => 23,
                'county_id' => 318,
                'name' => 'سرفاریاب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            453 => 
            array (
                'id' => 954,
                'province_id' => 23,
                'county_id' => 319,
                'name' => 'پاتاوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            454 => 
            array (
                'id' => 955,
                'province_id' => 23,
                'county_id' => 319,
                'name' => 'سی سخت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            455 => 
            array (
                'id' => 956,
                'province_id' => 23,
                'county_id' => 320,
                'name' => 'دهدشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            456 => 
            array (
                'id' => 957,
                'province_id' => 23,
                'county_id' => 320,
                'name' => 'دیشموک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            457 => 
            array (
                'id' => 958,
                'province_id' => 23,
                'county_id' => 320,
                'name' => 'سوق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            458 => 
            array (
                'id' => 959,
                'province_id' => 23,
                'county_id' => 320,
                'name' => 'قلعه رییسی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            459 => 
            array (
                'id' => 960,
                'province_id' => 23,
                'county_id' => 321,
                'name' => 'دوگنبدان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            460 => 
            array (
                'id' => 961,
                'province_id' => 23,
                'county_id' => 322,
                'name' => 'لنده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            461 => 
            array (
                'id' => 962,
                'province_id' => 24,
                'county_id' => 323,
                'name' => 'آزادشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            462 => 
            array (
                'id' => 963,
                'province_id' => 24,
                'county_id' => 323,
                'name' => 'نگین شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            463 => 
            array (
                'id' => 964,
                'province_id' => 24,
                'county_id' => 323,
                'name' => 'نوده خاندوز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            464 => 
            array (
                'id' => 965,
                'province_id' => 24,
                'county_id' => 324,
                'name' => 'آق قلا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            465 => 
            array (
                'id' => 966,
                'province_id' => 24,
                'county_id' => 324,
                'name' => 'انبارآلوم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            466 => 
            array (
                'id' => 967,
                'province_id' => 24,
                'county_id' => 325,
                'name' => 'بندرگز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            467 => 
            array (
                'id' => 968,
                'province_id' => 24,
                'county_id' => 325,
                'name' => 'نوکنده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            468 => 
            array (
                'id' => 969,
                'province_id' => 24,
                'county_id' => 326,
                'name' => 'بندرترکمن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            469 => 
            array (
                'id' => 970,
                'province_id' => 24,
                'county_id' => 327,
                'name' => 'تاتارعلیا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            470 => 
            array (
                'id' => 971,
                'province_id' => 24,
                'county_id' => 327,
                'name' => 'خان ببین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            471 => 
            array (
                'id' => 972,
                'province_id' => 24,
                'county_id' => 327,
                'name' => 'دلند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            472 => 
            array (
                'id' => 973,
                'province_id' => 24,
                'county_id' => 327,
                'name' => 'رامیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            473 => 
            array (
                'id' => 974,
                'province_id' => 24,
                'county_id' => 328,
                'name' => 'سنگدوین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            474 => 
            array (
                'id' => 975,
                'province_id' => 24,
                'county_id' => 328,
                'name' => 'علی اباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            475 => 
            array (
                'id' => 976,
                'province_id' => 24,
                'county_id' => 328,
                'name' => 'فاضل آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            476 => 
            array (
                'id' => 977,
                'province_id' => 24,
                'county_id' => 328,
                'name' => 'مزرعه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            477 => 
            array (
                'id' => 978,
                'province_id' => 24,
                'county_id' => 329,
                'name' => 'کردکوی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            478 => 
            array (
                'id' => 979,
                'province_id' => 24,
                'county_id' => 330,
                'name' => 'فراغی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            479 => 
            array (
                'id' => 980,
                'province_id' => 24,
                'county_id' => 330,
                'name' => 'کلاله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            480 => 
            array (
                'id' => 981,
                'province_id' => 24,
                'county_id' => 331,
                'name' => 'گالیکش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            481 => 
            array (
                'id' => 982,
                'province_id' => 24,
                'county_id' => 332,
                'name' => 'جلین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            482 => 
            array (
                'id' => 983,
                'province_id' => 24,
                'county_id' => 332,
                'name' => 'سرخنکلاته',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            483 => 
            array (
                'id' => 984,
                'province_id' => 24,
                'county_id' => 332,
                'name' => 'گرگان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            484 => 
            array (
                'id' => 985,
                'province_id' => 24,
                'county_id' => 333,
                'name' => 'سیمین شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            485 => 
            array (
                'id' => 986,
                'province_id' => 24,
                'county_id' => 333,
                'name' => 'گمیش تپه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            486 => 
            array (
                'id' => 987,
                'province_id' => 24,
                'county_id' => 334,
                'name' => 'اینچه برون',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            487 => 
            array (
                'id' => 988,
                'province_id' => 24,
                'county_id' => 334,
                'name' => 'گنبدکاووس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            488 => 
            array (
                'id' => 989,
                'province_id' => 24,
                'county_id' => 335,
                'name' => 'مراوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            489 => 
            array (
                'id' => 990,
                'province_id' => 24,
                'county_id' => 336,
                'name' => 'مینودشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            490 => 
            array (
                'id' => 991,
                'province_id' => 25,
                'county_id' => 337,
                'name' => 'آستارا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            491 => 
            array (
                'id' => 992,
                'province_id' => 25,
                'county_id' => 337,
                'name' => 'لوندویل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            492 => 
            array (
                'id' => 993,
                'province_id' => 25,
                'county_id' => 338,
                'name' => 'آستانه اشرفیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            493 => 
            array (
                'id' => 994,
                'province_id' => 25,
                'county_id' => 338,
                'name' => 'کیاشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            494 => 
            array (
                'id' => 995,
                'province_id' => 25,
                'county_id' => 339,
                'name' => 'املش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            495 => 
            array (
                'id' => 996,
                'province_id' => 25,
                'county_id' => 339,
                'name' => 'رانکوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            496 => 
            array (
                'id' => 997,
                'province_id' => 25,
                'county_id' => 340,
                'name' => 'بندرانزلی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            497 => 
            array (
                'id' => 998,
                'province_id' => 25,
                'county_id' => 341,
                'name' => 'خشکبیجار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            498 => 
            array (
                'id' => 999,
                'province_id' => 25,
                'county_id' => 341,
                'name' => 'خمام',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            499 => 
            array (
                'id' => 1000,
                'province_id' => 25,
                'county_id' => 341,
                'name' => 'رشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        \DB::table('cities')->insert(array (
            0 => 
            array (
                'id' => 1001,
                'province_id' => 25,
                'county_id' => 341,
                'name' => 'سنگر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 1002,
                'province_id' => 25,
                'county_id' => 341,
                'name' => 'کوچصفهان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 1003,
                'province_id' => 25,
                'county_id' => 341,
                'name' => 'لشت نشاء',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 1004,
                'province_id' => 25,
                'county_id' => 341,
                'name' => 'لولمان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 1005,
                'province_id' => 25,
                'county_id' => 342,
                'name' => 'پره سر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 1006,
                'province_id' => 25,
                'county_id' => 342,
                'name' => 'رضوانشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 1007,
                'province_id' => 25,
                'county_id' => 343,
                'name' => 'بره سر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            7 => 
            array (
                'id' => 1008,
                'province_id' => 25,
                'county_id' => 343,
                'name' => 'توتکابن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            8 => 
            array (
                'id' => 1009,
                'province_id' => 25,
                'county_id' => 343,
                'name' => 'جیرنده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            9 => 
            array (
                'id' => 1010,
                'province_id' => 25,
                'county_id' => 343,
                'name' => 'رستم آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            10 => 
            array (
                'id' => 1011,
                'province_id' => 25,
                'county_id' => 343,
                'name' => 'رودبار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            11 => 
            array (
                'id' => 1012,
                'province_id' => 25,
                'county_id' => 343,
                'name' => 'لوشان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            12 => 
            array (
                'id' => 1013,
                'province_id' => 25,
                'county_id' => 343,
                'name' => 'منجیل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            13 => 
            array (
                'id' => 1014,
                'province_id' => 25,
                'county_id' => 344,
                'name' => 'چابکسر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            14 => 
            array (
                'id' => 1015,
                'province_id' => 25,
                'county_id' => 344,
                'name' => 'رحیم آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            15 => 
            array (
                'id' => 1016,
                'province_id' => 25,
                'county_id' => 344,
                'name' => 'رودسر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            16 => 
            array (
                'id' => 1017,
                'province_id' => 25,
                'county_id' => 344,
                'name' => 'کلاچای',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            17 => 
            array (
                'id' => 1018,
                'province_id' => 25,
                'county_id' => 344,
                'name' => 'واجارگاه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            18 => 
            array (
                'id' => 1019,
                'province_id' => 25,
                'county_id' => 345,
                'name' => 'دیلمان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            19 => 
            array (
                'id' => 1020,
                'province_id' => 25,
                'county_id' => 345,
                'name' => 'سیاهکل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            20 => 
            array (
                'id' => 1021,
                'province_id' => 25,
                'county_id' => 346,
                'name' => 'احمدسرگوراب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            21 => 
            array (
                'id' => 1022,
                'province_id' => 25,
                'county_id' => 346,
                'name' => 'شفت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            22 => 
            array (
                'id' => 1023,
                'province_id' => 25,
                'county_id' => 347,
                'name' => 'صومعه سرا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            23 => 
            array (
                'id' => 1024,
                'province_id' => 25,
                'county_id' => 347,
                'name' => 'گوراب زرمیخ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            24 => 
            array (
                'id' => 1025,
                'province_id' => 25,
                'county_id' => 347,
                'name' => 'مرجقل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            25 => 
            array (
                'id' => 1026,
                'province_id' => 25,
                'county_id' => 348,
                'name' => 'اسالم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            26 => 
            array (
                'id' => 1027,
                'province_id' => 25,
                'county_id' => 348,
                'name' => 'چوبر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            27 => 
            array (
                'id' => 1028,
                'province_id' => 25,
                'county_id' => 348,
                'name' => 'حویق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            28 => 
            array (
                'id' => 1029,
                'province_id' => 25,
                'county_id' => 348,
                'name' => 'لیسار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            29 => 
            array (
                'id' => 1030,
                'province_id' => 25,
                'county_id' => 348,
            'name' => 'هشتپر (تالش)',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            30 => 
            array (
                'id' => 1031,
                'province_id' => 25,
                'county_id' => 349,
                'name' => 'فومن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            31 => 
            array (
                'id' => 1032,
                'province_id' => 25,
                'county_id' => 349,
                'name' => 'ماسوله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            32 => 
            array (
                'id' => 1033,
                'province_id' => 25,
                'county_id' => 349,
                'name' => 'ماکلوان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            33 => 
            array (
                'id' => 1034,
                'province_id' => 25,
                'county_id' => 350,
                'name' => 'رودبنه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            34 => 
            array (
                'id' => 1035,
                'province_id' => 25,
                'county_id' => 350,
                'name' => 'لاهیجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            35 => 
            array (
                'id' => 1036,
                'province_id' => 25,
                'county_id' => 351,
                'name' => 'اطاقور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            36 => 
            array (
                'id' => 1037,
                'province_id' => 25,
                'county_id' => 351,
                'name' => 'چاف و چمخاله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            37 => 
            array (
                'id' => 1038,
                'province_id' => 25,
                'county_id' => 351,
                'name' => 'شلمان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            38 => 
            array (
                'id' => 1039,
                'province_id' => 25,
                'county_id' => 351,
                'name' => 'کومله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            39 => 
            array (
                'id' => 1040,
                'province_id' => 25,
                'county_id' => 351,
                'name' => 'لنگرود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            40 => 
            array (
                'id' => 1041,
                'province_id' => 25,
                'county_id' => 352,
                'name' => 'بازار جمعه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            41 => 
            array (
                'id' => 1042,
                'province_id' => 25,
                'county_id' => 352,
                'name' => 'ماسال',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            42 => 
            array (
                'id' => 1043,
                'province_id' => 26,
                'county_id' => 353,
                'name' => 'ازنا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            43 => 
            array (
                'id' => 1044,
                'province_id' => 26,
                'county_id' => 353,
                'name' => 'مومن آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            44 => 
            array (
                'id' => 1045,
                'province_id' => 26,
                'county_id' => 354,
                'name' => 'الیگودرز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            45 => 
            array (
                'id' => 1046,
                'province_id' => 26,
                'county_id' => 354,
                'name' => 'شول آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            46 => 
            array (
                'id' => 1047,
                'province_id' => 26,
                'county_id' => 355,
                'name' => 'اشترینان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            47 => 
            array (
                'id' => 1048,
                'province_id' => 26,
                'county_id' => 355,
                'name' => 'بروجرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            48 => 
            array (
                'id' => 1049,
                'province_id' => 26,
                'county_id' => 356,
                'name' => 'پلدختر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            49 => 
            array (
                'id' => 1050,
                'province_id' => 26,
                'county_id' => 356,
                'name' => 'معمولان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            50 => 
            array (
                'id' => 1051,
                'province_id' => 26,
                'county_id' => 357,
                'name' => 'بیران شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            51 => 
            array (
                'id' => 1052,
                'province_id' => 26,
                'county_id' => 357,
                'name' => 'خرم آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            52 => 
            array (
                'id' => 1053,
                'province_id' => 26,
                'county_id' => 357,
                'name' => 'زاغه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            53 => 
            array (
                'id' => 1054,
                'province_id' => 26,
                'county_id' => 357,
                'name' => 'سپیددشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            54 => 
            array (
                'id' => 1055,
                'province_id' => 26,
                'county_id' => 358,
                'name' => 'نورآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            55 => 
            array (
                'id' => 1056,
                'province_id' => 26,
                'county_id' => 358,
                'name' => 'هفت چشمه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            56 => 
            array (
                'id' => 1057,
                'province_id' => 26,
                'county_id' => 359,
                'name' => 'چالانچولان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            57 => 
            array (
                'id' => 1058,
                'province_id' => 26,
                'county_id' => 359,
                'name' => 'دورود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            58 => 
            array (
                'id' => 1059,
                'province_id' => 26,
                'county_id' => 360,
                'name' => 'سراب دوره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            59 => 
            array (
                'id' => 1060,
                'province_id' => 26,
                'county_id' => 360,
                'name' => 'ویسیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            60 => 
            array (
                'id' => 1061,
                'province_id' => 26,
                'county_id' => 361,
                'name' => 'چقابل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            61 => 
            array (
                'id' => 1062,
                'province_id' => 26,
                'county_id' => 362,
                'name' => 'الشتر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            62 => 
            array (
                'id' => 1063,
                'province_id' => 26,
                'county_id' => 362,
                'name' => 'فیروزآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            63 => 
            array (
                'id' => 1064,
                'province_id' => 26,
                'county_id' => 363,
                'name' => 'درب گنبد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            64 => 
            array (
                'id' => 1065,
                'province_id' => 26,
                'county_id' => 363,
                'name' => 'کوهدشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            65 => 
            array (
                'id' => 1066,
                'province_id' => 26,
                'county_id' => 363,
                'name' => 'کوهنانی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            66 => 
            array (
                'id' => 1067,
                'province_id' => 26,
                'county_id' => 363,
                'name' => 'گراب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            67 => 
            array (
                'id' => 1068,
                'province_id' => 27,
                'county_id' => 364,
                'name' => 'آمل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            68 => 
            array (
                'id' => 1069,
                'province_id' => 27,
                'county_id' => 364,
                'name' => 'امامزاده عبدالله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            69 => 
            array (
                'id' => 1070,
                'province_id' => 27,
                'county_id' => 364,
                'name' => 'دابودشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            70 => 
            array (
                'id' => 1071,
                'province_id' => 27,
                'county_id' => 364,
                'name' => 'رینه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            71 => 
            array (
                'id' => 1072,
                'province_id' => 27,
                'county_id' => 364,
                'name' => 'گزنک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            72 => 
            array (
                'id' => 1073,
                'province_id' => 27,
                'county_id' => 365,
                'name' => 'امیرکلا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            73 => 
            array (
                'id' => 1074,
                'province_id' => 27,
                'county_id' => 365,
                'name' => 'بابل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            74 => 
            array (
                'id' => 1075,
                'province_id' => 27,
                'county_id' => 365,
                'name' => 'خوش رودپی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            75 => 
            array (
                'id' => 1076,
                'province_id' => 27,
                'county_id' => 365,
                'name' => 'زرگرمحله',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            76 => 
            array (
                'id' => 1077,
                'province_id' => 27,
                'county_id' => 365,
                'name' => 'گتاب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            77 => 
            array (
                'id' => 1078,
                'province_id' => 27,
                'county_id' => 365,
                'name' => 'گلوگاه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            78 => 
            array (
                'id' => 1079,
                'province_id' => 27,
                'county_id' => 365,
                'name' => 'مرزیکلا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            79 => 
            array (
                'id' => 1080,
                'province_id' => 27,
                'county_id' => 366,
                'name' => 'بابلسر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            80 => 
            array (
                'id' => 1081,
                'province_id' => 27,
                'county_id' => 366,
                'name' => 'بهنمیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            81 => 
            array (
                'id' => 1082,
                'province_id' => 27,
                'county_id' => 366,
                'name' => 'هادی شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            82 => 
            array (
                'id' => 1083,
                'province_id' => 27,
                'county_id' => 367,
                'name' => 'بهشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            83 => 
            array (
                'id' => 1084,
                'province_id' => 27,
                'county_id' => 367,
                'name' => 'خلیل شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            84 => 
            array (
                'id' => 1085,
                'province_id' => 27,
                'county_id' => 367,
                'name' => 'رستمکلا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            85 => 
            array (
                'id' => 1086,
                'province_id' => 27,
                'county_id' => 368,
                'name' => 'تنکابن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            86 => 
            array (
                'id' => 1087,
                'province_id' => 27,
                'county_id' => 368,
                'name' => 'خرم آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            87 => 
            array (
                'id' => 1088,
                'province_id' => 27,
                'county_id' => 368,
                'name' => 'شیرود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            88 => 
            array (
                'id' => 1089,
                'province_id' => 27,
                'county_id' => 368,
                'name' => 'نشتارود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            89 => 
            array (
                'id' => 1090,
                'province_id' => 27,
                'county_id' => 369,
                'name' => 'جویبار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            90 => 
            array (
                'id' => 1091,
                'province_id' => 27,
                'county_id' => 369,
                'name' => 'کوهی خیل',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            91 => 
            array (
                'id' => 1092,
                'province_id' => 27,
                'county_id' => 370,
                'name' => 'چالوس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            92 => 
            array (
                'id' => 1093,
                'province_id' => 27,
                'county_id' => 370,
                'name' => 'مرزن آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            93 => 
            array (
                'id' => 1094,
                'province_id' => 27,
                'county_id' => 370,
                'name' => 'هچیرود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            94 => 
            array (
                'id' => 1095,
                'province_id' => 27,
                'county_id' => 371,
                'name' => 'رامسر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            95 => 
            array (
                'id' => 1096,
                'province_id' => 27,
                'county_id' => 371,
                'name' => 'کتالم وسادات شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            96 => 
            array (
                'id' => 1097,
                'province_id' => 27,
                'county_id' => 372,
                'name' => 'پایین هولار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            97 => 
            array (
                'id' => 1098,
                'province_id' => 27,
                'county_id' => 372,
                'name' => 'ساری',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            98 => 
            array (
                'id' => 1099,
                'province_id' => 27,
                'county_id' => 372,
                'name' => 'فریم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            99 => 
            array (
                'id' => 1100,
                'province_id' => 27,
                'county_id' => 372,
                'name' => 'کیاسر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            100 => 
            array (
                'id' => 1101,
                'province_id' => 27,
                'county_id' => 373,
                'name' => 'آلاشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            101 => 
            array (
                'id' => 1102,
                'province_id' => 27,
                'county_id' => 373,
                'name' => 'پل سفید',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            102 => 
            array (
                'id' => 1103,
                'province_id' => 27,
                'county_id' => 373,
                'name' => 'زیرآب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            103 => 
            array (
                'id' => 1104,
                'province_id' => 27,
                'county_id' => 374,
                'name' => 'شیرگاه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            104 => 
            array (
                'id' => 1105,
                'province_id' => 27,
                'county_id' => 375,
                'name' => 'کیاکلا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            105 => 
            array (
                'id' => 1106,
                'province_id' => 27,
                'county_id' => 376,
                'name' => 'سلمان شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            106 => 
            array (
                'id' => 1107,
                'province_id' => 27,
                'county_id' => 376,
                'name' => 'عباس اباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            107 => 
            array (
                'id' => 1108,
                'province_id' => 27,
                'county_id' => 376,
                'name' => 'کلارآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            108 => 
            array (
                'id' => 1109,
                'province_id' => 27,
                'county_id' => 377,
                'name' => 'فریدونکنار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            109 => 
            array (
                'id' => 1110,
                'province_id' => 27,
                'county_id' => 378,
                'name' => 'ارطه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            110 => 
            array (
                'id' => 1111,
                'province_id' => 27,
                'county_id' => 378,
                'name' => 'قایم شهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            111 => 
            array (
                'id' => 1112,
                'province_id' => 27,
                'county_id' => 379,
                'name' => 'کلاردشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            112 => 
            array (
                'id' => 1113,
                'province_id' => 27,
                'county_id' => 380,
                'name' => 'گلوگاه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            113 => 
            array (
                'id' => 1114,
                'province_id' => 27,
                'county_id' => 381,
                'name' => 'سرخرود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            114 => 
            array (
                'id' => 1115,
                'province_id' => 27,
                'county_id' => 381,
                'name' => 'محمودآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            115 => 
            array (
                'id' => 1116,
                'province_id' => 27,
                'county_id' => 382,
                'name' => 'سورک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            116 => 
            array (
                'id' => 1117,
                'province_id' => 27,
                'county_id' => 383,
                'name' => 'نکا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            117 => 
            array (
                'id' => 1118,
                'province_id' => 27,
                'county_id' => 384,
                'name' => 'ایزدشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            118 => 
            array (
                'id' => 1119,
                'province_id' => 27,
                'county_id' => 384,
                'name' => 'بلده',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            119 => 
            array (
                'id' => 1120,
                'province_id' => 27,
                'county_id' => 384,
                'name' => 'چمستان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            120 => 
            array (
                'id' => 1121,
                'province_id' => 27,
                'county_id' => 384,
                'name' => 'رویان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            121 => 
            array (
                'id' => 1122,
                'province_id' => 27,
                'county_id' => 384,
                'name' => 'نور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            122 => 
            array (
                'id' => 1123,
                'province_id' => 27,
                'county_id' => 385,
                'name' => 'پول',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            123 => 
            array (
                'id' => 1124,
                'province_id' => 27,
                'county_id' => 385,
                'name' => 'کجور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            124 => 
            array (
                'id' => 1125,
                'province_id' => 27,
                'county_id' => 385,
                'name' => 'نوشهر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            125 => 
            array (
                'id' => 1126,
                'province_id' => 28,
                'county_id' => 386,
                'name' => 'آشتیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            126 => 
            array (
                'id' => 1127,
                'province_id' => 28,
                'county_id' => 387,
                'name' => 'اراک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            127 => 
            array (
                'id' => 1128,
                'province_id' => 28,
                'county_id' => 387,
                'name' => 'داودآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            128 => 
            array (
                'id' => 1129,
                'province_id' => 28,
                'county_id' => 387,
                'name' => 'ساروق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            129 => 
            array (
                'id' => 1130,
                'province_id' => 28,
                'county_id' => 387,
                'name' => 'کارچان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            130 => 
            array (
                'id' => 1131,
                'province_id' => 28,
                'county_id' => 388,
                'name' => 'تفرش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            131 => 
            array (
                'id' => 1132,
                'province_id' => 28,
                'county_id' => 389,
                'name' => 'خمین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            132 => 
            array (
                'id' => 1133,
                'province_id' => 28,
                'county_id' => 389,
                'name' => 'قورچی باشی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            133 => 
            array (
                'id' => 1134,
                'province_id' => 28,
                'county_id' => 390,
                'name' => 'جاورسیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            134 => 
            array (
                'id' => 1135,
                'province_id' => 28,
                'county_id' => 390,
                'name' => 'خنداب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            135 => 
            array (
                'id' => 1136,
                'province_id' => 28,
                'county_id' => 391,
                'name' => 'دلیجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            136 => 
            array (
                'id' => 1137,
                'province_id' => 28,
                'county_id' => 391,
                'name' => 'نراق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            137 => 
            array (
                'id' => 1138,
                'province_id' => 28,
                'county_id' => 392,
                'name' => 'پرندک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            138 => 
            array (
                'id' => 1139,
                'province_id' => 28,
                'county_id' => 392,
                'name' => 'خشکرود',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            139 => 
            array (
                'id' => 1140,
                'province_id' => 28,
                'county_id' => 392,
                'name' => 'رازقان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            140 => 
            array (
                'id' => 1141,
                'province_id' => 28,
                'county_id' => 392,
                'name' => 'زاویه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            141 => 
            array (
                'id' => 1142,
                'province_id' => 28,
                'county_id' => 392,
                'name' => 'مامونیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            142 => 
            array (
                'id' => 1143,
                'province_id' => 28,
                'county_id' => 393,
                'name' => 'آوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            143 => 
            array (
                'id' => 1144,
                'province_id' => 28,
                'county_id' => 393,
                'name' => 'ساوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            144 => 
            array (
                'id' => 1145,
                'province_id' => 28,
                'county_id' => 393,
                'name' => 'غرق آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            145 => 
            array (
                'id' => 1146,
                'province_id' => 28,
                'county_id' => 393,
                'name' => 'نوبران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            146 => 
            array (
                'id' => 1147,
                'province_id' => 28,
                'county_id' => 394,
                'name' => 'آستانه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            147 => 
            array (
                'id' => 1148,
                'province_id' => 28,
                'county_id' => 394,
                'name' => 'توره',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            148 => 
            array (
                'id' => 1149,
                'province_id' => 28,
                'county_id' => 394,
                'name' => 'شازند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            149 => 
            array (
                'id' => 1150,
                'province_id' => 28,
                'county_id' => 394,
                'name' => 'شهباز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            150 => 
            array (
                'id' => 1151,
                'province_id' => 28,
                'county_id' => 394,
                'name' => 'مهاجران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            151 => 
            array (
                'id' => 1152,
                'province_id' => 28,
                'county_id' => 394,
                'name' => 'هندودر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            152 => 
            array (
                'id' => 1153,
                'province_id' => 28,
                'county_id' => 395,
                'name' => 'خنجین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            153 => 
            array (
                'id' => 1154,
                'province_id' => 28,
                'county_id' => 395,
                'name' => 'فرمهین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            154 => 
            array (
                'id' => 1155,
                'province_id' => 28,
                'county_id' => 396,
                'name' => 'کمیجان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            155 => 
            array (
                'id' => 1156,
                'province_id' => 28,
                'county_id' => 396,
                'name' => 'میلاجرد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            156 => 
            array (
                'id' => 1157,
                'province_id' => 28,
                'county_id' => 397,
                'name' => 'محلات',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            157 => 
            array (
                'id' => 1158,
                'province_id' => 28,
                'county_id' => 397,
                'name' => 'نیمور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            158 => 
            array (
                'id' => 1159,
                'province_id' => 29,
                'county_id' => 398,
                'name' => 'ابوموسی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            159 => 
            array (
                'id' => 1160,
                'province_id' => 29,
                'county_id' => 399,
                'name' => 'بستک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            160 => 
            array (
                'id' => 1161,
                'province_id' => 29,
                'county_id' => 399,
                'name' => 'جناح',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            161 => 
            array (
                'id' => 1162,
                'province_id' => 29,
                'county_id' => 400,
                'name' => 'سردشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            162 => 
            array (
                'id' => 1163,
                'province_id' => 29,
                'county_id' => 400,
                'name' => 'گوهران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            163 => 
            array (
                'id' => 1164,
                'province_id' => 29,
                'county_id' => 401,
                'name' => 'بندرعباس',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            164 => 
            array (
                'id' => 1165,
                'province_id' => 29,
                'county_id' => 401,
                'name' => 'تازیان پایین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            165 => 
            array (
                'id' => 1166,
                'province_id' => 29,
                'county_id' => 401,
                'name' => 'تخت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            166 => 
            array (
                'id' => 1167,
                'province_id' => 29,
                'county_id' => 401,
                'name' => 'فین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            167 => 
            array (
                'id' => 1168,
                'province_id' => 29,
                'county_id' => 401,
                'name' => 'قلعه قاضی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            168 => 
            array (
                'id' => 1169,
                'province_id' => 29,
                'county_id' => 402,
                'name' => 'بندرلنگه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            169 => 
            array (
                'id' => 1170,
                'province_id' => 29,
                'county_id' => 402,
                'name' => 'چارک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            170 => 
            array (
                'id' => 1171,
                'province_id' => 29,
                'county_id' => 402,
                'name' => 'کنگ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            171 => 
            array (
                'id' => 1172,
                'province_id' => 29,
                'county_id' => 402,
                'name' => 'کیش',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            172 => 
            array (
                'id' => 1173,
                'province_id' => 29,
                'county_id' => 402,
                'name' => 'لمزان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            173 => 
            array (
                'id' => 1174,
                'province_id' => 29,
                'county_id' => 403,
                'name' => 'پارسیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            174 => 
            array (
                'id' => 1175,
                'province_id' => 29,
                'county_id' => 403,
                'name' => 'دشتی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            175 => 
            array (
                'id' => 1176,
                'province_id' => 29,
                'county_id' => 403,
                'name' => 'کوشکنار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            176 => 
            array (
                'id' => 1177,
                'province_id' => 29,
                'county_id' => 404,
                'name' => 'بندرجاسک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            177 => 
            array (
                'id' => 1178,
                'province_id' => 29,
                'county_id' => 405,
                'name' => 'حاجی اباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            178 => 
            array (
                'id' => 1179,
                'province_id' => 29,
                'county_id' => 405,
                'name' => 'سرگز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            179 => 
            array (
                'id' => 1180,
                'province_id' => 29,
                'county_id' => 405,
                'name' => 'فارغان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            180 => 
            array (
                'id' => 1181,
                'province_id' => 29,
                'county_id' => 406,
                'name' => 'خمیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            181 => 
            array (
                'id' => 1182,
                'province_id' => 29,
                'county_id' => 406,
                'name' => 'رویدر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            182 => 
            array (
                'id' => 1183,
                'province_id' => 29,
                'county_id' => 407,
                'name' => 'بیکاء',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            183 => 
            array (
                'id' => 1184,
                'province_id' => 29,
                'county_id' => 407,
                'name' => 'دهبارز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            184 => 
            array (
                'id' => 1185,
                'province_id' => 29,
                'county_id' => 407,
                'name' => 'زیارتعلی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            185 => 
            array (
                'id' => 1186,
                'province_id' => 29,
                'county_id' => 408,
                'name' => 'سیریک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            186 => 
            array (
                'id' => 1187,
                'province_id' => 29,
                'county_id' => 408,
                'name' => 'کوهستک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            187 => 
            array (
                'id' => 1188,
                'province_id' => 29,
                'county_id' => 408,
                'name' => 'گروک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            188 => 
            array (
                'id' => 1189,
                'province_id' => 29,
                'county_id' => 409,
                'name' => 'درگهان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            189 => 
            array (
                'id' => 1190,
                'province_id' => 29,
                'county_id' => 409,
                'name' => 'سوزا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            190 => 
            array (
                'id' => 1191,
                'province_id' => 29,
                'county_id' => 409,
                'name' => 'قشم',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            191 => 
            array (
                'id' => 1192,
                'province_id' => 29,
                'county_id' => 409,
                'name' => 'هرمز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            192 => 
            array (
                'id' => 1193,
                'province_id' => 29,
                'county_id' => 410,
                'name' => 'تیرور',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            193 => 
            array (
                'id' => 1194,
                'province_id' => 29,
                'county_id' => 410,
                'name' => 'سندرک',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            194 => 
            array (
                'id' => 1195,
                'province_id' => 29,
                'county_id' => 410,
                'name' => 'میناب',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            195 => 
            array (
                'id' => 1196,
                'province_id' => 29,
                'county_id' => 410,
                'name' => 'هشتبندی',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            196 => 
            array (
                'id' => 1197,
                'province_id' => 30,
                'county_id' => 411,
                'name' => 'آجین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            197 => 
            array (
                'id' => 1198,
                'province_id' => 30,
                'county_id' => 411,
                'name' => 'اسدآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            198 => 
            array (
                'id' => 1199,
                'province_id' => 30,
                'county_id' => 412,
                'name' => 'بهار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            199 => 
            array (
                'id' => 1200,
                'province_id' => 30,
                'county_id' => 412,
                'name' => 'صالح آباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            200 => 
            array (
                'id' => 1201,
                'province_id' => 30,
                'county_id' => 412,
                'name' => 'لالجین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            201 => 
            array (
                'id' => 1202,
                'province_id' => 30,
                'county_id' => 412,
                'name' => 'مهاجران',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            202 => 
            array (
                'id' => 1203,
                'province_id' => 30,
                'county_id' => 413,
                'name' => 'تویسرکان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            203 => 
            array (
                'id' => 1204,
                'province_id' => 30,
                'county_id' => 413,
                'name' => 'سرکان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            204 => 
            array (
                'id' => 1205,
                'province_id' => 30,
                'county_id' => 413,
                'name' => 'فرسفج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            205 => 
            array (
                'id' => 1206,
                'province_id' => 30,
                'county_id' => 414,
                'name' => 'دمق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            206 => 
            array (
                'id' => 1207,
                'province_id' => 30,
                'county_id' => 414,
                'name' => 'رزن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            207 => 
            array (
                'id' => 1208,
                'province_id' => 30,
                'county_id' => 414,
                'name' => 'قروه درجزین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            208 => 
            array (
                'id' => 1209,
                'province_id' => 30,
                'county_id' => 415,
                'name' => 'فامنین',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            209 => 
            array (
                'id' => 1210,
                'province_id' => 30,
                'county_id' => 416,
                'name' => 'شیرین سو',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            210 => 
            array (
                'id' => 1211,
                'province_id' => 30,
                'county_id' => 416,
                'name' => 'کبودرآهنگ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            211 => 
            array (
                'id' => 1212,
                'province_id' => 30,
                'county_id' => 416,
                'name' => 'گل تپه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            212 => 
            array (
                'id' => 1213,
                'province_id' => 30,
                'county_id' => 417,
                'name' => 'ازندریان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            213 => 
            array (
                'id' => 1214,
                'province_id' => 30,
                'county_id' => 417,
                'name' => 'جوکار',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            214 => 
            array (
                'id' => 1215,
                'province_id' => 30,
                'county_id' => 417,
                'name' => 'زنگنه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            215 => 
            array (
                'id' => 1216,
                'province_id' => 30,
                'county_id' => 417,
                'name' => 'سامن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            216 => 
            array (
                'id' => 1217,
                'province_id' => 30,
                'county_id' => 417,
                'name' => 'ملایر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            217 => 
            array (
                'id' => 1218,
                'province_id' => 30,
                'county_id' => 418,
                'name' => 'برزول',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            218 => 
            array (
                'id' => 1219,
                'province_id' => 30,
                'county_id' => 418,
                'name' => 'فیروزان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            219 => 
            array (
                'id' => 1220,
                'province_id' => 30,
                'county_id' => 418,
                'name' => 'گیان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            220 => 
            array (
                'id' => 1221,
                'province_id' => 30,
                'county_id' => 418,
                'name' => 'نهاوند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            221 => 
            array (
                'id' => 1222,
                'province_id' => 30,
                'county_id' => 419,
                'name' => 'جورقان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            222 => 
            array (
                'id' => 1223,
                'province_id' => 30,
                'county_id' => 419,
                'name' => 'قهاوند',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            223 => 
            array (
                'id' => 1224,
                'province_id' => 30,
                'county_id' => 419,
                'name' => 'مریانج',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            224 => 
            array (
                'id' => 1225,
                'province_id' => 30,
                'county_id' => 419,
                'name' => 'همدان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            225 => 
            array (
                'id' => 1226,
                'province_id' => 31,
                'county_id' => 420,
                'name' => 'ابرکوه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            226 => 
            array (
                'id' => 1227,
                'province_id' => 31,
                'county_id' => 420,
                'name' => 'مهردشت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            227 => 
            array (
                'id' => 1228,
                'province_id' => 31,
                'county_id' => 421,
                'name' => 'احمدآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            228 => 
            array (
                'id' => 1229,
                'province_id' => 31,
                'county_id' => 421,
                'name' => 'اردکان',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            229 => 
            array (
                'id' => 1230,
                'province_id' => 31,
                'county_id' => 421,
                'name' => 'عقدا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            230 => 
            array (
                'id' => 1231,
                'province_id' => 31,
                'county_id' => 422,
                'name' => 'اشکذر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            231 => 
            array (
                'id' => 1232,
                'province_id' => 31,
                'county_id' => 422,
                'name' => 'خضرآباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            232 => 
            array (
                'id' => 1233,
                'province_id' => 31,
                'county_id' => 423,
                'name' => 'بافق',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            233 => 
            array (
                'id' => 1234,
                'province_id' => 31,
                'county_id' => 424,
                'name' => 'بهاباد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            234 => 
            array (
                'id' => 1235,
                'province_id' => 31,
                'county_id' => 425,
                'name' => 'تفت',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            235 => 
            array (
                'id' => 1236,
                'province_id' => 31,
                'county_id' => 425,
                'name' => 'نیر',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            236 => 
            array (
                'id' => 1237,
                'province_id' => 31,
                'county_id' => 426,
                'name' => 'مروست',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            237 => 
            array (
                'id' => 1238,
                'province_id' => 31,
                'county_id' => 426,
                'name' => 'هرات',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            238 => 
            array (
                'id' => 1239,
                'province_id' => 31,
                'county_id' => 427,
                'name' => 'مهریز',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            239 => 
            array (
                'id' => 1240,
                'province_id' => 31,
                'county_id' => 428,
                'name' => 'بفروییه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            240 => 
            array (
                'id' => 1241,
                'province_id' => 31,
                'county_id' => 428,
                'name' => 'میبد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            241 => 
            array (
                'id' => 1242,
                'province_id' => 31,
                'county_id' => 428,
                'name' => 'ندوشن',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            242 => 
            array (
                'id' => 1243,
                'province_id' => 31,
                'county_id' => 429,
                'name' => 'حمیدیا',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            243 => 
            array (
                'id' => 1244,
                'province_id' => 31,
                'county_id' => 429,
                'name' => 'زارچ',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            244 => 
            array (
                'id' => 1245,
                'province_id' => 31,
                'county_id' => 429,
                'name' => 'شاهدیه',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            245 => 
            array (
                'id' => 1246,
                'province_id' => 31,
                'county_id' => 429,
                'name' => 'یزد',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}