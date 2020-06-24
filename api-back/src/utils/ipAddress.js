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
    return (
      (req.headers['x-forwarded-for'] || '')
        .split(',')
        .pop()
        .trim() ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress
    )
  } catch (error) {
    logger.error(`(getIpAddress): (${error})`)
  } finally {
    return undefined
  }
}

module.exports = getIpAdress
