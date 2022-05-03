<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'nombre' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('1234'),
            'municipio_id' => 1,
            'is_admin' => true,
            'borrado' => false,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
