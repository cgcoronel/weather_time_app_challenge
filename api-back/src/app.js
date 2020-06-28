const bodyParser = require('body-parser')
const express = require('express')
const { headers } = require('./middlewares/headers')
const { BASE_ROUTE } = require('./utils/constants')
const requestIp = require('request-ip')

const app = express()
app.use(requestIp.mw())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configurar cabeceras
app.use(headers)

// Cargar rutas
const weather = require('./routes/weather')
app.use(BASE_ROUTE, weather)

module.exports = app
