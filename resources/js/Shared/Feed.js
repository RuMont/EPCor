import React, { useState } from "react";


export default function Feed() {
  
  const [items, setItems] = useState([]);

  const getRss = async (e) => {
    e.preventDefault();
    
    //Buscar la manera de obtener el RSS de dos sitios distintos
    
    const res = await fetch(`https://api.allorigins.win/get?url=https://cordopolis.eldiario.es/rss/`);

    const data = await res.json();

    // Separamos en items las noticias
    const items = data.contents.split("<item>");

    // Filtro por keywords

    const filteredItems = items.filter((item) => {
        return item.includes("empleo" || "trabajo");
    });


    setItems(filteredItems);
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
                        
                        <div className="text-center">
                        <img src={item.split("<enclosure url=\"")[1].split("\"")[0]} alt="" style={
                            {
                                width: "350px",
                                height: "250px",
                                
                            }
                        }/>
                        </div>
                        <h2 style={
                            {
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "black",
                                textAlign: "center",
                                
                            }
                        }>{item.split("<title>")[1].split("</title>")[0].replace("<![CDATA[", "").replace("]]>", "")}</h2>
                        {/* add ellipsis when there is more than 100 characters */}
                        <p style={
                            {
                                fontSize: "15px",
                                color: "black",
                                textAlign: "center",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "3",
                                WebkitBoxOrient: "vertical",
                            }

                        }>{item.split("<p>")[2].split("</p>")[0].replace("<![CDATA[", "").replace("]]>", "")}</p>
                        {/* add see more link */}
                        <a href={item.split("<link>")[1].split("</link>")[0].replace("<![CDATA[", "").replace("]]>", "")} style={
                            {
                                fontSize: "15px",
                                color: "blue",
                                
                            }
                        }>Ver más...</a>
                        
                    </li>

                    </div>
                ))}
            </ul>
        </div>
    );
}

                        
                  
