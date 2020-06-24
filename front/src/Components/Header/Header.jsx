// Dependencias
import React from 'react'

// Estilo
import './scss/styles.scss'

/**
 * Renderizador de la cabecera.
 */
const Header = ({ current }) => {
  const { city, weather } = current

  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = weather.main

  return (
    <header>
      <div className="card mt-5">
        <div className="card-body">
          <form>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nubes</label>
            </div>

            <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <h3>{city}</h3>
                Clima Actual {temp}°
                <br />
                Sensacion térmica {feels_like}°
                <br />
                Mín {temp_min}°
                <br />
                Máx {temp_max}°
                <br />
                Presion {pressure} hPa
                <br />
                Humedad {humidity}%
                <br />
                Viento {weather.wind.speed}
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}
export default Header
