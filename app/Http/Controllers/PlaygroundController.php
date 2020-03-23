<?php

namespace App\Http\Controllers;

use App\Playground;
use App\PlaygroundView;
use Illuminate\Http\Request;

class PlaygroundController extends Controller
{

    
    public function getall(Request $request)
    {
        //TODO: we should filter it from  last night till 15 next days (performance)
        $trip = $this->tripView::where('city_id', $request->city_id)->orderBy('id', 'DESC')->paginate(15);

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
                "data" => array($trip)
            ]);
        else
            return $trip->toJson();
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
