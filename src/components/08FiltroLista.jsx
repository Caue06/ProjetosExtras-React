import React, { useState } from "react";

function FiltroLista({ itens }) {
    const [filtro, setFiltro] = useState('')

    const itensFiltrados = itens.filter(item =>
         item.toLowerCase().includes(filtro.toLowerCase())
    )

    return (
        <div>
            <input type="text" value={filtro} onChange={(e) => setFiltro(e.target.value)} placeholder="Filtrar..." />
            <ul>
                {itensFiltrados.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default FiltroLista;