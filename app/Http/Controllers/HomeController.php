<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Si el usuario se ha logeado previamente, no tiene que volver a logearse
        // Funciona con sesiones
        if (Auth::user()) return redirect()->route('dashboard');

        return Inertia::render('Auth/Login');
    }

    public function dashboard()
    {
        // Al pasarle el user debemos controlar que en las vistas de admin (si
        // tenemos), el usuario no pueda acceder a la ruta si no es admin, ya
        // que puede cambiar el state con las react devtools
        return Inertia::render('Dashboard/Index', ['user' => Auth::user()]);
    }

    public function home()
    {
        return Inertia::render('Home/Index');
    }

    public function register()
    {
        return Inertia::render('Auth/Register');
    }

    public function admin()
    {
        if (Auth::user()->is_admin == 0) return $this->status(403);

        return Inertia::render('About');
    }

    public function status($status) {
        return Inertia::render('Error', ['status' => $status]);
    }
}
