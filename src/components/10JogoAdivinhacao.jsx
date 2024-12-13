import React, { useState } from "react";

function JogoAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 50) + 1
    const [palpite, setPalpite] = useState('')
    const [mensagem, setMensagem] = useState('')

    const verificarPalpite = () => {
        const palpiteNumero = parseInt(palpite)
        if (palpiteNumero < numeroAleatorio) {
            setMensagem('Muito Baixo!!')
        } else if (palpiteNumero > numeroAleatorio) {
            setMensagem('Muito Alto!!')
        } else {
            setMensagem('Correto!!')
        }
    }

    return (
        <div>
            <input
                type="number"
                value={palpite}
                onChange={(e) => setPalpite(e.target.value)}
            />

            <button onClick={verificarPalpite}>Verificar Palpite</button>
            <p>{mensagem}</p>
        </div>
    )
}

export default JogoAdivinhacao