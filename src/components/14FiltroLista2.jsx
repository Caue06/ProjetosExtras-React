import React, { useState } from "react";

function FiltroLista2() {
    const [search, setSearch] = useState('')
    const items = ['banana', 'maca', 'laranja', 'manga', 'uva']

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    )


    return (
        <div>
            <input
                type="text"
                value={search}
                placeholder="Buscar"
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredItems.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

    )
}

export default FiltroLista2