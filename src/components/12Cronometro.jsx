import { useState, useEffect } from "react";

function Cronometro() {
    const [segundos, setSegundos] = useState(0)
    const [ativo, setAtivo] = useState(false)

    useEffect(() => {
        let interval = null
        if (ativo) {
            interval = setInterval(() => {
                setSegundos(segundos => segundos + 1)
            }, 1000)
        } else if (!ativo && segundos !== 0) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [ativo, segundos])

    const reset = () => {
        setSegundos(0)
        setAtivo(false)
    }

    return (
        <div>
            <p>{segundos} segundos</p>
            <button onClick={() => setAtivo(!ativo)}>
                {ativo ? 'Pausar' : 'Iniciar'}
            </button>
            <button onClick={reset}>Resetar</button>
        </div>
    )
}

export default Cronometro