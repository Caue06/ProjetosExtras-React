import React, { useState } from "react";

function FormularioCadastro() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    const validate = () => {
        const newErrors = {}
        if (!email.includes('@')) newErrors.email = 'Email inválido'
        if (password.length < 6) newErrors.password = 'A senha deve ter pelo menos 6 caracteres'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            console.log('Formulário enviado com sucesso')

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Senha:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default FormularioCadastro