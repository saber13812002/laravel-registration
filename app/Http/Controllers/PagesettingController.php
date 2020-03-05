<?php

namespace App\Http\Controllers;

use App\Models\Pagesetting;
use Illuminate\Http\Request;

class PagesettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $pagesettings = Pagesetting::orderBy('id')->get();
        return $pagesettings->toJson();
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
     * @param  \App\Pagesetting  $pagesetting
     * @return \Illuminate\Http\Response
     */
    public function show(Pagesetting $pagesetting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pagesetting  $pagesetting
     * @return \Illuminate\Http\Response
     */
    public function edit(Pagesetting $pagesetting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pagesetting  $pagesetting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pagesetting $pagesetting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pagesetting  $pagesetting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pagesetting $pagesetting)
    {
        //
    }
}
