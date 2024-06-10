import { useState } from 'react'
import './App.css'
import Actividad1 from './components/Actividad1'
import Actividad2 from './components/Actividad2'
import Actividad3 from './components/Actividad4'

function App() {
  const [reyesEliminados, setReyesEliminados] = useState([]);
  const [burey, setBurey] = useState("");
  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9
    }, {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3
    }, {
      nombre: "Ataúlfo",
      reinado: 5,
      vacasComidas: 16
    }, {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3
    }, {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13
    }, {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11
    }, {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12
    }
  ]

  const resultado1 = reyes.map(valor =>
    <Actividad1 nombre={valor.nombre} reinado={valor.reinado} vacasComidas={valor.vacasComidas} />
  )

  const resultado2 = reyes.filter(valor => !valor.nombre.includes("g")).map(valor =>
    <Actividad2 nombre={valor.nombre} reinado={valor.reinado} vacasComidas={valor.vacasComidas} setReyesEliminados={setReyesEliminados} />
  )

  const reyese = reyesEliminados.map(valor =>
    <li key={valor.nombre + 6251341}>{valor.nombre} ahorró {valor.vacasAhorradas} vacas</li>
  )

  const totalVacasAhorradas = reyesEliminados.reduce((total, rey) => total + rey.vacasAhorradas, 0);

  const busqueda = (e) => {
    setBurey(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  }

  const reyesencon = reyes.filter(valor => valor.nombre.includes(burey)).map(valor =>
    <Actividad1 nombre={valor.nombre} reinado={valor.reinado} vacasComidas={valor.vacasComidas} />
  )

  const resultado3 = reyes.filter(valor => valor.vacasComidas > 10 &&valor.reinado > 10).map(valor =>
    <Actividad3 nombre={valor.nombre} reinado={valor.reinado} vacasComidas={valor.vacasComidas}/>
  )

  return (
    <>
      <h1>Actividad 1:</h1>
      <h4>Se muestran los reyes y el total de vacas en han comido en todos sus años reinando</h4>
      {resultado1}
      <h1>Actividad 2:</h1>
      <h4>Ahora se muestran los reyes que no cuentan con "g" en su nombre y ademas se pueden eliminar, para contar cuantas vas se ahorran</h4>
      <h3>Reyes eliminados: </h3>
      <ul>
        {reyese}
        <li>Total de vacas ahorradas: {totalVacasAhorradas}</li>
      </ul>
      {resultado2}
      <h1>Actividad 3:</h1>
      <h4>Ahora se puede buscar un rey por su nombre escribiéndolo en el input</h4>
      <h3>Busca a tu rey:</h3>
      <input type="text" onChange={busqueda} value={burey} placeholder='Escribe el nombre de tu rey' />
      {reyesencon}
      <h1>Actividad 4:</h1>
      <h4>Ahora se muestran los reyes que han comido mas de 10 vacas diarias y han reinado más de 10 años, ademas de poder votar por tu favorito</h4>
      {resultado3}
    </>
  )
}

export default App
