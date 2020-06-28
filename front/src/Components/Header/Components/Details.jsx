// Dependencias
import React from 'react'

const Detail = ({ pressure, humidity, speed }) => (
  <div className="col-md-3">
    <div className="card-body">
      <p className="card-text">Presión {pressure} hPa</p>
      <p className="card-text">Humedad {humidity}%</p>
      <p className="card-text">Viento {speed} km</p>
    </div>
  </div>
)

export default Detail
