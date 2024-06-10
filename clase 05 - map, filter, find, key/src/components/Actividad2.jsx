import React from 'react'

function Actividad2(rey) {
    const ruta = "http://www.html6.es/img/rey_"
    const img = `${ruta}${rey.nombre.toLowerCase()}.png`

    const eliminar = (e) => {
        rey.setReyesEliminados((e) => e.concat({nombre: rey.nombre, vacasAhorradas: rey.vacasComidas * 365 * Number(rey.reinado) }));
        e.target.parentNode.remove();
    }
    return (
        <article key={rey.nombre+ 123} className='rey'>
            <p>
                <span>{rey.nombre.toUpperCase()}</span> ha comido  {Number(rey.vacasComidas) * 365 * Number(rey.reinado)} vacas en sus {rey.reinado} años de reinado
            </p>
            <img src={img} alt="" />
            <button onClick={eliminar}>Borrar</button>
        </article>
    )
}

export default Actividad2