/**
 * Función de middleware para la incorporación de cabeceras
 *
 * @param req   Request
 * @param res   Response
 * @param next  NextFunction
 */
const headers = async (req, res, next) => {
  // Insertamos las cabeceras necesarias
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')

  next()
}

exports.headers = headers
