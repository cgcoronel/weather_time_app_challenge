// Dependencias
import React from 'react'
import Day from './Day'

const Days = ({ days }) => (
  <form>
    <table class="table table-responsive">
      <thead>
        <tr>
          <th></th>
          <th>Mañana</th>
          <th>Tarde</th>
          <th>Noche</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {days.map(day => (
          <Day day={day} />
        ))}
      </tbody>
    </table>
  </form>
)

export default Days
