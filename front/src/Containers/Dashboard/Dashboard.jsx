// Dependencias
import React, { useEffect, useState } from 'react'

// Componentes
import Header from '../../Components/Header/Header'
import Aside from '../../Components/Aside/Aside'
import Body from '../../Components/Body/Body'

// Servicios
import weatherService from '../../Services/weather'

// Estilos
import './scss/styles.scss'

/**
 * Contenedor de la pantalla de login
 */
const Dashboard = () => {
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)

  const getLocation = async () => {
    const { city } = await weatherService.getLocation()

    const current = await weatherService.getCurrent(city)
    setCurrent(current)

    const forecast = await weatherService.getForecast(city)
    setForecast(forecast)
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <div className="container" id="dashboard">
      {(current === null && <div className="loading"></div>) || <Header current={current} />}

      <div className="row">
        <div className="col-md-6">
          {(forecast === null && <div className="loading"></div>) || <Aside forecast={forecast} />}
        </div>
        <div className="col-md-6">
          <Body />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
