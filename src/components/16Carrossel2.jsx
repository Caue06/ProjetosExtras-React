import React, { useState } from "react";

function Carrosel2() {
    const images = ['https://img.icons8.com/?size=100&id=35316&format=png&color=000000', 'https://img.icons8.com/?size=100&id=35317&format=png&color=000000', 'https://img.icons8.com/?size=100&id=35318&format=png&color=000000']
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }
    return (
        <div>
            <button onClick={prevImage}>Anterior</button>
            <img src={images[currentIndex]} alt="Carrosel"/>
            <button onClick={nextImage}>Próxima</button>
        </div>
    )
}

export default Carrosel2