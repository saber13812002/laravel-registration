<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Appointment;
use App\Models\AppointmentView;

class AppointmentController extends Controller
{
    private $appointmentView;

    public function __construct(Appointment $appointment, AppointmentView $appointmentView)
    {
        $this->appointment = $appointment;
        $this->appointmentView = $appointmentView;
    }

    public function api(Request $request)
    {
        $appointment = $this->appointmentView->paginate(15);

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($appointment)
            ]);
        else
            return $appointment->toJson();
    }

    public function getbyid($id, Request $request)
    {
        $appointment = $this->appointmentView->whereId($id)->first();

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($appointment)
            ]);
        else
            return $appointment->toJson();
    }

    public function post(Request $request)
    {
        $appntmnt = new Appointment;
        $appntmnt->req_date = $request->req_date;
        $appntmnt->req_time = $request->req_time;
        $appntmnt->author_id = 1;
        $appntmnt->clinic_id = $request->clinic_id;
        $appntmnt->save();

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($appntmnt)
            ]);
        else
            return $appntmnt->toJson();
    }
}
