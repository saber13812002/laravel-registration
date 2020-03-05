<?php

use Illuminate\Database\Seeder;

class DemoMultipleImagesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('demo_multiple_images')->delete();
        
        \DB::table('demo_multiple_images')->insert(array (
            0 => 
            array (
                'id' => 8,
                'title' => '121111dd111',
            'pictures' => '["images\\/banner1.png","images\\/f7a2ddacefe78292aadf0d51159135f6.jpeg","images\\/smacklogo.png","images\\/18307343_163133496175_2.jpg","images\\/8fbeca541fe0e3aeb2302dd1d3effd9e.jpg","images\\/TB2IjAdnHXlpuFjSszfXXcSGXXa_!!789545220.jpg","images\\/TB2jT.Hgd4opuFjSZFLXXX8mXXa_!!789545220.jpg","images\\/TB2jT.Hgd4opuFjSZFLXXX8mXXa_!!789545220_\\u526f\\u672c.jpg","images\\/u=2610340632,3536522605&fm=23&gp=0.jpg","images\\/u=1190881085,73993090&fm=23&gp=0.jpg","images\\/u=1053658070,2446294467&fm=23&gp=0.jpg","images\\/11.jpeg","images\\/e1f9bbce5ab8244893944e1c48759340.jpeg","images\\/\\u5b66\\u4e60\\u95ed\\u73af.png","images\\/Screenshot_from_2016-03-17_20_00_11.png","images\\/1.png","images\\/d57e94a7b1a3dc037cc27ac64edc0f93.png","images\\/bc2x.jpg","images\\/b01695eab7087257722943d08444dfb9.jpg","images\\/t0175976fc929573a5e.jpg","images\\/\\u5fae\\u4fe1\\u56fe\\u7247_20171108103031.jpg","images\\/3c01bed0ad2c4c78ed396aebba2e289e.jpeg","images\\/male.jpg","images\\/3f56ca63bf6ced217847cc7ee8bc6161.jpg","images\\/tiger.jpeg","images\\/547138142.jpg","images\\/b8389b504fc2d562cda1d027ee1190ef77c66c4a.jpg","images\\/a9050084a0b642d72180a62118dc7cd7.jpg","images\\/shit.png","images\\/f.jpeg","images\\/8e98273f5ac8f9567522dec96ed37c5e.jpeg","images\\/hs.jpg","images\\/80b24f31128ef0870e3faa1a8f5d4808.png","images\\/gif-wallpaper-for-android.gif","images\\/25cdfbd8044f350bb15e901a9c58afbf.jpg","images\\/WechatIMG167.jpeg","images\\/d4ab1e336fe0b66fba20e1dc58d98b16.jpg","images\\/\\u591a\\u91cd\\u7bad\\u888b.png","images\\/27145343_1684512088275020_1190131902_o.jpg","images\\/profile.png","images\\/3-12-1.jpg","images\\/9828f1d88cd392d04c227d460301d0cd.jpg","images\\/01fc04c63bbe148a6e434d05c8225635.jpg","images\\/fefd80a186906e19c6fe2f9d80327888.jpg","images\\/05575395226129923.jpg","images\\/chunk.png","images\\/56e9fa160cb123023.jpg","images\\/ewm.jpg","images\\/desktop-background-hd-3.jpg","images\\/coderstory_bc_1_16.png","images\\/211498540700379343evergreen_57688990_500kb_1920x1080.jpg","images\\/5dc3303b9b8420fecdef9fbc044f3acf.jpg","images\\/75e42d8abcaf4e234e9d9f399c46ee7d.jpg","images\\/\\u4e0b\\u8f09 (4).jpg","images\\/8e3abb757bb4d31aa4769a018b80bc4c.png","images\\/3-160P4111639.jpg","images\\/39b0bb6bdb99c902c452bbe2106880b4.png","images\\/5e381553595072d6e12e8d221cbb9c2d.jpg","images\\/2.jpeg"]',
                'created_at' => '2017-09-15 09:00:43',
                'updated_at' => '2018-08-04 05:40:34',
            ),
            1 => 
            array (
                'id' => 9,
                'title' => 'dsfsdfsf',
                'pictures' => '["images\\/b709f43dab3b31d4df969e9898dd9514.jpg","images\\/4096b167906d571421bad97ec384f11b.png","images\\/201701242257246485.jpg","images\\/6b08b3943dc55e0d856cf82470eb38a4.jpg","images\\/539385e40e526b740fadf38e18372b77.jpg","images\\/b87f816991892589ad6885e65b523cdb.jpg","images\\/bd2381f908ed380bc947999b9a426cf5.jpg","images\\/7fa4f844fcd262497a805ac469072712.jpg","images\\/dcce9bc1.jpg","images\\/Screenshot from 2018-07-04 10-37-46.png","images\\/Screenshot from 2018-07-03 14-45-07.png"]',
                'created_at' => '2017-09-19 18:31:34',
                'updated_at' => '2018-07-08 19:52:35',
            )
        ));
        
        
    }
}