const chalk = require('chalk')

/**
 *  Retorna el nombre del archivo desde donde se ejecuta la función
 *
 * @param message  Mensaje
 *
 * @return { Object }
 */
const getCallerFile = () => {
  try {
    const oldPrepareStackTrace = Error.prepareStackTrace

    Error.prepareStackTrace = (_, stack) => stack

    const { stack } = new Error()

    Error.prepareStackTrace = oldPrepareStackTrace

    if (stack !== null && typeof stack === 'object') {
      // stack[0] holds this file
      // stack[1] holds where this function was called
      // stack[2] holds the file we're interested in

      if (stack[2]) {
        let fn = stack[2].getFileName()
        fn = /[^/]*$/.exec(fn)[0]

        return chalk.green(`[ ${fn} ]`).toString()
      }

      return ''
    }
  } catch (error) {
    console.error(
      `(getCallerFile): Se produjo un error al realizar la operación (${error.stack})`
    )
    return ''
  }

  return undefined
}

module.exports = getCallerFile
