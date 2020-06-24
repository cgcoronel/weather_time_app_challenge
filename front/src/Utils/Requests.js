// Utilidades
import { getStorage } from './SessionStorage'
import { isObject } from './Objects'
import { onError } from './ErrorHandler'

/**
 * Solicitudes.
 */
const Requests = {
  /**
   * Realiza una solicitud de metodo GET
   *
   * @param { String } endpoint
   * @param { String } responseType
   *
   * @return { Promise }
   */
  get: async (endpoint, responseType = 'json') => {
    try {
      // Cabeceras.
      const headers = getHeaders(),
        method = 'GET',
        cache = 'default'

      // Armamos el requester
      let request = new Request(endpoint, { method, headers, cache })

      // Almacenamos las cabeceras de la respuesta.
      let responseHeader = null

      // Realizamos la solicitud
      let response = await fetch(request)

      // Almacenamos las cabecera de la respuesta.
      responseHeader = response.headers

      if ([200, 201, 400, 401, 403, 404].indexOf(response.status) > -1) {
        // Respuesta parseada
        let responseParsed = await response[responseType]()

        // Asignamos a la respuesta las cabeceras.
        responseParsed.headers = responseHeader

        // Codigo
        responseParsed.code = response.status

        // Parseamos la respuesta.
        return responseParsed
      }

      return mockResponse(response.status, response.error)
    } catch (error) {
      onError()
      return error
    }
  },

  /**
   * Realiza una solicitud de metodo POST
   *
   * @param { String } endpoint
   * @param { String } responseType
   *
   * @return { Promise }
   */
  post: async (endpoint, data, responseType = 'json') => {
    try {
      let headers = getHeaders()

      console.log(headers)

      // Si la petición es de un formdata, elimino las cabeceras
      if (data instanceof FormData) {
        headers.delete('Accept')
        headers.delete('Content-Type')
      }

      // Cabeceras.
      const method = 'POST',
        body = data instanceof FormData ? data : JSON.stringify(data),
        cache = 'default'

      // Armamos el requester
      let request = new Request(endpoint, { method, headers, cache, body })

      // Realizamos la solicitud
      let response = await fetch(request)

      if ([200, 201, 400, 401, 403, 404].indexOf(response.status) > -1) {
        // Respuesta parseada
        let responseParsed = await response[responseType]()

        // Codigo
        responseParsed.code = response.status

        // Parseamos la respuesta.
        return responseParsed
      }

      return mockResponse(response.status, response.error)
    } catch (error) {
      // Rechazamos la solicitud.
      return error
    }
  },

  /**
   * Realiza una solicitud de metodo POST
   *
   * @param { String } endpoint
   * @param { String } responseType
   *
   * @return { Promise }
   */
  put: async (endpoint, data, responseType = 'json') => {
    try {
      // Cabeceras.
      let headers = getHeaders(),
        method = 'PUT',
        body = JSON.stringify(data),
        cache = 'default'

      // Armamos el requester
      let request = new Request(endpoint, { method, headers, cache, body })

      // Realizamos la solicitud
      let response = await fetch(request)

      if ([200, 201, 400, 401, 403, 404].indexOf(response.status) > -1) {
        // Respuesta parseada
        let responseParsed = await response[responseType]()

        // Codigo
        responseParsed.code = response.status

        // Parseamos la respuesta.
        return responseParsed
      }

      return Requests.mockResponse(response.status, response.error)
    } catch (error) {
      // Rechazamos la solicitud.
      return error
    }
  },

  /**
   * Realiza una solicitud de metodo DELETE
   *
   * @param { String } endpoint
   * @param { String } responseType
   *
   * @return { Promise }
   */
  delete: async (endpoint, responseType = 'json') => {
    try {
      // Cabeceras.
      const headers = getHeaders(),
        method = 'DELETE',
        cache = 'default'

      // Armamos el requester
      let request = new Request(endpoint, { method, headers, cache })

      // Almacenamos las cabeceras de la respuesta.
      let responseHeader = null

      // Realizamos la solicitud
      let response = await fetch(request)

      // Almacenamos las cabecera de la respuesta.
      responseHeader = response.headers

      if ([200, 201, 400, 401, 403, 404].indexOf(response.status) > -1) {
        // Respuesta parseada
        let responseParsed = await response[responseType]()

        // Asignamos a la respuesta las cabeceras.
        responseParsed.headers = responseHeader

        // Codigo
        responseParsed.code = response.status

        // Parseamos la respuesta.
        return responseParsed
      }

      return mockResponse(response.status, response.error)
    } catch (error) {
      // Rechazamos la solicitud.
      return error
    }
  },

  /**
   * Metodo para administrar los codigos Http
   */
  validateHttpResponse: (response, callback, fallback, method) => {
    try {
      // Evaluamos el argumento requerido.
      if (!isObject(response)) throw new TypeError('response expected a object, but received: ' + typeof response)

      if (!response.hasOwnProperty('code') || typeof response.code !== 'number') {
        throw new TypeError(
          'code in object response not exist or not is a number, but received: ' + typeof response.code
        )
      }

      // Validamos que se haya procesado correctamente.
      ;[200, 201].indexOf(response.code) > -1 && callback()

      // Validamos los casos de fallos.
      if ([400, 401, 402, 403, 404, 500].indexOf(response.code) > -1) {
        fallback()
        return false
      }

      return true
    } catch (error) {
      onError(error)
      return false
    }
  },

  /**
   * Retorna la interfaz de error.
   *
   * @param { Number } code
   * @param { Object } exceptions
   *
   * @return { Object }
   */
  mockResponse: (code, exceptions) => ({ code, exceptions }),
}

const getHeaders = () => {
  // Conjunto de cabeceras
  const headersArray = new Headers()

  // Cabeceras
  headersArray.append('Accept', 'application/json')
  headersArray.append('Content-Type', 'application/json')

  // Alias del usuario.
  const user = getStorage('user', true)

  // Validamos que exista el usuario.
  if (user) {
    // Alias del usuario
    const { token } = user

    // Validamos si tiene un token de autenticación.
    headersArray.append('authorization', typeof token === 'string' ? token : '')
  }
  return headersArray
}

export default Requests
