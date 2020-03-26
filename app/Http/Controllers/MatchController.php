<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Match;
use Illuminate\Http\Request;
use Response;

class MatchController extends Controller
{
    
    public function getCurrent($dateInterval)
    {
        if ($dateInterval)
        $results = DB::select('SELECT
        t.`name` AS team_1,
        t2.`name` AS team_2,
        m.score_1,
        m.score_2,
        t.id AS team_id_1,
        t2.id AS team_id_2 
    FROM
        matches AS m
        LEFT JOIN ( teams AS t ) ON m.team_id_1 = t.id
        LEFT JOIN teams AS t2 ON t2.id = m.team_id_2 
    WHERE
        m.created_at < now()+ ?', [$dateInterval]);
    if ($results)
        return Response::json($results);
    else
        return [];
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Match  $match
     * @return \Illuminate\Http\Response
     */
    public function show(Match $match)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Match  $match
     * @return \Illuminate\Http\Response
     */
    public function edit(Match $match)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Match  $match
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Match $match)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Match  $match
     * @return \Illuminate\Http\Response
     */
    public function destroy(Match $match)
    {
        //
    }
}
