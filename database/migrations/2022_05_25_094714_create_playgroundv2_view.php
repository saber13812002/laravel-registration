<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlaygroundv2View extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE VIEW playgroundv2_views
            AS
            SELECT * 
                , ( ACOS( COS( RADIANS( $lat ) ) * COS( RADIANS( m.lat ) ) * COS( RADIANS( m.lng ) - RADIANS( $long ) ) + SIN( RADIANS( $lat ) ) * SIN( RADIANS( m.lat ) ) ) * 6371000 ) AS distance_in_meters 
            FROM playgrounds as m 
            where m.PlaygroundType <> 'userloc' 
                and m.Active =1 having distance_in_meters<$radius 
            ORDER BY distance_in_meters ASC ;
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('playgroundv2_views');
    }
}
