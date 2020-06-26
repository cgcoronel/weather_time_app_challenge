// Dependencias
import React, { useEffect, useState } from 'react'

// Servicios
import weatherService from '../../../Services/weather'

const City = ({ city }) => {
  const [current, setCurrent] = useState(null)

  const getCurrent = async () => {
    const data = await weatherService.getCurrent(city)

    setCurrent(data)
  }

  useEffect(() => {
    getCurrent()
  }, [])

  if (!current) return null

  const { weather } = current
  const { main } = weather
  const { icon } = weather.weather[0]

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h6 className="card-title">
          <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} />
          {weather.name} {main.temp}° (Min° {main.temp_min} / Max {main.temp_max}°)
        </h6>
      </div>
    </div>
  )
}

export default City
