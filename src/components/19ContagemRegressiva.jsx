import React, { useState, useEffect } from "react";

function ContagemRegressiva() {
    const [segundos, setSegundos] = useState(0)
    const [tempoRestante, setTempoRestante] = useState(null)

    useEffect(() => {
        if (tempoRestante > 0) {
            const timer = setTimeout(() => setTempoRestante(tempoRestante - 1), 1000)
            return () => clearTimeout(timer)
        }
    }, [tempoRestante])

    const iniciarContagem=()=>{
        setTempoRestante(segundos)
    }

    return (
        <div>
            <input
            type="text"
            value={segundos}
            onChange={(e) => setSegundos(e.target.value)}
            placeholder="Segundos"
            />
            <button onClick={iniciarContagem}>Iniciar Contagem</button>
            {tempoRestante !== null &&(
                <p>{tempoRestante > 0 ? tempoRestante : 'Tempo esgotado!!!'}</p>
            )}
        </div>
    )
}

export default ContagemRegressiva