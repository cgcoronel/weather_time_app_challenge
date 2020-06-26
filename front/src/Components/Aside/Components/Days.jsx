// Dependencias
import React from 'react'
import Day from './Day'

const Days = ({ days }) => (
  <form>
    {console.log(days)}
    <div className="form-group row moment-of-day">
      <div className="col-sm-2 col-lg-3"></div>

      <div className="col-sm-2 col-lg-2">Mañana</div>

      <div className="col-sm-2 col-lg-2">Tarde</div>

      <div className="col-sm-2 col-lg-2">Noche</div>
    </div>

    {days.map(day => (
      <Day day={day} />
    ))}
  </form>
)

export default Days
