import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { DocContext } from './Index';

const Card = ({ attributes, doc }, entity) => {
    const [context, setContext] = useContext(DocContext);
    const [document, setDocument] = useState({});

    const id = doc[0].id;

    // useEffect((id) => {
    //     return (id) => {
    //         (context.data).forEach(docu => {
    //             if (docu.id == id) {
    //                 setDocument(docu);
    //             }
    //         });
    //     }
    // }, [document])

    console.log(context)
    const getUrl = async (id) => {
        console.log(context)
        if (document.attributes) {
            open(document?.attributes.url, '_blank');
            return;
        }
        return false;
    }

    return (
        <div className="block p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-4 mr-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{attributes.title}</h5>
            <p className="text-gray-700 dark:text-gray-400 truncate">{attributes.description}</p>
            {/* <button onClick={getDocs} className="text-gray-700 dark:text-gray-400 truncate">{doc[0].id}</button> */}
            <button onClick={getUrl} className="text-gray-700 dark:text-gray-400 truncate">{id}</button>
            <p className="text-gray-700 dark:text-gray-400 mt-4">Desde el {attributes["start-date"]} hasta el {attributes["end-date"]}</p>
        </div>
    )
}

Card.propTypes = {
    attributes: PropTypes.object.isRequired,
    doc: PropTypes.array.isRequired
}

export default Card