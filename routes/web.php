<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [TaskController::class, 'listItem']);
Route::post('addItem', [TaskController::class, 'addItem']);
Route::post('editItem', [TaskController::class,'editItem']);
Route::post('deleteItem', [TaskController::class,'deleteItem']);
Route::get('generateRecord', [TaskController::class,'generateRecord']);
    
