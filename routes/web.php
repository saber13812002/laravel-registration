<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header('Access-Control-Allow-Origin:  *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/*
// Route::get('/', 'HomeController@index');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::get('/reg', function () {
    return File::get(public_path() . '/app/index.html');
});


Route::get('/payment', 'BankController@payment');


Route::any('/verifypayment', 'BankController@verifypayment');
//Route::get('/verifypayment', 'BankController@verifypayment');
//Route::post('/verifypayment', 'BankController@verifypayment');



Route::post('image-upload/{id}', 'ImageUploadController@imageUploadPost')->name('image.upload.post');


Route::get('/register', function () {
    return File::get(public_path() . '/app/index.html');
});
*/

Route::get('/{any}', 'HomeController@index')->where('any',  '^(?!api).*$')->where('any',  '^(?!image-upload).*$');

// Route::get('image-upload', 'ImageUploadController@imageUpload')->name('image.upload');
// Route::post('image-upload/{id}', 'ImageUploadController@imageUploadPost')->name('image.upload.post');
