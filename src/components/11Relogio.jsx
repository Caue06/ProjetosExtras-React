import React, { useEffect, useState } from 'react'

function Relogio() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const intervalid = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(intervalid);
    },[])

    return <h2>Hora Atual: {time}</h2>

}

export default Relogio