import React from 'react'

function Map() {
    const reyes = [
        {
            nombre: "Atanagildo",
            reinado: 15,
            vacasComidas: 9
        },
        {
            nombre: "Ervigio",
            reinado: 7,
            vacasComidas: 3
        },
        {
            nombre: "Ataúlfo",
            reinado: 5,
            vacasComidas: 16
        },
        {
            nombre: "Leovigildo",
            reinado: 18,
            vacasComidas: 3
        },
        {
            nombre: "Sisebuto",
            reinado: 9,
            vacasComidas: 13
        },
        {
            nombre: "Recesvinto",
            reinado: 19,
            vacasComidas: 11
        },
        {
            nombre: "Teodorico",
            reinado: 33,
            vacasComidas: 12
        }
    ]

    const resultado1 = reyes.filter(valor =>valor.vacasComidas >= 10 && valor.reinado <= 12)
        .map(
            valor =>
                <div key={valor.nombre} >{valor.nombre} come {valor.vacasComidas} vacas al dia y su reinado es de {valor.reinado} añotes</div>
            );

    return (
    <>
      <div className="caja">
        {resultado1}
      </div>
    </>
  )
}

export default Map