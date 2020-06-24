const axios = require('axios')
const { logger } = require('../utils')
const { IP_API, OPEN_WEATHER } = require('../utils/constants')

/**
 * Devuelve los datos de ubicación según ip-api
 *
 * @return      json o undefined
 */
const getLocation = async ip => {
  try {
    // TODO reemplazar por la ip del parametro
    const ip1 = '181.44.61.42'
    const url = `${IP_API.url}/${ip1}?access_key=${IP_API.accessKey}&language=${IP_API.lang}`
    const { data } = await axios.get(url)

    return data
  } catch (error) {
    logger.error(
      `(getLocation): Se produjo un error al realizar la operación (${error.stack})`
    )

    return undefined
  }
}

/**
 * Devuelve el estado del tiempo actual de una ubicacion determinada
 *
 * @return      json o undefined
 */
const getCurrent = async city => {
  try {
    const url = `${OPEN_WEATHER.url}/weather?q=${city}&appid=${OPEN_WEATHER.accessKey}&lang=${OPEN_WEATHER.lang}`
    const { data } = await axios.get(url)

    return data
  } catch (error) {
    logger.error(
      `(getLocation): Se produjo un error al realizar la operación (${error.stack})`
    )

    return undefined
  }
}

/**
 * Devuelve el estado del tiempo de los ultimos 5 dias de una ubicacion determinada
 *
 * @return      json o undefined
 */
const getForecast = async city => {
  try {
    const url = `${OPEN_WEATHER.url}/forecast?q=${city}&appid=${OPEN_WEATHER.accessKey}&lang=${OPEN_WEATHER.lang}`
    const { data } = await axios.get(url)

    return data
  } catch (error) {
    logger.error(
      `(getLocation): Se produjo un error al realizar la operación (${error.stack})`
    )

    return undefined
  }
}

module.exports = {
  getLocation,
  getCurrent,
  getForecast
}
