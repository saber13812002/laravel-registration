<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;


use App\Models\Categury;

class CateguryController extends Controller
{
    private $category;

    public function __construct(Categury $category)
    {

        $this->category = $category;
    }

    public function api(Request $request)
    {
        $category = $this->category->paginate(15);
        foreach ($category as $cat) {
            $icon = $cat->icon;
            $cat = Arr::except($cat, ['icon']);
            $cat = Arr::add($cat, 'icon', url("{$icon}"));
        }

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($category)
            ]);
        else
            return $category->toJson();
    }

    public function getbyid($id, Request $request)
    {
        $category = $this->category->whereId($id)->first();

        $icon = $category->icon;
        $category = Arr::except($category, ['icon']);
        $category = Arr::add($category, 'icon', url("{$icon}"));


        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($category)
            ]);
        else
            return $category->toJson();
    }
}
