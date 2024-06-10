import React, { useContext } from 'react'
import { Contexto } from '../context/Contexto'

function Pagina1() {

    const {color} = useContext(Contexto)

    return (
        <div className='hijo' style={{background: color}}>
            <h1>{color}</h1>
        </div>
    )
}

export default Pagina1