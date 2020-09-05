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
//   because we Use of frontend to connsect to that set Routes in api.php 
Route::get('tasks', 'AngularController@index');
Route::get('task/{id}', 'AngularController@show');
Route::post('task', 'AngularController@store');
Route::put('task/{id}', 'AngularController@update');
Route::delete('task/{id}', 'AngularController@delete');
