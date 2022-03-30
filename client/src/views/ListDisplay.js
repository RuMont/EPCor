import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ListDisplay = () => {
    const [data, setData] = useState();
    const params = useParams();
    const navigate = useNavigate();

    // Cuando se muestra el componente se hace la petición 1 vez
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:5000/${params.id}`);
            const json = await response.data;
            setData(json)
        }
        fetchData()
    }, []);

    function goBack() {
        navigate(-1);
    }

    return (
        <div>
            <h1>Anuncios</h1>
            <button onClick={() => goBack()}>Volver</button>
            <ul>
                {
                    data ? data.map((ad, i) => {
                        return <div key={i} style={{listStyleType:"none"}}>
                            <li>Título: {ad.attributes.title}</li>
                            <li>Descripción: {ad.attributes.description}</li>
                            <li>Emitido por: undefined</li>
                            <li>Fecha inicio: {ad.attributes["start-date"]}</li>
                            <li>Fecha fin: {ad.attributes["end-date"]}</li>
                            <li>Acceder al texto íntegro del anuncio: undefined</li>
                            </div>
                    }) : <li style={{listStyleType:"none"}} key={-1}>Loading...</li>
                }
            </ul>

        </div>
    )
}

export default ListDisplay