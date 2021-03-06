<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Si el usuario se ha logeado previamente, no tiene que volver a logearse
        // Funciona con sesiones
        if (Auth::user()) return redirect()->route('dashboard');

        return Inertia::render('Auth/Login', ['client_id' => env('GOOGLE_CLIENT_ID')]);
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
        if (Auth::user()->is_admin == 0) return redirect()->route('status', ['status' => 403]);

        return Inertia::render('About');
    }

    public function status($status)
    {
        return Inertia::render('Error', ['status' => $status]);
    }

    public function faqs()
    {
        return Inertia::render('Help/FAQ/faqs');
    }

    public function saveLink(Request $request)
    {
        Log::info($request);
        Session::put('ad', $request->ad);
    }

    public function calendarhelp()
    {
        return Inertia::render('Help/GoogleCalendar/Index', ['ad' => json_encode(Session::get('ad'))]);
    }
}
