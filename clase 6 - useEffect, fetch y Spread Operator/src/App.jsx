import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const api = 'https://randomuser.me/api/?results=5';
    const peticion = fetch(api);
    peticion
      .then(info => info.json())
      .then(lectura => {
        setDatos(lectura.results.map(
          dato =>
            <article key={dato.email}>
              <p>{dato.name.first} {dato.name.last}</p>
              <img src={dato.picture.large} alt={dato.name.first} />
            </article>
        ));
      })
      .catch(() => console.log('se ha producido un error'));
  }, [])

  return (
    <>
      <section>
        <h1>Emplead@s del mes</h1>
        {datos}
      </section>
    </>
  )
}

export default App
