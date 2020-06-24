/**
 * Verifica el tipo de un elemento.
 *
 * @param { Any } data
 *
 * @return { Boolean }
 */
export const isObject = data => data instanceof Object && !Array.isArray(data) && typeof data === 'object'

/**
 * Realiza una copia sin referencia.
 *
 * @param { Any } value
 *
 * @return { Object }
 */
export const cloneDeep = value => {
  try {
    // Verificamos el argumento.
    if (!isObject(value) && !Array.isArray(value))
      throw new TypeError('value expected a object or array, but received: ' + typeof value)

    // Validamos que sea un valor valido.
    return JSON.parse(JSON.stringify(value))
  } catch (error) {
    // console.log( value )

    return null
  }
}
