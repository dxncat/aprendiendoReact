import sisebuto from './static/img/rey_sisebuto.png';
import leogivildo from './static/img/rey_leogivildo.png';
import atanagildo from './static/img/rey_atanagildo.png';
import unknow from './static/img/rey_incognito.png'
import './App.css'

function App() {
  let reyes = [
    {name: 'Sisebuto', img: sisebuto},
    {name: 'Leogildo', img: leogivildo},
    {name: 'Atanagildo', img: atanagildo},
  ];
  const text = (e) => {
    if (e.target.innerHTML === 'Visto') {
      e.target.style.visibility = 'hidden';
    }else{
      e.target.innerHTML = 'Visto';
    }
  }
  const img = (e) => {
    if(e.target.src.includes('incognito')) {
      e.target.style.visibility = 'hidden';
      }else{
      e.target.src = unknow;
      }
    e.target.parentNode.style.backgroundColor = '#282c34';
  }
  return (
    <>
      <section className='Reyes'>
        <article className='Rey'>
          <img onClick={img} src={reyes[0].img}/>
          <p onClick={text}>{reyes[0].name}</p>
        </article>
        <article className='Rey'>
          <img onClick={img} src={reyes[1].img}/>
          <p onClick={text}>{reyes[1].name}</p>
        </article>
        <article className='Rey'>
          <img onClick={img} src={reyes[2].img}/>
          <p onClick={text}>{reyes[2].name}</p>
        </article>
      </section>
    </>
  )
}

export default App
