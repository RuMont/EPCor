<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;

class Users extends Authenticatable
{
    use HasFactory;

    protected $table = 'users';
    protected $primaryKey = "id";
    public $timestamps = true;
    protected $fillable = ['nombre', 'email', 'password', 'avatar', 'external_id', 'external_auth'];

    /**
     * Devuelve usuarios no borrados por defecto. Los resultados se pueden
     * paginar. Para un ejemplo de filtro ver UsersController@index.
     */
    public function obtenerUsuarios(?bool $paginar = false, ?array $filtro = null)
    {
        if ($paginar) {
            if (!is_null($filtro)) {
                return DB::table($this->table)->when($filtro, function ($query, $filtro) {
                    foreach ($filtro as $key => $value) {
                        if ($key == 'nombre') {
                            $query->where($key, 'like', "%{$value}%");
                        } else {
                            $query->where($key, $value);
                        }
                    }
                })->paginate(10);
            }
            return DB::table($this->table)
                ->where('borrado', 0)
                ->paginate(10);
        }
        if (!is_null($filtro)) {
            return DB::table($this->table)->when($filtro, function ($query, $filtro) {
                foreach ($filtro as $key => $value) {
                    if ($key == 'nombre') {
                        $query->where($key, 'like', "%{$value}%");
                    } else {
                        $query->where($key, $value);
                    }
                }
            })->get();
        }
        return DB::table($this->table)
            ->where('borrado', 0)
            ->get();
    }

    /**
     * Devuelve un usuario buscado por ID
     */
    public function obtenerUsuarioPorId(int $id)
    {
        return Users::where($this->primaryKey, $id)->first();
    }

    /**
     *  Pueden insertarse varios usuarios introduciendo un array de arrays
     */
    public function insertarUsuario(array $data)
    {
        dd($data);
        return DB::table($this->table)
            ->insertGetId($data);
    }

    /**
     *  Pueden insertarse varios usuarios introduciendo un array de arrays
     */
    public function actualizarUsuario(int $id, array $data)
    {
        return DB::table($this->table)
            ->where($this->primaryKey, $id)
            ->update($data);
    }

    /**
     * Hace un soft delete casero a un usuario
     */
    public function borrarUsuario(int $id)
    {
        return DB::table($this->table)
            ->where($this->primaryKey, $id)
            ->update(['borrado' => 1]);
    }

    /**
     * Restaura el usuario del soft delete
     */
    public function restaurarUsuario(int $id)
    {
        return DB::table($this->table)
            ->where($this->primaryKey, $id)
            ->update(['borrado' => 0]);
    }
}
