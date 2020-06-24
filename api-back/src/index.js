const { logger } = require('./utils')
const app = require('./app')

// Constantes de configuración
const { APP_PORT } = require('./utils/constants')

app.listen(APP_PORT, async () => {
  logger.info(
    `(listen): API Weather Time escuchando  en el puerto: ${APP_PORT}`
  )
})
