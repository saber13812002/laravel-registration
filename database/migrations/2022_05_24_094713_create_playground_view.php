<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlaygroundView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE VIEW playgrounds_view
            AS
            SELECT
                playgrounds.id,
                playgrounds.name,
                playgrounds.lat,
                playgrounds.lng,
                playgrounds.desc,
                playgrounds.city_id,
                playgrounds.active,
                playgrounds.rimHeight,
                playgrounds.distance2parking,
                playgrounds.rimNumber,
                playgrounds.roof,
                playgrounds.spotlight,
                playgrounds.fence,
                playgrounds.parking,
                playgrounds.basketnet,
                playgrounds.scoreline,
                playgrounds.lines,
                playgrounds.author_id as playground_author_id,

                infos.name AS owner_name,
                infos.family AS owner_family,
                infos.birthdate,
                infos.mobile,
                infos.profile_picture,
                infos.profile_picture_cdn,
                infos.active as info_active,
                infos.smsSent,
                infos.city,

                cities.name as city_name,

                matches.team_id_1 AS team_1_id,
                matches.team_id_2 AS team_2_id,
                matches.score_1,
                matches.score_2,
                matches.quarter,
                matches.finished,
                matches.created_at AS match_created_at,
                matches.updated_at AS match_updated_at


            FROM
                playgrounds
                LEFT JOIN infos ON playgrounds.author_id = infos.author_id
                LEFT JOIN matches ON playgrounds.author_id = matches.author_id
                LEFT JOIN cities ON cities.id = infos.city

                where playgrounds.active > 0 and infos.active > 0  and infos.smsSent > 0
                ORDER BY playgrounds.updated_at DESC;
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('playgrounds_view');
    }
}
