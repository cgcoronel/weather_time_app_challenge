/**
 * Obtiene la fecha actual en formato legible
 *
 * @return                    Dia Letras, Dia de Mes de Año
 *
 */
export function getNow() {
  const newDate = new Date()

  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]

  return `${days[newDate.getDay()]}, ${newDate.getDate()} de ${months[newDate.getMonth()]} de ${newDate.getFullYear()}`
}

/**
 * Obtiene la fecha actual en formato legible
 *
 * @return                    Dia Letras, Dia de Mes de Año
 *
 */
export function getNowYYYMMDD() {
  const newDate = new Date()

  const month = (newDate.getMonth() + 1001).toString().substring(2, 4)
  const day = (newDate.getDate() + 100).toString().substring(1, 3)

  return `${newDate.getFullYear()}${month}${day}`
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
