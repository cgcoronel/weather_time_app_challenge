// Dependencias
import React from 'react'

// Componentes
import City from './Components/City'
import Cloud from './Components/Cloud'
import Temperatures from './Components/Temperatures'
import Detail from './Components/Details'
import MainTemp from './Components/MainTemp'

// Estilo
import './scss/styles.scss'

/**
 * Renderizador de la cabecera.
 */
const Header = ({ current }) => {
  const { city, weather } = current
  const { main } = weather

  return (
    <div className="card mt-5" id="header-content">
      <div className="row no-gutters">
        <City city={city} />
      </div>
      <div className="row no-gutters">
        <Cloud icon={weather.weather[0].icon} />

        <Temperatures {...main} />

        <Detail {...main} {...weather.wind} />

        <MainTemp {...main} />
      </div>
    </div>
  )
}

export default Header
