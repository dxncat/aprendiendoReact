import React, { useContext } from 'react'
import { Contexto } from '../context/Contexto'

function Colores() {
    const { setColor } = useContext(Contexto)
    return (
        <div className='colores'>
            <div className="color" onClick={() => setColor('#4285F4')} ></div>
            <div className="color" onClick={() => setColor('#EA4335')} ></div>
            <div className="color" onClick={() => setColor('#FBBC05')} ></div>
            <div className="color" onClick={() => setColor('#34A853')} ></div>
        </div>
    )
}

export default Colores