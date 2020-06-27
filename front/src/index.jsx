/**
 * Dependencias
 */
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Resources
 */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/main-styles/main.scss'

/**
 * App.
 */
import App from './Containers/App/App'

/**
 * Renderiza la aplicación.
 */
ReactDOM.render(<App />, document.getElementById('root'))
