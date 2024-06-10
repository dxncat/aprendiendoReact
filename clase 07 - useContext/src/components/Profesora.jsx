import React, { useContext } from 'react'
import { Conntextoactv1 } from '../context/Contexto'

function Profesora() {

    const { alumno } = useContext(Conntextoactv1)
    const img = `../../public/${alumno[alumno[3].idioma].foto}`

    return (
        <div className='profesora'>
            <h1>{alumno[alumno[3].idioma].boton1}: </h1>
            <div className="foto">
                <img src={img} alt="" className="imagen" />
            </div>
            <div className="nombre">
                {alumno[alumno[3].idioma].nombre}
            </div>
        </div>
    )
}

export default Profesora