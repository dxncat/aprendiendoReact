import React from 'react'

function Reyes(rey) {
    const ruta = "http://www.html6.es/img/rey_"
    const img = `${ruta}${rey.nombre.toLowerCase()}.png`
    return (
        <article key={rey.nombre} className='rey'>
            <p>
                <span>{rey.nombre.toUpperCase()}</span> ha comido  {Number(rey.vacasComidas) * 365 * Number(rey.reinado)} vacas en sus {rey.reinado} años de reinado
            </p>
            <img src={img} alt="" />
        </article>
    )
}

export default Reyes