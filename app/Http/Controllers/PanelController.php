<?php

namespace App\Http\Controllers;

class PanelController extends Controller
{

    public function index()
    {
        return view('operator.index');
    }

    public function cartable()
    {
        return view('operator.cartable');
    }

    public function messages()
    {
        return view('operator.messages');
    }
}
