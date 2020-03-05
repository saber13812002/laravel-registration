<?php

namespace App\Http\Controllers;

use JWTAuth;

use Illuminate\Http\Request;

use App\Models\Info;
use App\Models\InfoView;

use App\Models\Pay;

class InfoController extends Controller
{
    private $infoView;

    public function __construct(Info $info, InfoView $infoView)
    {
        $this->info = $info;
        $this->infoView = $infoView;
    }

    public function api(Request $request)
    {
        $info = $this->infoView->paginate(15);

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($info)
            ]);
        else
            return $info->toJson();
    }

    public function getbyid($id, Request $request)
    {
        $info = $this->infoView->whereId($id)->first();

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($info)
            ]);
        else
            return $info->toJson();
    }

    public function post(Request $request)
    {
        $inf = new Info;
        $inf->req_date = $request->req_date;
        $inf->req_time = $request->req_time;
        $inf->author_id = 1;
        $inf->save();

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($inf)
            ]);
        else
            return $inf->toJson();
    }

    public function me(Request $request)
    {

        $inf = Info::where('token', $request['token'])->first();
        $inf->req_time = now();

        if ($request['name'])
            $inf->name = $request['name'];
        if ($request['family'])
            $inf->family = $request['family'];
        // if ($request['mobile'])
        //     $inf->mobile = $request['mobile'];
        if ($request['email'])
            $inf->email = $request['email'];
        if ($request['national_code'])
            $inf->national_code = $request['national_code'];
        if ($request['shomshenas'])
            $inf->shomshenas = $request['shomshenas'];
        if ($request['fathername'])
            $inf->fathername = $request['fathername'];
        if ($request['birthdate'])
            $inf->birthdate = $request['birthdate'];
        if ($request['tahsilat'])
            $inf->tahsilat = $request['tahsilat'];
        if ($request['province'])
            $inf->province = $request['province'];
        if ($request['county'])
            $inf->county = $request['county'];
        if ($request['city'])
            $inf->city = $request['city'];
        if ($request['address'])
            $inf->address = $request['address'];
        if ($request['postalcode'])
            $inf->postalcode = $request['postalcode'];
        if ($request['phone'])
            $inf->phone = $request['phone'];

        if ($inf->smsSent != "1" && $request['name'] && $request['family'] && $request['email'] && $request['national_code'] && $request['shomshenas'] && $request['fathername'] && $request['birthdate'] && $request['tahsilat'] && $request['ostan'] && $request['shahr'] && $request['address'] && $request['postalcode'] && $request['phone']) {
            app('App\Http\Controllers\SmsController')->smsSent($inf->mobile, env("KaveNegarVerificationTemplateNameForRegistrationCompleted"));
            // app('App\Http\Controllers\SmsController')->smsSent($inf->mobile, "firiFansVerificationCode");
            $inf->smsSent = "1";
        }


        $inf->save();


        if (1 == 1)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($inf)
            ]);
        else
            return $inf->toJson();
    }

    public function profile_picture(Request $request)
    {

        $p = Info::where('id', $request['author_id'])->first();

        if (1 == 1)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($p)
            ]);
        else
            return $p->toJson();
    }

    public function pay(Request $request)
    {

        //$inf = Pay::where('token', $request['token'])->first();
        $p = Pay::where('author_id', $request['author_id'])->first();


        if (1 == 1)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($p)
            ]);
        else
            return $p->toJson();
    }
}
