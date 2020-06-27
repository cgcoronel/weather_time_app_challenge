// Dependencias
import React, { useEffect, useState } from 'react'
import { api_icons } from '../../../Utils/Constants'
import cities from '../../../assets/cities'
import SelectList from '../../SelectList/SelectList'

// Servicios
import weatherService from '../../../Services/weather'

// Estilos
import './scss/styles.scss'

const City = ({ city }) => {
  const [selectedCity, setSelectedCity] = useState({ city })
  const [result, setResult] = useState(null)

  const getResult = async ({ city = '' }) => {
    const data = await weatherService.getCurrent(city)

    setResult(data)
  }

  useEffect(() => {
    setResult(null)
    getResult(selectedCity)
  }, [selectedCity])

  const handleChange = e => {
    setSelectedCity({
      city: e.target.value,
    })
  }

  if (!result) return <div className="loading"></div>

  const { weather } = result
  const { main } = weather
  const { icon } = weather.weather[0]

  return (
    <div id="city" className="card mt-3">
      <div className="card-body">
        <h6 className="card-title">
          <img className="weather-icon" src={`${api_icons}/w/${icon}.png`} />
          {main.temp}°
          <SelectList options={cities} handleChange={handleChange} selected={selectedCity.city} />
          (Min° {main.temp_min} / Max {main.temp_max}°)
        </h6>
      </div>
    </div>
  )
}

export default City
