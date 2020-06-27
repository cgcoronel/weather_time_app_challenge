// Dependencias
import React from 'react'
import { getDay } from '../../../Utils/Date'
import { api_icons } from '../../../Utils/Constants'

const Day = ({ day }) => {
  const icon = Array.isArray(day) && day.length ? day[0].weather[0].icon : null
  const dayDescription = Array.isArray(day) && day.length ? getDay(day[0].dt_txt) : 'En breve...'

  return (
    <div className="form-group row">
      <div className="col-sm-2 col-lg-3 days-next">
        <span>{dayDescription}</span>
      </div>

      {/* Muestro las temperaturas por horario, quedo feo, pero es la alternativa rapida XD */}
      {['15:00:00', '18:00:00', '21:00:00'].map(time => {
        // Filtro por horario, ya que dependiendo el horario del dia en
        // que se consulta algunas temperaturas no estan disponibles
        const result = day.find(t => t.dt_txt.indexOf(time) > 0)
        const t = result === undefined ? '-' : result.main.temp

        return <div className="col-sm-2 col-lg-2">{t}</div>
      })}

      <div className="col-sm-2 col-lg-2">
        {icon && <img className="weather-icon" src={`${api_icons}/w/${icon}.png`} />}
      </div>
    </div>
  )
}

export default Day
