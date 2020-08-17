import React from 'react'

const FormTextArea = ({ formId, fieldElementData, handleOnChange }) => {
  return (
    <textarea
      id={fieldElementData.id}
      title={fieldElementData.labelText}
      className={`form-input-field__text-area ${fieldElementData.hasError ? 'form-input-field__error' : ''}`}
      form={formId}
      name={fieldElementData.name}
      onChange={ e => handleOnChange(fieldElementData, e.target)}
      value={fieldElementData.value ? fieldElementData.value : ''}
    >{}</textarea>
  )
}
export default FormTextArea
