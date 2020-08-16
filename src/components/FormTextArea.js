import React from 'react'

const FormTextArea = ({ formId, fieldElementData, handleOnChange }) => {
  return (
    <textarea
      id={fieldElementData.id}
      title={fieldElementData.labelText}
      className='form-input-field__text-area'
      form={formId}
      name={fieldElementData.name}
      onChange={ e => handleOnChange(fieldElementData, e.target)}
    >{}</textarea>
  )
}

export default FormTextArea
