import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { useNavigate} from "react-router-dom";

const Selector = () => {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState();
    // const navigate = useNavigate();
    
    // Función para poner la primera letra mayus de un string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Cuando se manda el formulario se usa un hook de react para cambiar de ruta
    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post("/tool/"+ selected.value);
    }

    // Cuando se muestra el componente se hace la petición 1 vez
    useEffect(() => {
        // async function fetchData() {
        //     const response = await axios.get(`http://localhost:5000/names`);
        //     const json = await response.data;
        //     setData(json)
        // }
        // fetchData();
    }, []);

    return (

        <div>
            {
                data.error ? (
                    <p>{data.error}</p>
                ) : (
                    <form onSubmit={(e) => handleSubmit(e) } method="post" className='flex flex-wrap'>
                        <select className="form-select w-1/3 mr-2" onChange={(e) => setSelected({value: e.target.value}) } name="id" id="selector">
                            <option value="false">Seleccione una entidad</option>
                            {
                                // Se devuelve una etiqueta option por cada entity que nos manda la api
                                data.map((entity, i) => {
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
                        <button className="px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500" type="submit">Enviar</button>
                    </form>
                )
            }
        </div>

    )
}

export default Selector