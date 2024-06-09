import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [cantidad, setCantidad] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);


  const cambios = [
    {
      moneda: "Euro",
      cambio: 1,
    }, {
      moneda: "Peso argentino",
      cambio: 118.6,
    }, {
      moneda: "Peso colombiano",
      cambio: 4543.5,
    }, {
      moneda: "Peso mexicano",
      cambio: 23.2,
    }, {
      moneda: "Dólar",
      cambio: 1.14
    }
  ]

  const modificar = (e) => {
    setCantidad(e.target.value);
    setResultado1(cambios[1].cambio * e.target.value);
    setResultado2(cambios[2].cambio * e.target.value);
    setResultado3(cambios[3].cambio * e.target.value);

  }


  return (
    <div className="App">
      <label htmlFor="u0">{cambios[0].moneda}</label>
      <input id="u0" type="number" value={cantidad} onChange={modificar} />
      <label htmlFor="u1">{cambios[1].moneda}</label>
      <input id="u1" type="number" readOnly value={resultado1} />
      <label htmlFor="u2">{cambios[2].moneda}</label>
      <input id="u2" type="number" readOnly value={resultado2} />
      <label htmlFor="u3">{cambios[3].moneda}</label>
      <input id="u3" type="number" readOnly value={resultado3} />
    </div>
  )
}

export default App;