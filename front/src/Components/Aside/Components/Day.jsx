// Dependencias
import React from 'react'
import { getDay } from '../../../Utils/Date'
import { api_icons } from '../../../Utils/Constants'

const Day = ({ day }) => {
  const { icon } = day[0].weather[0]

  return (
    <div className="form-group row">
      <div className="col-sm-2 col-lg-3 days-next">
        <span>{getDay(day[0].dt_txt)}</span>
      </div>

      <div className="col-sm-2 col-lg-2">{day[0].main.temp}°</div>

      <div className="col-sm-2 col-lg-2">{day[1].main.temp}°</div>

      <div className="col-sm-2 col-lg-2">{day[2].main.temp}°</div>

      <div className="col-sm-2 col-lg-2">
        <img className="weather-icon" src={`${api_icons}/w/${icon}.png`} />
      </div>
    </div>
  )
}

export default Day
