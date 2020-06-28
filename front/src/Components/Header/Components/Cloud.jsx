// Dependencias
import React from 'react'
import { api_icons } from '../../../Utils/Constants'

const Cloud = ({ icon }) => (
  <div className="col-md-2">
    <div className="card-body">
      <img className="weather-icon" src={`${api_icons}/wn/${icon}@4x.png`} />
    </div>
  </div>
)

export default Cloud
