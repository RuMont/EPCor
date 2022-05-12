/* eslint-disable react/prop-types */
import React from 'react'

const Card = ({ attributes, docId, entity, url, user }) => {

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
					<button className="mt-2 mr-1 sm:px-3 lg:px-6 py-3 rounded bg-blue-600 text-white text-sm font-bold whitespace-nowrap hover:bg-blue-400 focus:bg-blue-300">
						Añadir a Google Calendar
					</button>
				}

			</div>
		</div>
	)
}

export default Card