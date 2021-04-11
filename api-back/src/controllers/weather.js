const { HttpRequestError, ResponseHandler, getIpAddress } = require('../utils')
const service = require('../services/weather')
const { redisClient } = require('../middlewares/cache')
//console.log
// Constantes globales
const { NOT_FOUND } = ResponseHandler.statusCodes

/**
 * Devuelve los datos de ubicación
 *
 * @param req         request de la llamada
 * @param res         response de la llamada
 *
 */
const getLocation = async (req, res) => {
  // Obtengo la ip del request
  const ip = await getIpAddress(req)

  if (!ip) {
    throw new HttpRequestError(
      NOT_FOUND,
      '(getLocation): Error al obtener la ip'
    )
  }

  const { city } = await service.getLocation(ip)

  if (!city) {
    throw new HttpRequestError(
      NOT_FOUND,
      '(getLocation): Error al obtener la ubicación'
    )
  }

  // Guardo el resultado en el cache
  const result = JSON.stringify({ city })
  redisClient.setex(`location_${ip}`, 3600, result)

  ResponseHandler.ok(res, { city })
}

/**
 * Devuelve los datos de ubicación especifica o la ubicación actual según
 * ip-api y el estado del tiempo actual.
 *
 * @param req             request
 * @param res             response
 *
 */
const getCurrent = async (req, res) => {
  const { city: cityParam = null } = req.params
  let city = cityParam

  if (city === null) {
    // Busco los datos de la ubicación actual
    const ip = await getIpAddress(req)
    const location = await service.getLocation(ip)

    city = location.city
  }

  // Valido la ciudad
  if (!city) {
    throw new HttpRequestError(
      NOT_FOUND,
      '(getCurrent): Error al obtener la ciudad'
    )
  }

  // Busco el estado actual del tiempo segun la ciudad
  const weather = await service.getCurrent(city)

  if (!weather) {
    throw new HttpRequestError(
      NOT_FOUND,
      '(getCurrent): Error al obtener el clima'
    )
  }

  // Guardo el resultado en el cache
  const result = JSON.stringify({ city, weather })
  redisClient.setex(`current_${city}`, 3600, result)

  ResponseHandler.ok(res, { city, weather })
}

/**
 * Devuelve los datos de ubicación especifica o la ubicación actual según
 * ip-api y el estado del tiempo a 5 días
 *
 * @param req             request
 * @param res             response
 *
 */
const getForecast = async (req, res) => {
  const { city: cityParam = null } = req.params
  let city = cityParam

  if (!city) {
    // Busco los datos de la ubicación actual
    const ip = await getIpAddress(req)
    const location = await service.getLocation(ip)
    city = location.city
  }

  // Valido la ciudad
  if (!city) {
    throw new HttpRequestError(
      NOT_FOUND,
      '(getForecast): Error al obtener la ubicacion'
    )
  }

  // Busco el estado actual del tiempo segun la ciudad
  const weather = await service.getForecast(city)

  if (!weather) {
    throw new HttpRequestError(
      NOT_FOUND,
      '(getForecast): Error al obtener el clima'
    )
  }

  // Guardo el resultado en el cache
  const result = JSON.stringify({ city, weather })
  redisClient.setex(`forecast_${city}`, 3600, result)

  ResponseHandler.ok(res, { city, weather })
}

module.exports = {
  getLocation,
  getCurrent,
  getForecast
}
