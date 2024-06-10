import React, { useContext } from 'react'
import { Conntextoactv1 } from '../context/Contexto'

function Idiomas() {

    const {setAlumno} = useContext(Conntextoactv1)
    const {alumno} = useContext(Conntextoactv1)

    return (
        <div className='idiomas' >
            <div className="bandera" onClick={() => {
                 setAlumno(alumno.map((dato, indice) => indice == 3 ?{...dato, idioma:0}:{...dato}))
            }}><img src='../../spain.jpg' alt="" /></div>
            <div className="bandera" onClick={() => {
                 setAlumno(alumno.map((dato, indice) => indice == 3 ?{...dato, idioma:1}:{...dato}))
            }}><img src='../../uk.png' alt="" /></div>
            <div className="bandera" onClick={() => {
                 setAlumno(alumno.map((dato, indice) => indice == 3 ?{...dato, idioma:2}:{...dato}))
            }}><img src='../../francia.png' alt="" /></div>
        </div>
    )
}

export default Idiomas