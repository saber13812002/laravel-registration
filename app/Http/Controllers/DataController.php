<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public function open()
    {
        $message = "This data is open and can be accessed without the client being authenticated";
        $code = 200;
        $payload =
            compact(
                'message',
                'code'
            );
        return response()->json(compact('payload'), 200);
    }

    public function closed()
    {
        $message = "Only authorized users can see this";
        $code = 200;
        $payload =
            compact(
                'message',
                'code'
            );
        return response()->json(compact('payload'), 200);
    }

    public function appointment()
    {
        $message = "Only authorized users can see this";
        $code = 200;
        $payload =
            compact(
                'message',
                'code'
            );
        return response()->json(compact('payload'), 200);
    }
}
