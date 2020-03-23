<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//         $this->call(UsersTableSeeder::class);
        $this->call(DemoMultipleImagesTableSeeder::class);
        $this->call(ProvincesTableSeeder::class);
        $this->call(CitiesTableSeeder::class);
        $this->call(CountiesTableSeeder::class);
        $this->call(PagesettingsTableSeeder::class);
        $this->call(MatchesTableSeeder::class);
        $this->call(TeamsTableSeeder::class);
        $this->call(PlaygroundsTableSeeder::class);
        $this->call(AdminMenuTableSeeder::class);
    }
}
