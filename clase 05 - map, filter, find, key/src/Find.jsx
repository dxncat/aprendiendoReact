import React from 'react'

function Map() {
    const reyes=[
        {
            nombre:"Atanagildo",
            reinado:15,
            vacasComidas:9
        },{
            nombre:"Ervigio",
            reinado:7,
            vacasComidas:3
        },{
            nombre:"Ataúlfo",
            reinado:5,
            vacasComidas:16
        },{
            nombre:"Leovigildo",
            reinado:18,
            vacasComidas:3
        },{
            nombre:"Sisebuto",
            reinado:9,
            vacasComidas:13
        },{
            nombre:"Recesvinto",
            reinado:19,
            vacasComidas:11
        },{
            nombre:"Teodorico",
            reinado:33,
            vacasComidas:12
        }
      ]

    //método condicionales clásicas
    // const resultado1 = reyes.find(valor =>valor.vacasComidas >= 10 && valor.vacasComidas <= 12)

    //método includes
    const resultado1 = reyes.find(valor =>valor.nombre.includes("a"))

    return (
    <>
      <div className="caja">
      <div key={resultado1.nombre} >{resultado1.nombre} come {resultado1.vacasComidas} vacas al dia y su reinado es de {resultado1.reinado} añotes</div>
      </div>
    </>
  )
}

export default Map