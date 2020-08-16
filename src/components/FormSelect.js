import React from 'react'

const FormSelect = ({ fieldElementData, handleOnChange }) => {
  return (
    <select
      id={fieldElementData.id}
      required={fieldElementData.isRequired}
      className='form-input-field__input'
      onChange={e => handleOnChange(fieldElementData, e.target)}
    >
      <option value=''>Select Service</option>
      {fieldElementData.options.map(option => {
        return <option key={option.value} value={option.value}>{option.text}</option>
      })}
    </select>
  )
}

export default FormSelect
