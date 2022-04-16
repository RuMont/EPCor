<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('https://sede.eprinsa.es/eprinsa')
                ->pause(2000);
            $file = fopen('.env', 'a');
            $output = $browser->script("return window.sessionStorage.getItem('token')")[0];
            fwrite($file, 'TOKEN="' . $output . '"');
            fclose($file);
            echo 'Token generado';
        });
    }
}
