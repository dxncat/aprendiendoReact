import './App.css'
import Pagina1 from './components/Pagina1'
import Pagina2 from './components/Pagina2'
import Pagina3 from './components/Pagina3'
import Colores from './components/Colores'
import Idionmas from './components/Idiomas'
import Pagina from './components/Pagina'
import { Datos, Provideractv1 } from './context/Contexto'

function App() {

  return (
    <>
      <Provideractv1>
        <div className="banderas">
          <Idionmas />
        </div>
        <div className="contenido">
          <Pagina />
        </div>
      </Provideractv1>
    </>
  )
}

export default App
