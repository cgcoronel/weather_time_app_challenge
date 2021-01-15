const logger = require('./logger')

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
//    const ip = req.clientIp.replace(/:/g, '').replace(/[a-zA-Z_-]/g, '')
    const ip = '172.217.172.174' 
    return ip
  } catch (error) {
    logger.error(`(getIpAddress): (${error})`)
    return undefined
  }
}

module.exports = getIpAdress
