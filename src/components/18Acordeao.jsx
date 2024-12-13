import React , { useState } from "react";

function Acordeao(){
    const[isOpen,setIsOpen] = useState(false)

    return(
        <div>
            <button onClick={()=>setIsOpen(!isOpen)}>
                {isOpen ? 'Esconder' : 'Mostrar'} Detalhes
            </button>
            {isOpen && <p>Este é o conteúdo do acordeão!!!!</p>}
        </div>
    )
}

export default Acordeao