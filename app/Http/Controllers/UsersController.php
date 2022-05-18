<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class UsersController extends Controller
{
    public function __construct(Users $user)
    {
        $this->usersModel = $user;
    }

    public function index(Request $request)
    {
        if (Auth::user()->is_admin == 0) return redirect()->route('status', ['status' => 403]);
        return Inertia::render('Users/Index', [
            'filters' => $request->all('nombre', 'is_admin', 'borrado'),
            'users' => $this->usersModel->obtenerUsuarios(
                true,
                $request->only('nombre', 'is_admin', 'borrado')
            ),
            'user' => Auth::user(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function storeFromUsers(Request $request)
    {
        if (Hash::needsRehash($request->password))
            $password = Hash::make($request->password);
        $this->usersModel->insertarUsuario([
            "nombre" => $request->nombre,
            "email" => $request->email,
            "password" => $password,
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        return Redirect::route('users')->with('success', 'Usuario creado');
    }

    public function edit(int $id)
    {

        return Inertia::render('Users/Edit', [
            'selectedUser' => $this->usersModel->obtenerUsuarioPorId($id)
        ]);
    }

    public function update(int $id, Request $request)
    {
        if (Hash::needsRehash($request->password))
            $password = Hash::make($request->password);
        if (isset($password)) {
            $this->usersModel->actualizarUsuario($id, [
                "nombre" => $request->nombre,
                "email" => $request->email,
                "password" => $password,
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now()
            ]);
        } else {
            $this->usersModel->actualizarUsuario($id, [
                "nombre" => $request->nombre,
                "email" => $request->email,
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now()
            ]);
        }
        return Redirect::back()->with('success', 'Usuario actualizado');
    }

    public function destroy(int $id)
    {
        $this->usersModel->borrarUsuario($id);
        return Redirect::back()->with('success', 'Usuario borrado');
    }

    public function restore(int $id)
    {
        $this->usersModel->restaurarUsuario($id);
        return Redirect::back()->with('success', 'Usuario restaurado');
    }
}
