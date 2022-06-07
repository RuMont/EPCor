/* eslint-disable react/prop-types */
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'

const Selector = ({ counter }) => {
    const [selected, setSelected] = useState();
    const { data, errors } = usePage().props.entities;
    // Función para poner la primera letra mayus de un string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Cuando se manda el formulario se usa un hook de react para cambiar de ruta
    function handleSubmit(e) {
        e.preventDefault();
        const title = document.querySelector(`[value^=${selected.value}]`).innerText;
        Inertia.get("/tool/e" + selected.value + "?title=" + title);
    }

    return (

        <div>
            {
                errors ? (
                    <p>{errors[0].detail ? 'Web en mantenimiento, en breves estaremos operativos.' : ''}</p>
                ) : (
                    <form onSubmit={(e) => handleSubmit(e)} method="post" className='flex flex-wrap'>
                        <select className="form-select w-3/5 sm:w-3/4 md:w-1/3 mr-2" onChange={(e) => setSelected({ value: e.target.value })} name="id" id="selector">
                            <option value="false">Seleccione una entidad</option>
                            {
                                // Se devuelve una etiqueta option por cada entity que nos manda la api
                                data?.map((entity, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={`${entity.id}`}
                                        >
                                            {capitalizeFirstLetter(entity.attributes.description)}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <button className="px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500" type="submit">Buscar</button>
                    </form>
                )
            }
            {counter ? <p className='mt-4'>Mostrando {counter} resultados</p>: ''}
        </div>

    )
}

export default Selector