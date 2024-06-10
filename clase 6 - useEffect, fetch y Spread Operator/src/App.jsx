import './App.css'
import { useEffect, useState } from 'react'
import Actividad1  from './components/Actividad1';
import Actividad2 from './components/Actividad2';

function App() {
  const [datos, setDatos] = useState([]);

  //Actividad 1
  //Consumiendo un array de una api y mostrando los datos en un componente
  // useEffect(() => {
  //   const api = 'https://randomuser.me/api/?results=5';
  //   const peticion = fetch(api);
  //   peticion
  //     .then(info => info.json())
  //     .then(lectura => {
  //       setDatos(lectura.results.map(
  //         dato =>
  //           <Actividad1 email={dato.email} picture = {dato.picture.large} name = {dato.name.first} last = {dato.name.last} city = {dato.location.city} country = {dato.location.country} phone = {dato.phone} cell = {dato.cell} />
  //       ));
  //     })
  //     .catch(() => console.log('se ha producido un error'));
  // }, [])

  //Actividad 2
  //Consumiendo la api de rick and morty y mostrando el dato en un componente

  //  const buscarPersonaje = () => () => {
  //   const api = 'https://rickandmortyapi.com/api/character/';
  //   const numeroAleatorio = Math.floor(Math.random() * 374) + 1;
  //   const peticion = fetch(api + numeroAleatorio);
  //   peticion
  //   .then((datos) => datos.json())
  //   .then(lectura => setDatos(
  //     <Actividad2
  //       key={lectura.id}
  //       id={lectura.id}
  //       image={lectura.image}
  //       name={lectura.name}
  //       species={lectura.species}
  //     />
  //   ))
  //   .catch(console.log)

  // }

  // useEffect(() => {
  //     buscarPersonaje()
  //   }, [])

  //Actividad 3
  //Consumiendo la api de rick and morty y mostrando varios datos en un componente

  useEffect(() => {
      const api = 'https://rickandmortyapi.com/api/character/';
      const peticion = fetch(api);
      peticion
        .then(info => info.json())
        .then(lectura => {
          setDatos(lectura.results.map(
            dato =>
              <Actividad2
                key={dato.id}
                id={dato.id}
                image={dato.image}
                name={dato.name}
                species={dato.species}
              />
          ));
        })
        .catch(() => console.log('se ha producido un error'));
    }, [])

  return (
    <>
      <section>
        {datos}
      </section>
    </>
  )
}

export default App
