import React from 'react';
import Layout from '../../Shared/Layout';
import Selector from './Selector';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

import Carousel, { CarouselItem } from './Carousel';
import Card from './Card';

const Tool = () => {
    const { loadDocs, entity, urls, user } = usePage().props;

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
                                    const array = JSON.parse(urls).data;
                                    let link;
                                    array.forEach(element => {
                                        if (element.id === ad.relationships.documents.data[0].id) {
                                            link = element.attributes.url;
                                        }
                                    });
                                    return (
                                        <CarouselItem key={i}>
                                            <Card
                                                attributes={ad.attributes}
                                                url={link}
                                                user={user}
                                            />
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
