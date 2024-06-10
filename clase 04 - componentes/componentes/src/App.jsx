import { useState } from 'react'
import './App.css'
import MiComponente from './components/MiComponente'


function App() {
  const reyes = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178
    }, {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169
    }, {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81
    }, {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126
    }, {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141
    }, {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69
    }
  ]

  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>Total a pagar: <span>{total}€</span></h1>
      <section className='reyes'>
        <MiComponente nombre={reyes[0].nombre} color={reyes[0].color} precio={reyes[0].precio} setTotal={setTotal} />
        <MiComponente nombre={reyes[1].nombre} color={reyes[1].color} precio={reyes[1].precio} setTotal={setTotal} />
        <MiComponente nombre={reyes[2].nombre} color={reyes[2].color} precio={reyes[2].precio} setTotal={setTotal} />
        <MiComponente nombre={reyes[3].nombre} color={reyes[3].color} precio={reyes[3].precio} setTotal={setTotal} />
      </section>
    </>
  )
}

export default App
