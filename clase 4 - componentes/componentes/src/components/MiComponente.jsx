import React from 'react'

function MiComponente(rey) {
  const ruta = "http://www.html6.es/img/rey_"
  const img = `${ruta}${rey.nombre.toLowerCase()}.png`
  const comprar = (p) => {
    rey.setTotal((e) => e + rey.precio);
    p.target.parentNode.style.display = "none";
  }
  return (
    <div style={{backgroundColor:rey.color}} className='MiComponente'>
        <h1>{rey.nombre}</h1>
        <img src={img} alt={rey.nombre} />
        <p>Precio: {rey.precio}€</p>
        <button onClick={comprar}>Pagar</button>
        <br />
    </div>
  )
}
export default MiComponente