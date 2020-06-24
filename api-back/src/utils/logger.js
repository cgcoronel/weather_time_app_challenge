const chalk = require('chalk')
const CallerFileName = require('./callerFileName')

const DEBUG = process.env.DEBUG === 'true'

const Logger = () => {
  /**
   *  Mensaje de logueo
   *
   * @param message  Mensaje
   *
   * @return { Object }
   */
  const info = message =>
    console.info(`${chalk.blue('[INFO]')} ${CallerFileName()} ${message}`)

  /**
   *  Mensaje de logueo
   *
   * @param message  Mensaje
   *
   * @return { Object }
   */
  const warning = message =>
    console.warn(
      `${chalk.keyword('orange')('[WARNING]')} ${CallerFileName()} ${message}`
    )

  /**
   *  Mensaje de logueo
   *
   * @param message  Mensaje
   *
   * @return { Object }
   */
  const error = message =>
    console.error(`${chalk.red('[ERROR]')} ${CallerFileName()} ${message}`)

  /**
   *  Mensaje de logueo
   *
   * @param message  Mensaje
   *
   * @return { Object }
   */
  const debug = message =>
    console.debug(`${chalk.magenta('[DEBUG]')} ${CallerFileName()} ${message}`)

  /**
   *  Chequea el modo de logueo
   *
   * @param message  Mensaje
   *
   * @return { Object }
   */
  const check = func => {
    // Si no esta en debug excluyo mensaje
    if (func.name === 'debug' && !DEBUG) return () => {}

    return func
  }

  return {
    info: check(info),
    warning: check(warning),
    error: check(error),
    debug: check(debug)
  }
}

module.exports = Logger()
