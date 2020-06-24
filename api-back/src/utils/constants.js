const dotenv = require('dotenv')

// Busco las variables de entorno
dotenv.config()

/**
 * @desc Retorna la ruta base
 */
exports.BASE_ROUTE = process.env.BASE_ROUTE || '/v1'

/**
 * @desc Retorna el puerto del microservicio
 */
exports.APP_PORT = process.env.APP_PORT || 3977

/**
 * @desc Retorna las configuraciones de ip api
 */
exports.IP_API = {
  url: process.env.IP_API_URL || '',
  accessKey: process.env.IP_API_ACCESS_KEY || '',
  lang: process.env.IP_API_LANG || 'es'
}

/**
 * @desc Retorna las configuraciones de open weather map
 */
exports.OPEN_WEATHER = {
  url: process.env.OPEN_WEATHER_URL || '',
  accessKey: process.env.OPEN_WEATHER_ACCESS_KEY || '',
  lang: process.env.OPEN_WEATHER_LANG || 'sp',
  units: process.env.OPEN_WEATHER_UNITS || 'metric'
}
