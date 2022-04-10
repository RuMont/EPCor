<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UsersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nombre' => 'administrador',
            'email' => 'admin@gmail.com',
            'password' => '$2a$12$Z1Bvnw8KUifB3iC0oBpL8eYDTTnHx4990WcC71.AKzjk1JQHx/ghe', // password
            'is_admin' => '0',
            'borrado' => '0',
        ];
    }

    // /**
    //  * Indicate that the model's email address should be unverified.
    //  *
    //  * @return static
    //  */
    // public function unverified()
    // {
    //     return $this->state(function (array $attributes) {
    //         return [
    //             'email_verified_at' => null,
    //         ];
    //     });
    // }
}
