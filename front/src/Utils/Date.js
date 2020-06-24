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
