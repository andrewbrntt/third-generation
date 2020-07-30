import React from 'react'

const FormSelect = ({fieldElementData}) => {
  return (
    <select
      id={fieldElementData.id}
      required={fieldElementData.isRequired}
      className='form-input-field__input'
    >
      {fieldElementData.options.map(option => {
        return <option key={option.value} value={option.value}>{option.text}</option>
      })}
    </select>
  )
}

export default FormSelect
