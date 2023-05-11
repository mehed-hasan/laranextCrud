<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\TodoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});


Route::prefix('api')->group(function () {
    Route::post('/insertTask', [TodoController::class,'insert'])->name('insert');
    Route::get('/editTask/{id}/{renamed}', [TodoController::class,'editTask'])->name('editTask');
    Route::get('/deleteTask/{id}', [TodoController::class,'deleteTask'])->name('deleteTask');
    Route::get('/taskId/{id}', [TodoController::class,'taskId'])->name('taskId');

    Route::get('/getTask', [TodoController::class,'getTask'])->name('getTask');
    Route::get('/searchTask/{taskname}', [TodoController::class,'searchTask'])->name('searchTask');

 });

 