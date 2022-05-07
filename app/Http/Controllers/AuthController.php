<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Laravel\Socialite\Facades\Socialite;
use Throwable;

class AuthController extends Controller
{
    public function __construct(Users $user)
    {
        $this->usersModel = $user;
    }
    /**
     * Intenta logear al usuario contra la base de datos
     *
     * @param  Request $request Datos del usuario
     * @return redirect Redirige al usuario a la ruta "/" o a la ruta anterior con errores
     */
    public function authenticate(Request $request)
    {
        // Validadores del lado del servidor
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        // Si consigue logear al usuario regenera la sesión
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }

        // Si no consigue logear al usuario retorna un error
        return back()->withErrors([
            'email' => 'Las credenciales proporcionadas no son válidas',
        ]);
    }

    public function ajax_authenticate(Request $request)
    {
        // Validadores del lado del servidor
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        return json_encode(Auth::attempt($credentials));
    }

    /**
     * Cierra la sesión del usuario activo
     *
     * @param  Request $request Datos del usuario
     * @return redirect Redirige al usuario a la ruta "/"
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('dashboard')->with('status', 'Sesión cerrada');
    }

    /**
     * Abre la ventana de logeo de Google al usuario
     */
    public function loginGoogle()
    {
        return Socialite::driver('google')
            ->scopes(['profile', 'email'])
            ->redirect();
    }

    /**
     * Recibe los parámetros que devuelve el login de Google y los almacena en 
     * la base de datos
     */
    public function googleCallback()
    {
        $googleUser = Socialite::driver('google')->stateless()->user();

        $user = Users::updateOrCreate(
            ['email' => $googleUser->email],
            [
                'nombre' => $googleUser->name,
                'avatar' => $googleUser->avatar,
                'external_id' => $googleUser->id,
                'external_auth' => 'google',
            ]
        );

        Auth::login($user);

        return redirect()->route('dashboard');
    }

    public function storeFromRegister(Request $request)
    {
        unset($request["confirmPassword"]);
        if (Hash::needsRehash($request->password))
            Hash::make($request->password);
        try {
            $id = $this->usersModel->insertarUsuario($request->all());
            if (Auth::login($this->usersModel->obtenerUsuarioPorId($id))) {
                $request->session()->regenerate();
                return Redirect::route('dashboard')->with('success', 'Usuario creado');
            }
        } catch (Throwable $th) {
            if ($th->errorInfo[0] == '23000') {
                return back()->withErrors([
                    'email' => 'Ya existe una cuenta con ese correo',
                ]);
            }
        }

        return Redirect::route('login');
    }
}
