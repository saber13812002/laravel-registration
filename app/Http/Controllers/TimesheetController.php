<?php

namespace App\Http\Controllers;

use App\Models\Info;
use App\Models\Timesheet as ModelsTimesheet;
use App\Models\Timesheet;
use App\Models\Period;
use Illuminate\Http\Request;

class TimesheetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $p = Period::where('active', true)->orderBy('id', 'desc')->first();

        $inf = Info::where('token', $request['token'])->first();
        if ($inf->author_id > 0) {
            $t = Timesheet::where('user_id', $inf->author_id)->where('period_id', $p->id)->get();
            return response()->json([
                'status' => '200',
                'message' => 'all of your timesheet in last active period',
                "data" => $t
            ]);
        }
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
        //

        $inf = Info::where('token', $request['token'])->first();
        if ($inf->author_id > 0) {
            if ($request['shift_id'])
                if ($request['day_of_week'])
                    if ($request['req_date'])
                        if ($request['option_key']) {
                            $plus_date = $request['week_day'];
                            $action = $request['option_key'];

                            // $reserve_date_req = getDate($request['week_day']);
                            $day = date('w');
                            // $reserve_date_req = date('Y-m-d', strtotime('+' . $plus_date . ' days'));
                            // $week_end = date('Y-m-d', strtotime('+' . (6 - $day) . ' days'));

                            // $reserve_date_req = date('Y-m-d');
                            // $reserve_date_req->modify('+' . $plus_date . ' day');
                            $format = "Y-m-d"; //or something else that date() accepts as a format
                            $reserve_date_req = date_format(date_create($request['req_date']), $format);

                            $t = Timesheet::where('user_id', $inf->author_id)->where('date', $reserve_date_req)->first();
                            if (!$t) {
                                $t = new Timesheet();
                                $t->user_id = $inf->author_id;
                                $t->date = $reserve_date_req;
                                // TODO
                                $t->period_id = 1;
                            }
                            $t->shift_id = $request['shift_id'];
                            $t->day_of_week = $request['day_of_week'];
                            $t->bakhsh_id = $request['option_key'];



                            if ($action == 1) {
                                $t->save();
                            } else if ($action == 3) {
                                $t->delete();
                            } else {
                                $t->extra = 1;
                                $t->save();
                            }

                            if (1 == 1)
                                return response()->json([
                                    'code' => '200',
                                    'message' => 'success',
                                    "data" => array($t)
                                ]);
                            else
                                return $t->toJson();
                        }
        }
        return response()->json([
            'status' => '500',
            'message' => 'token not exist or expired',
            "data" => null
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Timesheet  $timesheet
     * @return \Illuminate\Http\Response
     */
    public function show(Timesheet $timesheet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Timesheet  $timesheet
     * @return \Illuminate\Http\Response
     */
    public function edit(Timesheet $timesheet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Timesheet  $timesheet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Timesheet $timesheet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Timesheet  $timesheet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Timesheet $timesheet)
    {
        //
    }
}
