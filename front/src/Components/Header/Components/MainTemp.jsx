// Dependencias
import React from 'react'

const MainTemp = ({ temp }) => (
  <div className="col-md-2">
    <div className="weather-temp">
      <span>{temp}°</span>
    </div>
  </div>
)

export default MainTemp
