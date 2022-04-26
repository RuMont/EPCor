import React, { useEffect, useState } from 'react';
import Layout from '../../Shared/Layout';
import Selector from './Selector';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

import Carousel, { CarouselItem } from './Carousel';

const Tool = () => {
    const { loadDocs, entity } = usePage().props

    return (
        <div>
            {entity ? (
                <h1 className="mb-8 text-3xl font-bold"><InertiaLink href="/tool" className="text-indigo-600 hover:text-indigo-700">Buscador</InertiaLink>{` / ${entity}`}</h1>
            ) : (
                <h1 className="mb-8 text-3xl font-bold">Buscador</h1>
            )}
            
            <Selector />
            <div>
                <ul className='flex flex-row flex-wrap'>
                    {
                        loadDocs?.data.length ? (
                            <Carousel>
                                {loadDocs.data.map((ad, i) => {
                                    return (
                                        <CarouselItem key={i}>
                                            <a href="#" className="block p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-4 mr-4">
                                                <div>
                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{ad.attributes.title}</h5>
                                                    <p className="text-gray-700 dark:text-gray-400 truncate">{ad.attributes.description}</p>
                                                    <p className="text-gray-700 dark:text-gray-400 mt-4">Desde el {ad.attributes["start-date"]} hasta el {ad.attributes["end-date"]}</p>
                                                </div>
                                            </a>
                                        </CarouselItem>
                                    );
                                })

                                }
                            </Carousel>
                        ) : entity ? <p className='mt-4'>Lo sentimos, no se han encontrado anuncios para {entity}</p> : ''
                    }
                </ul>

            </div>
        </div>
    );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Tool.layout = page => <Layout title="Buscador">{page}</Layout>;

export default Tool;
