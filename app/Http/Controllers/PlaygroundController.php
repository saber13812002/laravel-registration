<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Playground;
use App\Models\PlaygroundView;
use Illuminate\Http\Request;
use Response;

class PlaygroundController extends Controller
{


    public function getall(Request $request)
    {
        //TODO: we should filter it from  last night till 15 next days (performance)
        $pg = PlaygroundView::where('city_id', $request->city_id)->orderBy('id', 'DESC')->paginate(15);

        // $thisuserid = $request->user_id;
        // $pintrips = Pintrip::get();
        // foreach ($trip as $t) {
        //     foreach ($pintrips as $p) {
        //         if ($p->trip_id == $trip->id && $p->driver_id == $t->driver_id && $p->author_id == $thisuserid)
        //             $t->pinned = true;
        //         else
        //             $t->pinned = false;
        //     }
        // }

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($pg)
            ]);
        else
            return $pg->toJson();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //http://localhost:8000/api/v1/playground/53.001/35.001/100
    public function get($lat, $lng, $radius)
    {
        if ($lat && $lng)
            $results = DB::select('SELECT * , ( ACOS( COS( RADIANS( ? ) ) * COS( RADIANS( m.lat ) ) * COS( RADIANS( m.lng ) - RADIANS( ? ) ) + SIN( RADIANS( ? ) ) * SIN( RADIANS( m.lat ) ) ) * 6371000 ) AS distance_in_meters FROM playgrounds as m    where  m.active =1 having distance_in_meters<? ORDER BY distance_in_meters ASC ', [$lat, $lng, $lat, $radius]);
        if ($results)
            return Response::json($results);
        else
            return [];
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
     * @param  \App\Playground  $playground
     * @return \Illuminate\Http\Response
     */
    public function show(Playground $playground)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Playground  $playground
     * @return \Illuminate\Http\Response
     */
    public function edit(Playground $playground)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Playground  $playground
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Playground $playground)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Playground  $playground
     * @return \Illuminate\Http\Response
     */
    public function destroy(Playground $playground)
    {
        //
    }
}
