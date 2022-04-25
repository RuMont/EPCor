import React from 'react';
import PropTypes from 'prop-types';

const ListDisplay = ({ ads }) => {
    return (
        <div>
            <ul className='flex flex-row flex-wrap'>
                {
                    ads ? ads.map((ad, i) => {
                        return (
                            <a key={i} href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-4 mr-4">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ad.attributes.title}</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{ad.attributes.description}</p>
                                <p className="font-normal text-gray-700 dark:text-gray-400 mt-4">Desde el {ad.attributes["start-date"]} hasta el {ad.attributes["end-date"]}</p>
                            </a>
                        );
                    }) : ''
                }
            </ul>

        </div>
    )
}

ListDisplay.propTypes = {
    ads: PropTypes.array
}

export default ListDisplay