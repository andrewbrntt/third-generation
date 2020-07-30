import React from 'react'

const FormInput = ({ fieldElementData }) => {
  return (
    <input
      id={fieldElementData.id}
      title={fieldElementData.labelText}
      className='form-input-field__input'
      type={fieldElementData.inputType}
      required={fieldElementData.isRequired}
    />
  )
}

export default FormInput
