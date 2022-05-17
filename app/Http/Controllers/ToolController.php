<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use \Spatie\GoogleCalendar\Event;
use \Spatie\GoogleCalendar\GoogleCalendarFactory;
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
                'loadDocs' => json_decode($response2),
                'urls' => $this->fetchDocuments()
            ]);
        }

        return Inertia::render('Tool/Index', [
            'entities' => json_decode($response)
        ]);
    }

    /**
     * Devuelve los documentos relacionados con los anuncios de la entidad
     */
    private function fetchDocuments()
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
        return $response;
    }
    
    public function createEvent(Request $request)
    {
        $startDate = date('Y-m-d H:i:s.u', strtotime($request->startDate));
        $endDate = date('Y-m-d H:i:s.u', strtotime($request->endDate));

        try {
            Event::create([
                'name' => 'EPCor: ' . $request->title,
                'startDateTime' => new Carbon($startDate, 'Europe/Madrid'),
                'endDateTime' => new Carbon($endDate, 'Europe/Madrid'),
            ], Auth::user()->email);
    
            echo 1;
        } catch (\Throwable $th) {
            echo $th;
        }
    }
}
