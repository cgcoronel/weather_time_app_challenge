// Dependencias
import React from 'react'
import { getNow } from '../../Utils/Date'

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
          <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon.icon}@4x.png`} />

          <div className="weather-temp">
            <span>{temp}°</span>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card-body">
            <p className="card-text">Sensación térmica {feels_like}°</p>
            <p className="card-text">Mín {temp_min}°</p>
            <p className="card-text">Máx {temp_max}°</p>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <p className="card-text">Presión {pressure} hPa</p>
            <p className="card-text">Humedad {humidity}%</p>
            <p className="card-text">Viento {weather.wind.speed} km</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
