import React, { useState, useEffect } from "react";

function DarkMode() {
    const [isDarkMode, setIsDakMode] = useState(
        JSON.parse(localStorage.getItem('darkMode') || false)
    )

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    }, [isDarkMode])

    const toggleDarkMode = () => { setIsDakMode(!isDarkMode) }

    return (
        <div style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
            <button onClick={toggleDarkMode}>
                Alternar para {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>
        </div>
    )
}

export default DarkMode