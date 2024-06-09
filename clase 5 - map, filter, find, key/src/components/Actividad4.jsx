import { useState } from 'react';

function Actividad2(rey) {
    const [votos, setVotos] = useState(0);

    const ruta = "http://www.html6.es/img/rey_"
    const img = `${ruta}${rey.nombre.toLowerCase()}.png`
    return (
        <article key={rey.nombre + 1123423} className='rey'>
            <h3>Votos: <span className='votos'>{votos}</span></h3>
            <p>
                <span>{rey.nombre.toUpperCase()}</span> ha comido  {Number(rey.vacasComidas) * 365 * Number(rey.reinado)} vacas en sus {rey.reinado} años de reinado
            </p>
            <img src={img} alt="" />
            <button onClick={() => setVotos((e) => e + 1)}>Votar</button>
        </article>
    )
}

export default Actividad2