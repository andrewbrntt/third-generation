import React from 'react'

const FormInput = ({ fieldElementData, handleOnChange }) => {
  return (
    <input
      id={fieldElementData.id}
      title={fieldElementData.labelText}
      className={`form-input-field__input ${fieldElementData.hasError ? 'form-input-field__error' : ''}`}
      type={fieldElementData.inputType}
      required={fieldElementData.isRequired}
      onChange={e => handleOnChange(fieldElementData, e.target)}
      value={fieldElementData.value ? fieldElementData.value : ''}
    />
  )
}

export default FormInput

//(567)-377-9909
