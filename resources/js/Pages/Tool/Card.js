/* eslint-disable react/prop-types */
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios'
import React from 'react'

const Card = ({ attributes, url, user }) => {

	const parseDate = (string) => {
		const array = string.split('/');
		array[2] = '20'+array[2];
		return `${array[2]}-${array[1]}-${array[0]}`;
	}

	const createEvent = async (e) => {
		const resp = await axios.post('./insert', {
			title: attributes.title,
			startDate: parseDate(attributes["start-date"]),
			endDate: parseDate(attributes["end-date"]),
		});
		if (resp.data == 1) {
			return alert('Evento creado, puedes verlo en tu app de Google Calendar');
		} else {
			await axios.post('../setlastlink', {
				ad: {
					title: attributes.title,
					startDate: parseDate(attributes["start-date"]),
					endDate: parseDate(attributes["end-date"]),
				},
			});

			return Inertia.get('../calendarhelp');
		}
	}

	return (
		<div className="block p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-4 mr-4">

			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{attributes.title}</h5>
			<p className="text-gray-700 dark:text-gray-400 truncate">{attributes.description}</p>
			<p className="text-gray-700 dark:text-gray-400 mt-4">Desde el {attributes["start-date"]} hasta el {attributes["end-date"]}</p>
			<div className='flex flex-col md:flex-row'>
				<button
					onClick={() => open(url)}
					className="mt-2 mr-1 sm:px-3 lg:px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-50"
				>
					Acceder al texto del edicto
				</button>
				{user.external_auth &&
					<button onClick={createEvent} className="mt-2 mr-1 sm:px-3 lg:px-6 py-3 rounded bg-blue-600 text-white text-sm font-bold whitespace-nowrap hover:bg-blue-400 focus:bg-blue-300">
						Añadir a Google Calendar
					</button>
				}

			</div>
		</div>
	)
}

export default Card