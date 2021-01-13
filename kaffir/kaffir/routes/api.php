<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/signup', 'LoginController@store');
Route::post('/login', 'LoginController@login');
Route::post('/forget', "LoginController@forgetPassword");
Route::get('/confirm-token', 'LoginController@confirmToken');
Route::get('/reset-password/{token}', 'LoginController@resetPassword');

Route::get('/create-anonymous/{user-token}/{id}', 'AnonymousController@index');
Route::post('/create-anonymous/{user-token}/{id}', 'AnonymousController@store');
