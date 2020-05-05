<?php

namespace App\Http\Controllers;

use App\Models\MultipleImage;

use Illuminate\Http\Request;

class MultipleImageController extends Controller
{
    //
    public function index()
    {
        $id = env("GALLERY_ID") ? env("GALLERY_ID") : 2;
        $g = MultipleImage::where('id',$id)->get();
        return $g->toJson();
    }
}
