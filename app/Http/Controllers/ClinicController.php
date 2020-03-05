<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ClinicCategoryView;
use App\Models\ClinicCategoryByIdView;
use App\Models\MapView;
use App\Models\Categury;
use Illuminate\Support\Arr;

class ClinicController extends Controller
{
    private $clinicView;
    private $mapView;

    public function __construct(ClinicCategoryView $clinicView, ClinicCategoryByIdView $clinicCatByIdView, MapView $mapView)
    {
        $this->clinicView = $clinicView;
        $this->clinicCatByIdView = $clinicCatByIdView;
        $this->mapView = $mapView;
    }

    public function api(Request $request)
    {
        $clinics = $this->clinicView->paginate(15);

        foreach ($clinics as $item) {
            $logo = $item->logo;
            $item = Arr::except($item, ['logo']);
            $item = Arr::add($item, 'logo', url("{$logo}"));
        }


        if ($request->categories) {
            return $this->search($request, '');
        }


        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($clinics)
            ]);
        else
            return $clinics->toJson();
    }

    public function search(Request $request, string $map)
    {
        if ($request->has('categories')) {
            if (strpos($request->categories, ',') == false) {
                $q = Categury::find($request->categories)->clinics;
                return $this->clinicView($q, $map);
            } else {
                $result = [];
                $pars = explode(',', $request->categories);
                foreach ($pars as $par)
                    array_push($result, $this->clinicView(Categury::find($par)->clinics, $map)[0]);
                return $result;
            }
        }
    }

    public function clinicView($q, string $map)
    {
        if ($map == '')
            return $q->map(function ($item, $key) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'logo' => $item->logo,
                    'address' => $item->address,
                    'categoryId' => $item->categury_id,
                    'categoryTitle' => Categury::find($item->categury_id)->title
                ];
            });
        else
            return $q->map(function ($item, $key) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'logo' => $item->logo,
                    'address' => $item->address,
                    'latitude' => $item->geoLatitude,
                    'longitude' => $item->geoLongitude,
                    'categoryId' => $item->categury_id,
                    'categoryTitle' => Categury::find($item->categury_id)->title
                ];
            });
    }

    public function getbyid($id, Request $request)
    {
        $clinics = $this->clinicCatByIdView->whereId($id)->first();

        $logo = $clinics->logo;
        $clinics = Arr::except($clinics, ['logo']);
        $clinics = Arr::add($clinics, 'logo', url("{$logo}"));

        $images = $clinics->images;
        $clinics = Arr::except($clinics, ['images']);

        $images = explode('|', $images, 3);
        $imagesArr = [];
        foreach ($images as $item) {
            array_push($imagesArr, url("{$item}"));
        }

        $clinics = Arr::add($clinics, 'images', $imagesArr);

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($clinics)
            ]);
        else
            return $clinics->toJson();
    }

    public function mapapi(Request $request)
    {
        $maps = $this->mapView->paginate(15);

        foreach ($maps as $item) {
            $logo = $item->logo;
            $item = Arr::except($item, ['logo']);
            $item = Arr::add($item, 'logo', url("{$logo}"));
        }


        if ($request->categories) {
            return $this->search($request, 'map');
        }

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($maps)
            ]);
        else
            return $maps->toJson();
    }

    public function mapgetbyid($id, Request $request)
    {
        $maps = $this->mapView->whereId($id)->first();

        $logo = $maps->logo;
        $maps = Arr::except($maps, ['logo']);
        $maps = Arr::add($maps, 'logo', url("{$logo}"));


        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($maps)
            ]);
        else
            return $maps->toJson();
    }
}
