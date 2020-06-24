/**
 * Formatea una fecha
 *
 * @param { Date } date
 *
 * @return { String }
 */
export const UnformatToYYYYMMDD = function(date) {
  var mm = date.getMonth() + 1 // getMonth() is zero-based
  var dd = date.getDate()

  return [date.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('')
}

/**
 * Obtiene una fecha en formato legible
 *
 * @param date                en formato YYYYMMDD o YYYYMMDDHHMMSS (numero)
 * @param full                true si incluye la hora (default false)
 *
 * @return                    fecha legible (DD/MM/YYYY)
 *
 */
export function readable(date, full = false) {
  try {
    let _date = ''

    // Si la fecha no esta definida la obtiene
    if (date === undefined) {
      _date = get('YYYYMMDDHHMMSS').toString()
    } else {
      // Si es numerico
      if (typeof date === 'string') {
        _date = date
      } else {
        _date = date.toString()
      }
    }

    // Si no es una fecha full
    if (full === undefined || full === false) {
      return `${_date.slice(6, 8)}/${_date.slice(4, 6)}/${_date.slice(0, 4)}`
    } else {
      return `${_date.slice(6, 8)}/${_date.slice(4, 6)}/${_date.slice(0, 4)} ${_date.slice(8, 10)}:${_date.slice(
        10,
        12
      )}:${_date.slice(12, 14)}`
    }
  } catch (err) {
    console.error(`date.js (readable): (${err.stack})`)
  }

  return date
}

/**
 * Obtiene una fecha en formato legible
 *
 * @param date                en formato YYYYMMDD o YYYYMMDDHHMMSS (numero)
 * @param full                true si incluye la hora (default false)
 *
 * @return                    Día
 *
 */
export function getDay(date) {
  try {
    let _date = ''

    if (typeof date === 'string') {
      _date = date
    } else {
      _date = date.toString()
    }

    const year = _date.substring(0, 4)
    const month = _date.substring(4, 6)
    const day = _date.substring(6, 8)

    const newDate = new Date(year, month - 1, day)

    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    return days[newDate.getDay()]
  } catch (err) {
    console.error(`date.js (readable): (${err.stack})`)
  }

  return date
}
