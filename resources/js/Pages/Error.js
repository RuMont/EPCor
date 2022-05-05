import React from 'react';
import { Head, usePage } from '@inertiajs/inertia-react';


export default function Error() {
	const { status } = usePage().props;

	const title = {
		503: '503: Servicio no disponible',
		500: '500: Error de servidor',
		404: '404: Página no encontrada',
		403: '403: No tienes suficientes permisos'
	}[status];

	const description = {
		503: 'Servicio en mantenimiento, por favor, inténtalo más tarde.',
		500: 'Ha habido un fallo en nuestro servidor.',
		404: 'Lo sentimos, la página que buscabas no existe.',
		403: 'Lo sentimos, no estás autorizado a ver esta página.'
	}[status];

	return (
		<div className="flex items-center justify-center min-h-screen p-5 text-indigo-100 bg-indigo-800">
			<Head title={title} />
			<div className="w-full max-w-md">
				<h1 className="text-3xl">{title}</h1>
				<p className="mt-3 text-lg leading-tight">{description}</p>
				
				<button
					className='mt-6 flex flex-row align-bottom'
					onClick={() => history.back()}
				>
					<p className='text-lg underline'>&#x21AA;{' '}Volver</p>
				</button>
			</div>
		</div>
	);
};
