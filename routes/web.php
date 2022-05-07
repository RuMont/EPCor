<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ToolController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

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

// Controlador del login y del dashboard
Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'home')->name('home');
    Route::get('about', 'about')->name('about');
    Route::get('register', 'register')->name('register');
    Route::get('login', 'index')->name('login');
    Route::get('error/{status}', 'status')->name('status');
    Route::middleware('auth')->get('dashboard', 'dashboard')->name('dashboard');
    Route::middleware('auth')->get('admin', 'admin')->name('admin');
});

// Controlador de autenticación
Route::controller(AuthController::class)->group(function () {
    Route::post('created', 'storeFromRegister');
    Route::post('auth', 'authenticate');
    Route::middleware('auth')->get('logout', 'logout');
    // Google auth
    Route::get('login-google', 'loginGoogle');
    Route::get('google-callback', 'googleCallback');
});

// Controlador de CRUD de usuarios y lista de usuarios
Route::controller(UsersController::class)->prefix('users')->group(function () {
    Route::middleware('auth')->get('/', 'index')->name('users');
    Route::middleware('auth')->get('create', 'create')->name('users.create');
    Route::middleware('auth')->post('/', 'storeFromUsers')->name('users.store');
    Route::middleware('auth')->get('{user}/edit', 'edit')->name('users.edit');
    Route::middleware('auth')->post('{user}/update', 'update')->name('users.update');
    Route::middleware('auth')->post('{user}/destroy', 'destroy')->name('users.destroy');
    Route::middleware('auth')->post('{user}/restore', 'restore')->name('users.restore');
});

// Controlador principal de la aplicación de empleo
Route::controller(ToolController::class)->prefix('tool')->group(function () {
    Route::middleware('auth')->get('/', 'index')->name('tool');
    Route::middleware('auth')->get('/{site}', 'index')->name('tool');
});