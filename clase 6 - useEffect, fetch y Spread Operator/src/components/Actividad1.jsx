import React from 'react'

function Actividad1(dato) {
    console.log(dato)
    return (
        <div>
            <article key={dato.email}>
            <div>
                <img src={dato.picture} alt={dato.name} />
            </div>
            <div>
                <h3>Nombre:</h3>
                <p>{dato.name} {dato.last}</p>
                <h3>Genero: </h3>
                <p>{dato.gender}</p>
                <h3>Locación: </h3>
                <p> Ciudad: {dato.city}</p>
                <p>Pais: {dato.country}</p>
                <h3>Contacto: </h3>
                <p> Mail: {dato.email}</p>
                <p>Tel: {dato.phone}</p>
                <p>Cel: {dato.cell}</p>
            </div>
        </article>
        </div>
    )
}

export default Actividad1