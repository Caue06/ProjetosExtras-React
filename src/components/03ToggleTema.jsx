import React, { useState } from "react";

function ToggleTema(){
const [isDark, setIsDark] = useState(false);

const toggleTheme = () => {
    setIsDark(!isDark)
}

    return(
        <div style={{backgroundColor: isDark ? 'black' : 'white' ,color: isDark ? 'white' : 'black'}}>
            <button onClick={toggleTheme}>
                Alternar para {isDark ? 'Claro' : 'Escuro'}
            </button>
        </div>
    )
};

export default ToggleTema