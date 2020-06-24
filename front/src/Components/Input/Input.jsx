// Dependencies
import React from 'react'

// Utilidades
import { isFunction } from '../../Utils/Functions'
import Translate from '../../Utils/Translate'

/**
 * Componente Input
 */
const Input = props => {
  // Propiedades
  const {
    type = 'text',
    field = {
      value: '',
    },
    placeholder = '',
    className = 'col-md-7',
    label = false,
    maxLength = '',

    // Eventos
    onKeyUp,
    onKeyDown,
    onFocus,
    onBlur,
  } = props

  /**
   * Evento de cambio de valores.
   */
  const onChangeValue = event => {
    try {
      const { onChange = () => {} } = props

      // Obtenemos el valor del input
      const { value = '' } = event.target

      // Informamos del cambio
      onChange(value)

      return false
    } catch (error) {
      return true
    }
  }

  return (
    <fieldset>
      {label && <label className="col-md-5">{Translate(label)}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={field.value}
        maxLength={maxLength}
        disabled={field.disabled}
        className={`form-control ${typeof className === 'string' && className}`}
        onChange={newValue => onChangeValue(newValue)}
        onKeyDown={e => isFunction(onKeyDown) && onKeyDown(e)}
        onKeyUp={e => isFunction(onKeyUp) && onKeyUp(e)}
        onFocus={e => isFunction(onFocus) && onFocus(e)}
        onBlur={e => isFunction(onBlur) && onBlur(e)}
      />
      {field.error && <small className="message-error-input">{Translate('REQUIRED_FIELD')}</small>}
      {field.matchPassword === false && (
        <small className="message-error-input">{Translate('NOT_MATCH_PASSWORD')}</small>
      )}
    </fieldset>
  )
}

export default Input
