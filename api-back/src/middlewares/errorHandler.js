const { HttpRequestError, ResponseHandler, logger } = require('../utils')

/**
 * Controlador de errores
 *
 * @param req           request
 * @param res           response
 *
 * @return Promise<void>
 */

const errorHandler = fn => (req, res) => {
  fn(req, res).catch(err => {
    logger.error(
      `(errorHandler): Se produjo un error al realizar la operación (${err.stack})`
    )

    if (err instanceof HttpRequestError) {
      ResponseHandler.customCode(res, err.message, err.status)
    } else {
      ResponseHandler.internalError(
        res,
        '(errorHandler): Se produjo un error al realizar la operación'
      )
    }
  })
}

module.exports = {
  errorHandler
}
