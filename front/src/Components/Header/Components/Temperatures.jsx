// Dependencias
import React from 'react'

const Temperatures = ({ feels_like, temp_min, temp_max }) => (
  <div className="col-md-4">
    <div className="card-body">
      <p className="card-text">Sensación térmica {feels_like}°</p>
      <p className="card-text">Mín {temp_min}°</p>
      <p className="card-text">Máx {temp_max}°</p>
    </div>
  </div>
)

export default Temperatures
