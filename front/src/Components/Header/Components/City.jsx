// Dependencias
import React from 'react'
import { getNow } from '../../../Utils/Date'

const City = ({ city }) => (
  <div className="col-md-12">
    <h1 className="card-title">
      {city},<small>{getNow()}</small>
    </h1>
  </div>
)

export default City
