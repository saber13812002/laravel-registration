<?php

namespace App\Http\Controllers;

use App\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    //http://localhost:8000/api/v1/team?q=%D9%86
    public function search(Request $request)
    {
        $q = $request->get('q');
        $t = Team::where('name', 'like', "%$q%")->paginate(15);

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($t)
            ]);
        else
            return $t->toJson();
    }
    //http://localhost:8000/api/v1/team/1
    public function getbyid($id)
    {

        $t = Team::where('id', $id)->paginate(15);

        if ($id)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($t)
            ]);
        else
            return $t->toJson();
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
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function show(Team $team)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function edit(Team $team)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Team $team)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function destroy(Team $team)
    {
        //
    }
}
