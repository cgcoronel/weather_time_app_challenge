// Dependencias
import React, { Fragment } from 'react'

// Utilidades
import { isFunction } from '../../Utils/Functions'

// Estilos
import './scss/styles.scss'

/**
 * Componente de modal de confirmación
 */
const Confirm = props => {
  const {
    // Datos del modal
    data = {},

    // Acciones
    actions = [],

    // Indica si el modal se mostrara.
    show = false,

    // Evento de cierre
    onClose = () => {},
  } = props

  // Alias de los datos
  const { title, body, isHtml = false } = data

  return (
    <Fragment>
      {show && (
        <div id="modal">
          <div className="container-screen-modal-confirm">
            {/* Cabecera del modal. */}
            <div id="main-bar">
              <label>{title}</label>

              <button type="button" className="close" aria-label="Close" onClick={event => onClose(event)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {/* Mensaje del modal. */}
            {!isHtml && <p className="textPlain">{body}</p>}
            {isHtml && this.props.children}

            <div id="footer-bar">
              {actions.map(({ className = '', callback = null, text = '' }) => (
                <button
                  key={className}
                  onClick={event => isFunction(callback) && callback(event)}
                  className={className}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Confirm
