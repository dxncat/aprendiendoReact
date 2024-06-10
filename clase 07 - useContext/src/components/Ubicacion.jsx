import React, { useContext } from 'react'
import { Conntextoactv1 } from '../context/Contexto'

function Ubicacion() {

    const { alumno } = useContext(Conntextoactv1)

    return (
        <div className='ubicacion'>
            <h1>{alumno[alumno[3].idioma].boton2}: </h1>
            <div className="texto">
            {alumno[alumno[3].idioma].direccion}
            </div>
        </div>
    )
}

export default Ubicacion