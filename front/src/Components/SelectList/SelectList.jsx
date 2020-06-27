// Dependencias
import React from 'react'

/**
 * Select List
 */
const SelectList = ({ options = [], handleChange = () => {}, selected }) => (
  <select class="browser-default custom-select" onChange={handleChange} value={selected}>
    {options.map(option => (
      <option value={option.value}>{option.description}</option>
    ))}
  </select>
)

export default SelectList
