import React, { createContext, useEffect, useState } from 'react';
import Layout from '../../Shared/Layout';
import Selector from './Selector';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

import Carousel, { CarouselItem } from './Carousel';
import Card from './Card';

export const DocContext = createContext();

const Tool = () => {
    const { loadDocs, entity, entity2 } = usePage().props;
    const [context, setContext] = useState({})

    const getDocs = async () => {
        if (!context.data) {
            var requestOptions = {
                method: 'GET',
                headers: {
                    'entity': entity
                },
                redirect: 'follow'
            };

            const response = await fetch("./docs", requestOptions);
            const json = await response.json();
            setContext(await json);
        }
    }

    useEffect(() => {
      return () => {
        getDocs()
      }
    }, [])
    

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
                    <DocContext.Provider value={[context, setContext]}>
                    {
                        loadDocs?.data.length ? (
                            <Carousel>
                                {loadDocs.data.map((ad, i) => {
                                    return (
                                        <CarouselItem key={i}>
                                            <Card attributes={ad.attributes} doc={ad.relationships.documents.data} entity={entity2}/>
                                        </CarouselItem>
                                    );
                                })

                                }
                            </Carousel>
                        ) : entity ? <p className='mt-4'>Lo sentimos, no se han encontrado anuncios para {entity}</p> : ''
                    }
                    </DocContext.Provider>
                </ul>

            </div>
        </div>
    );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Tool.layout = page => <Layout title="Buscador">{page}</Layout>;

export default Tool;
