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

api.get('/location', errorHandler(getLocation))
api.get('/current/:city?', errorHandler(getCurrent))
api.get('/forecast/:city?', errorHandler(getForecast))

module.exports = api
