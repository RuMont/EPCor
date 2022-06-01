import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

export default function Feed() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getRss = async () => {
            //Buscar la manera de obtener el RSS de dos sitios distintos
            const res = await fetch(
                `https://api.allorigins.win/get?url=https://cordopolis.eldiario.es/rss/`
            );

            const data = await res.json();

            // Separamos en items las noticias
            const items = data.contents.split("<item>");

            // Filtro por keywords
            const filteredItems = items.filter((item) => {
                return item.includes("empleo" || "trabajo");
            });

            setItems(filteredItems);
        };
        getRss();
    }, []);


    return (
        <div className="w-full">
            <ul className="flex flex-row flex-wrap">
                {items.length ? items.map((item, index) => (
                    <li
                        className="box-border border-gray-800 rounded-lg shadow-xl my-4 p-4 w-1/3 min-h-full flex flex-col justify-between"
                        key={index}
                    >
                        <div className="w-full">
                            <img
                                src={
                                    item
                                        .split('<enclosure url="')[1]
                                        .split('"')[0]
                                }
                                alt=""
                                className="w-full rounded"
                            />
                        </div>
                        <h2 className="font-bold mt-4">
                            {item
                                .split("<title>")[1]
                                .split("</title>")[0]
                                .replace("<![CDATA[", "")
                                .replace("]]>", "")}
                        </h2>
                        {/* add ellipsis when there is more than 100 characters */}
                        <p className="my-4 truncate">
                            {ReactHtmlParser(
                                item
                                    .split("<p>")[2]
                                    .split("</p>")[0]
                                    .replace("<![CDATA[", "")
                                    .replace("]]>", "")
                            )}
                        </p>
                        {/* add see more link */}
                        <a className="text-indigo-600"
                            href={item
                                .split("<link>")[1]
                                .split("</link>")[0]
                                .replace("<![CDATA[", "")
                                .replace("]]>", "")}
                        >
                            Ver más...
                        </a>
                    </li>
                )) : <span>Cargando noticias...</span>}
            </ul>
        </div>
    );
}
