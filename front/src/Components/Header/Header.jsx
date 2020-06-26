// Dependencias
import React from 'react'
import { getNow } from '../../Utils/Date'
import { api_icons } from '../../Utils/Constants'

// Estilo
import './scss/styles.scss'

/**
 * Renderizador de la cabecera.
 */
const Header = ({ current }) => {
  const { city, weather } = current

  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = weather.main
  const icon = weather.weather[0]

  return (
    <div className="card mt-5" id="header-content">
      <div className="row no-gutters">
        <div className="col-md-12">
          <h1 className="card-title">
            {city},<small>{getNow()}</small>
          </h1>
        </div>
      </div>

      <div className="row no-gutters">
        <div className="col-md-2">
          <div className="card-body">
            <img className="weather-icon" src={`${api_icons}/wn/${icon.icon}@4x.png`} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card-body">
            <p className="card-text">Sensación térmica {feels_like}°</p>
            <p className="card-text">Mín {temp_min}°</p>
            <p className="card-text">Máx {temp_max}°</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card-body">
            <p className="card-text">Presión {pressure} hPa</p>
            <p className="card-text">Humedad {humidity}%</p>
            <p className="card-text">Viento {weather.wind.speed} km</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="weather-temp">
            <span>{temp}°</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
