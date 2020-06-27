// Dependencias
import React from 'react'
import City from './Components/City'

// Estilo
import './scss/styles.scss'

/**
 * Renderizador de la cabecera.
 */
const Body = () => {
  const cities = ['Buenos Aires', 'Cordoba', 'Los Angeles', 'Mar del Plata', 'New York', 'Detroit']
  const selected = []

  // Obtengo 5 ciudades al azar
  ;[0, 1, 2, 3, 4].map(value => {
    const s = getRandomNotExist(selected)

    selected.push(s)
  })

  return (
    <div className="others-cities">
      {selected.map(i => (
        <City city={cities[i]} />
      ))}
    </div>
  )
}

function getRandomNotExist(exist) {
  const random = Math.floor(Math.random() * 6)

  return exist.includes(random) ? getRandomNotExist(exist) : random
}

export default Body
