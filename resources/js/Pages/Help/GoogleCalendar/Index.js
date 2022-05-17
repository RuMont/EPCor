/* eslint-disable react/prop-types */
import { usePage } from '@inertiajs/inertia-react';
import React from 'react'
import Icon from '../../../Shared/Icon';
import Layout from '../../../Shared/Layout';

const Index = () => {
    const props = usePage().props
    const data = JSON.parse(props.ad);

    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('epcor-434@oauth-349117.iam.gserviceaccount.com');
    }
    const createEvent = async (e) => {
        const resp = await axios.post('./tool/insert', {
            title: data.title,
            startDate: data.startDate,
            endDate: data.endDate,
        });
        if (resp.data == 1) {
            return alert('Evento creado, puedes verlo en tu app de Google Calendar');
        } else {
            return alert('No está bien configurado')
        }
    }

    return (
        <div>
            <h1 className='font-bold text-4xl'>Hola</h1>
            <p className='mt-2'>
                Si estás aquí es porque querías guardar un evento en
                Google Calendar pero parece que no has otorgado permisos a nuestra aplicación.
                <br /><br />
                No te preocupes, aquí te explicamos cómo hacerlo:
            </p>
            <div className='w-5/6'>
                <ol className='list-decimal ml-8 text-justify'>
                    <li className='mt-2'>Entra en <a href="https://www.google.com/calendar" className='text-indigo-600 underline'>Google Calendar</a> con tu dirección de {props.user.email}, si se abre automáticamente, asegúrate que estás usando la cuenta con la que te registraste en EPCor haciendo click en el icono de nuestro perfil en la esquina superior derecha.</li>
                    <li className='mt-2'>Cerca del icono de nuestro perfil, vamos al menú de configuración (<Icon name={'gear'} className="opacity-50 inline" />) {'->'} Configuración.</li>
                    <li className='mt-2'>En el menú lateral vamos al apartado de {"'"}Configuración de mis calendarios{"'"} y seleccionamos nuestro calendario principal, que suele ser el primero en la lista.</li>
                    <li className='mt-2'>En el menú desplegable que se nos ha abierto, vamos a {"'"}Compartir con determinadas personas{"'"} y pulsamos en el botón {"'"}Añadir personas{"'"}</li>
                    <li className='mt-2 -ml-4 inline'>5. Introduce esta dirección: <br />
                        <div
                            title='Copiar texto'
                            onClick={handleCopy}
                            className='flex flex-row bg-gray-300 rounded p-2 my-2 cursor-pointer max-w-fit'
                        >
                            <pre>
                                epcor-434@oauth-349117.iam.gserviceaccount.com
                            </pre>
                            <Icon name={'copy'} className={'ml-4 w-6 h-6 opacity-40'} />
                        </div>
                        y selecciona {"'"}Hacer cambios en eventos{"'"} como permiso.
                    </li>
                </ol>
            </div>

            <button onClick={createEvent} className="mt-4 mr-1 sm:px-3 lg:px-6 py-3 rounded bg-blue-600 text-white text-sm font-bold whitespace-nowrap hover:bg-blue-400 focus:bg-blue-300">
                Probar a añadir de nuevo
            </button>

            <p className='mt-4'>Se añadirá el anuncio de {data.title}.</p>

        </div>
    )
}

Index.layout = page => <Layout title="Ayuda Calendar">{page}</Layout>;

export default Index