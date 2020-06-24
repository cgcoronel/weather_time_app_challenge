// Dependencies
import React from 'react'

// Utilidades
import { isFunction } from '../../Utils/Functions'
import Translate from '../../Utils/Translate'

/**
 * Componente Input
 */
const InputForm = props => {
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
    name,

    // Eventos
    onChange = () => {},
    onKeyUp = () => {},
  } = props

  return (
    <fieldset>
      {label && <label className="col-md-5">{Translate(label)}</label>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={field.value}
        maxLength={maxLength}
        disabled={field.disabled}
        className={`form-control ${typeof className === 'string' && className}`}
        onChange={e => onChange(e)}
        onKeyUp={e => onKeyUp(e)}
      />
      {field.error && <small className="message-error-input">{Translate('REQUIRED_FIELD')}</small>}
      {field.matchPassword === false && (
        <small className="message-error-input">{Translate('NOT_MATCH_PASSWORD')}</small>
      )}
    </fieldset>
  )
}

export default InputForm
