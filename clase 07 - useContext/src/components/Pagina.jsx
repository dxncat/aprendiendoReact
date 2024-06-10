import React, { useContext, useState } from 'react'
import { Conntextoactv1 } from '../context/Contexto'
import Profesora from './Profesora'
import Ubicacion from './Ubicacion'

function Pagina() {

    const [ocultar1, setOcultar1] = useState(true)
    const [ocultar2, setOcultar2] = useState(false)
    const { alumno } = useContext(Conntextoactv1)

    return (
        <>
            <h1>{alumno[alumno[3].idioma].titulo}</h1>
            <h2>{alumno[alumno[3].idioma].texto}</h2>
            <div className="botones">
                <button onClick={
                    () => {
                        setOcultar1(true)
                        setOcultar2(false)
                    }
                }>{alumno[alumno[3].idioma].boton1}</button>
                <button onClick={
                    () => {
                        setOcultar1(false)
                        setOcultar2(true)
                    }
                }>{alumno[alumno[3].idioma].boton2}</button>
            </div>
            {ocultar1 ? <Profesora /> : null}
            {ocultar2 ? <Ubicacion /> : null}
        </>
    )
}

export default Pagina