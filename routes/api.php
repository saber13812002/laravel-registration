<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: *');
// header('Access-Control-Allow-Headers: *');

Route::post('v1/otp1', 'OtpController@otp1');
Route::get('v1/otp11/{phone}', 'OtpController@otp11get');
Route::post('v1/requestOtp/', 'OtpController@otp1');
//Route::get('v1/otptest2/', array('middleware' => 'cors', 'uses' => 'OtpController@test2'));

Route::post('v1/otp2', 'OtpController@otp2');
Route::get('v1/otp22/{phone}/{code}', 'OtpController@otp22get');
Route::post('v1/verifyOtp/', 'OtpController@otp2');


Route::post('v1/profile_picture', 'InfoController@profile_picture');
Route::post('v1/upload_profile_picture', 'ImageUploadController@imageUploadSimple');

Route::post('v1/formSubmit','ImageUploadController@formSubmit');
Route::post('v1/store','ImageUploadController@store');


Route::get('v1/province', 'ProvinceController@index');
Route::get('v1/county/{id}', 'CountyController@index');
Route::get('v1/city/{id}', 'CityController@index');

Route::get('v1/init', 'PagesettingController@index');
Route::get('v1/gallery', 'MultipleImageController@index');

Route::group(['middleware' => ['jwt.verify']], function () {

    Route::get('v1/user/', 'UserController@getAuthenticatedUser');
    Route::get('v1/closed/', 'DataController@closed');
});


Route::group([
    'middleware' => ['api', 'cors'],
    // 'namespace' => $this->namespace,
    // 'prefix' => 'api',
], function ($router) {
    Route::post('v1/info/me',  'InfoController@me');
});
