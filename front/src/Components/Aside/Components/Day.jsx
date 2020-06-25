// Dependencias
import React from 'react'
import { getDay } from '../../../Utils/Date'

const Day = ({ day }) => {
  const { icon } = day[0].weather[0]

  return (
    <div className="form-group row">
      <div className="col-sm-4 col-lg-4 days-next">
        <span>{getDay(day[0].dt_txt)}</span>
      </div>

      <div className="col-sm-2 col-lg-2">{day[0].main.temp}°</div>

      <div className="col-sm-2 col-lg-2">{day[1].main.temp}°</div>

      <div className="col-sm-2 col-lg-2">{day[2].main.temp}°</div>

      <div className="col-sm-2 col-lg-2">
        <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} />
      </div>
    </div>
  )
}

export default Day
