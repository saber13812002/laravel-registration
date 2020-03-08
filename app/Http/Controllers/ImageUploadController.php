<?php


use Illuminate\Support\Facades\Storage;

namespace App\Http\Controllers;

use App\Models\Info;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\FileUpload;


class ImageUploadController extends Controller

{

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function formSubmit(Request $request)
    {

        request()->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imageName = time() . '.' . request()->image->getClientOriginalExtension();
        // $request->image->move(public_path('images'), $imageName);
        request()->image->move(public_path('images') . '/avatars', $imageName);

        // $file = $request->file('image');
        // $filePath = "/images/avatars/" . $imageName;
        Storage::disk('liara')->put($imageName, 'public');

        // Storage::put('/avatars/1', request()->image);

        $p = Info::where('token', $request->token)->first();
        $p->profile_picture = $imageName;
        $p->save();

        return response()->json([
            'success' => 'عکس پروفایل شما با موفقیت بارگذاری شد.',
            'imageName' => $imageName
        ]);
    }


    public function store(Request $request)
    {


        request()->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);


        $imageName = time() . '.' . request()->image->getClientOriginalExtension();
        // $request->image->move(public_path('images'), $imageName);
        request()->image->move(public_path('images') . '/avatars', $imageName);


        $p = Info::where('author_id', 155)->first();
        $p->profile_picture = $imageName;
        $p->save();

        return response()->json(['success' => 'You have successfully uploaded an image'], 200);
    }
    /**

     * Display a listing of the resource.

     *

     * @return \Illuminate\Http\Response

     */


    // private $id;

    // public function __construct(Info $id)
    // {
    //     $this->id = $id;
    // }

    public function imageUpload(Request $request)

    {

        // $pay = Info::where('id', $request['author_id'])->first();
        $this->id = $request['author_id'];
        // if ($pay->profile_picture) {
        return view('imageUpload', ["id" => $this->id]);
        // } else {
        //     return "
        //     پرداخت برای کاربر شما یکبار با موفقیت انجام شده است 
        //     به اپ باز گردید و صفحه را ریفرش کنید" . "\n\r" .
        //         "<br>" .
        //         "به اپلیکیشن باز گردید" . "<a href='" .
        //         env('APP_HOT_LINK') . "'>بازگشت به اپ اینجا کلیک کنید</a>";
        // }
    }



    /**

     * Display a listing of the resource.

     *

     * @return \Illuminate\Http\Response

     */

    public function imageUploadPost(Request $request)

    {

        request()->validate([

            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

        ]);



        $imageName = time() . '.' . request()->image->getClientOriginalExtension();


        //Storage::disk('local')->move(request()->image, $imageName);

        request()->image->move(public_path('images') . '/avatars', $imageName);

        if ($request->id) {
            $p = Info::where('author_id', $request->id)->first();
            $p->profile_picture = $imageName;
            $p->save();
        }

        return back()

            ->with('success', 'عکس آپلود شد ' . "به اپلیکیشن باز گردید")

            ->with('link', env('APP_HOT_LINK'))

            ->with('image', $imageName);
    }


    public function imageUploadSimple(Request $request)
    {
        $image = $request->getContent();
        $mystring = 'abc';
        $findmeJpeg   = 'data:image/jpeg;base64,';
        $findmePng   = 'data:image/jpg;base64,';
        $pos = strpos($image, $findmeJpeg);

        // The !== operator can also be used.  Using != would not work as expected
        // because the position of 'a' is 0. The statement (0 != false) evaluates
        // to false.

        Log::channel('slack')->info($image);
        Log::channel('slack')->info('Something happened!');
        Log::info('Showing user profile for user: ');

        if ($pos !== false) {
            $image = str_replace('data:image/jpeg;base64,', '', $image);
        } else {
            $pos = strpos($image, $findmePng);
            Log::error($$image);
            $image = str_replace('data:image/jpg;base64,', '', $image);
        }

        $image = str_replace(' ', '+', $image);
        $imageName = str_random(10) . '.' . 'png';

        if (env("IMAGES_PUBLIC_FOLDER"))
            $path_public_folder = env("IMAGES_PUBLIC_FOLDER");
        else
            $path_public_folder = public_path("images");


        \File::put($path_public_folder . '/' . $imageName, base64_decode($image));


        //$path = $request->file('photo')->move(public_path("/"), $filename);
        $photoUrl = url('/images/' . $imageName);
        return response()->json(['url' => $photoUrl, 'id' => 1], 200);
    }
}
