// Dependencias
import React from 'react'
import Day from './Day'

const Days = ({ days }) => (
  <form>
    <div className="form-group row moment-of-day">
      <div className="col-sm-4 col-lg-4"></div>

      <div className="col-sm-2 col-lg-2">Mañana</div>

      <div className="col-sm-2 col-lg-2">Tarde</div>

      <div className="col-sm-2 col-lg-2">Noche</div>
    </div>

    {days.map((day, date) => (
      <Day day={day} date={date} />
    ))}
  </form>
)

export default Days
