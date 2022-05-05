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

    //Hacer que se muestre el resultado sin necesidad de hacer click, crear un timer para que se recargue cada x segundos
    //Ver por que no funcionan los estilos de la card


    }
    return (
        <div>
            <form onSubmit={getRss}>
                <input type="submit" value="Get RSS" />
            </form>
            <ul>
                {items.map((item, index) => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{item.split("<title>")[1].split("</title>")[0]}</h5>
                            <p className="card-text">{item.split("<description>")[1].split("</description>")[0]}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

    // const { contents } = await res.json();
    // const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    // const items = feed.querySelectorAll("item");
    // const feedItems = [...items].map((el) => ({
    //   link: el.querySelector("link").innerHTML,
    //   title: el.querySelector("title").innerHTML,
    //   author: el.querySelector("author").innerHTML
//     }));
//     setItems(feedItems);
//   };
// }