const { Router } = require('express')

const {
  getLocation,
  getCurrent,
  getForecast
} = require('../controllers/weather')
const { errorHandler } = require('../middlewares/errorHandler')
const {
  cacheCurrent,
  cacheForecast,
  cacheLocation
} = require('../middlewares/cache')

const api = Router()

api.get('/location', cacheLocation, errorHandler(getLocation))
api.get('/current/:city?', cacheCurrent, errorHandler(getCurrent))
api.get('/forecast/:city?', cacheForecast, errorHandler(getForecast))

module.exports = api
