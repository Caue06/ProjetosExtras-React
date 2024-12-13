import React, { useState } from "react";

function CalculadoraIMC() {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [imc, setImc] = useState(null)

    const calcularIMC = () => {
        const alturaEmMetros = altura / 100
        const resultadoIMC = peso / (alturaEmMetros * alturaEmMetros)
        setImc(resultadoIMC.toFixed(2))
    }

    return (
        <div>
            <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Altura (cm)"
            />
            <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Peso (kg)"
            />
            <button onClick={calcularIMC}>Calcular IMC</button>
            {imc && <p>Seu IMC é: {imc}</p>}
        </div>
    )
}

export default CalculadoraIMC