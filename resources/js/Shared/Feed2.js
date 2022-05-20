import React, { useState } from "react";


export default function Feed() {
  
  const [items, setItems] = useState([]);

  const getRss = async (e) => {
    e.preventDefault();
    
    //Buscar la manera de obtener el RSS de dos sitios distintos
    
    const res = await fetch(`https://api.allorigins.win/get?url=https://www.eldiadecordoba.es/rss/cordoba/`);

    const data = await res.json();

    // Separamos en items las noticias
    const items = data.contents.split("<item>");

    // Filtro por keywords

    const filteredItems = items.filter((item) => {
        return item.includes("empleo" || "trabajo");
    });


    setItems(filteredItems);

    console.log(filteredItems);

    //Ver por que no funcionan los estilos de la card
    }

    //En cuanto se cargue la pagina aparece el rss
    window.onload = getRss;

    

    return (
        
        <div>
            <ul>
                {items.map((item, index) => (
                    <div>
                    <li style={
                        {
                            backgroundColor: "#f5f5f5",
                            borderRadius: "10px",
                            padding: "10px",
                            margin: "10px",
                            border: "1px solid #ccc",
                            boxShadow: "0 0 10px #ccc",
                            alignItems: "center",
                        }
                    } key={index}>
                        
                        
                        <img src={item.split("<enclosure url=\"")[1].split("\"")[0]} alt="" style={
                            {
                                width: "350px",
                                height: "250px",
                                borderRadius: "10px",
                                margin: "10px",
                                border: "1px solid #ccc",
                                boxShadow: "0 0 10px #ccc",
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                
                                
                            }
                        }/>
                        <h2 style={
                            {
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "black",
                                textAlign: "center",
                                margin: "10px",
                                padding: "10px",
                                border: "1px solid black",
                                borderRadius: "10px",
                                backgroundColor: "white",
                                boxShadow: "0px 0px 10px black"
                            }
                        }>{item.split("<title>")[1].split("</title>")[0].replace("<![CDATA[", "").replace("]]>", "")}</h2>

                        <p style={
                            {
                                fontSize: "15px",
                                color: "black",
                                textAlign: "center",
                                margin: "10px",
                                padding: "10px",
                                border: "1px solid black",
                                borderRadius: "10px",
                                backgroundColor: "white",
                                boxShadow: "0px 0px 10px black"
                            }
                        }>{item.split("<p>")[2].split("</p>")[0].replace("<![CDATA[", "").replace("]]>", "")}</p>
                        
                    </li>
                    <br/> 
                    </div>

                ))}
            </ul>
        </div>
    );
}
