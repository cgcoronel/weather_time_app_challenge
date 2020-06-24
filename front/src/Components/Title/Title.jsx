// Dependencias
import React from 'react'

// Estilos
import './scss/styles.scss'

/**
 * Componente de Titulo de ventanas
 */
const Title = props => (
  <div id="main-title-bar">
    <label>{props.label}</label>
  </div>
)

export default Title
