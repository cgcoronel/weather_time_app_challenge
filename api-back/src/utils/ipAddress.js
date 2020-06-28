const { logger } = require('.')

/**
 * Retorna la ip del request
 *
 * @param request
 *
 * @return
 *
 */
const getIpAdress = req => {
  try {
    const ip = req.clientIp.replace(/:/g, '').replace(/[a-zA-Z_-]/g, '')
    return ip
  } catch (error) {
    logger.error(`(getIpAddress): (${error})`)
    return undefined
  }
}

module.exports = getIpAdress
