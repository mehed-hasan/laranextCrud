<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
require __DIR__ .'/api.php';
Route::get('/', function () {
    return view('welcome');
});
Route::prefix('api')->group(function () {
    Route::get('/get', [UserController::class,'index'])->name('user');
 });
