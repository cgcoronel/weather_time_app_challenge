const logger = require('./logger')

const ResponseHandler = () => {
  // Codigos de retorno de Http
  const statusCodes = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500
  }

  /**
   *  Respuesta de solicitud correcta.
   *
   * @param res   response
   * @param data  datos de retorno
   *
   * @return { Object }
   */
  const ok = (res, data) => {
    // Codigo de respuesta.
    const code = statusCodes.OK

    // Enviamos la respuesta.
    res.status(code).json(data)
  }

  /**
   *  Respuesta de solicitud creada.
   *
   * @param res   response
   * @param data  datos de retorno
   *
   * @return { Object }
   */
  const created = (res, data) => {
    // Codigo de respuesta.
    const code = statusCodes.CREATED

    // Enviamos la respuesta.
    res.status(code).json(data)
  }

  /**
   * Respuesta de solicitud invalida.
   *
   * @param res       response
   * @param message   mensaje
   *
   * @return { Object }
   */
  const badRequest = (res, textMessage = 'Parámetros invalidos.') => {
    // Mensaje de respuesta
    const message = `${textMessage}`

    // Codigo de respuesta.
    const code = statusCodes.BAD_REQUEST

    logger.error(message)

    // Enviamos la respuesta.
    res.status(code).json({ message })
  }

  /**
   *  Respuesta de solicitud invalida.
   *
   * @param res       response
   * @param message   mensaje
   *
   * @return { Object }
   */
  const forbidden = (res, textMessage = 'No posee permisos.') => {
    // Mensaje de respuesta
    const message = `${textMessage}`

    // Codigo de respuesta.
    const code = statusCodes.FORBIDDEN

    logger.error(message)

    // Enviamos la respuesta.
    res.status(code).json({ message })
  }

  /**
   *  Respuesta de solicitud invalida.
   *
   * @param res       response
   * @param message   mensaje
   *
   * @return { Object }
   */
  const notFound = (
    res,
    textMessage = 'No se encontro el recurso solicitado.'
  ) => {
    // Mensaje de respuesta
    const message = `${textMessage}`

    // Codigo de respuesta.
    const code = statusCodes.NOT_FOUND

    logger.error(message)

    // Enviamos la respuesta.
    res.status(code).json({ message })
  }

  /**
   *  Recurso no encontrado.
   *
   * @param res       response
   * @param message   mensaje
   *
   * @return { Object }
   */
  const internalError = (res, textMessage) => {
    // Mensaje de respuesta
    const message = `${textMessage}`

    // Codigo de respuesta.
    const code = statusCodes.INTERNAL_ERROR

    logger.error(message)

    // Enviamos la respuesta.
    res.status(code).json({ message })
  }

  /**
   *  Respuesta personalizada.
   *
   * @param res       response
   * @param message   mensaje
   * @param code      { http code }
   *
   * @return { Object }
   */
  const customCode = (res, textMessage, code = 200) => {
    // Mensaje de respuesta
    const message = `${textMessage}`

    logger.error(message)

    // Enviamos la respuesta.
    res.status(code).json({ message })
  }

  return {
    ok,
    created,
    badRequest,
    forbidden,
    notFound,
    internalError,
    customCode,
    statusCodes
  }
}

module.exports = ResponseHandler()
