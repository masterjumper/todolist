<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\AuthController;
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

Route::post('auth/create', [AuthController::class, 'create']);
Route::post('auth/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {     
    Route::resource('tasks', TasksController::class);
/*     Route::get('tasks', [TasksController::class, 'index']);
    Route::post('tasks', [TasksController::class, 'store']);    
    Route::patch('tasks/{task}', [TasksController::class, 'update']);
    Route::delete('tasks'/{task}', [TasksController::class, 'destroy']);   
*/       
    Route::get('auth/logout', [AuthController::class, 'logout']);
});
