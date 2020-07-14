const redis = require('redis')
const { getIpAddress, logger } = require('../utils')
const { CACHE_REDIS } = require('../utils/constants')

const redisClient = redis.createClient({
  host: CACHE_REDIS.host,
  port: CACHE_REDIS.port
})

redisClient.on('connect', function() {
  logger.info('Conectado a Redis Server')
})

/**
 * Cache Current
 *
 * @param req           request
 * @param res           response
 *
 * @return Promise<void>
 */
const cacheCurrent = (req, res, next) => {
  const { city = null } = req.params

  if (city === null) {
    next()
  } else {
    redisClient.get(`current_${city}`, (err, data) => {
      if (data !== null) {
        res.send(JSON.parse(data))
      } else {
        next()
      }
    })
  }
}

/**
 * Cache Forecast
 *
 * @param req           request
 * @param res           response
 *
 * @return Promise<void>
 */
const cacheForecast = (req, res, next) => {
  const { city = null } = req.params

  if (city === null) {
    next()
  } else {
    redisClient.get(`forecast_${city}`, (err, data) => {
      if (data !== null) {
        res.send(JSON.parse(data))
      } else {
        next()
      }
    })
  }
}

/**
 * Cache Location
 *
 * @param req           request
 * @param res           response
 *
 * @return Promise<void>
 */
const cacheLocation = async (req, res, next) => {
  const ip = await getIpAddress(req)

  redisClient.get(`location_${ip}`, (err, data) => {
    if (data !== null) {
      res.send(JSON.parse(data))
    } else {
      next()
    }
  })
}

module.exports = {
  cacheCurrent,
  cacheForecast,
  cacheLocation,
  redisClient
}
