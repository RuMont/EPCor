<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ToolController extends Controller
{
    /**
     * Controla el selector y los anuncios que se muestran tras seleccionar
     * una entidad
     */
    public function index(mixed $entity = false)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://apis2.dipucordoba.es/apisede/entities',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'Authorization: Bearer ' . env('TOKEN')
            ),
        ));

        $response = curl_exec($curl);
        curl_close($curl);

        if ($entity) {
            Session::put('entity', $entity);
            $curl2 = curl_init();

            curl_setopt_array($curl2, array(
                CURLOPT_URL => 'https://apis2.dipucordoba.es/apisede/bulletins',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_HTTPHEADER => array(
                    'Authorization: Bearer ' . env('TOKEN'),
                    'entity: ' . $entity
                ),
            ));

            $response2 = curl_exec($curl2);
            curl_close($curl2);

            return Inertia::render('Tool/Index', [
                'entities' => json_decode($response),
                'entity' => $_GET["title"],
                'entity2' => $entity,
                'loadDocs' => json_decode($response2)
            ]);
        }

        return Inertia::render('Tool/Index', [
            'entities' => json_decode($response)
        ]);
    }

    /**
     * Devuelve los documentos relacionados con los anuncios de la entidad
     */
    public function fetchDocuments()
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://apis2.dipucordoba.es/apisede/bulletins-documents?number=1',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'Authorization: Bearer ' . env('TOKEN'),
                'entity: ' . Session::get('entity'),
                'origin: https://sede.eprinsa.es',
                'Referer: https://sede.eprinsa.es/',
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response;
    }
}
