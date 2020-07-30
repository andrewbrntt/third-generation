import React from 'react'

const FormTextArea = ({ formId, fieldElementData }) => {
  return (
    <textarea
      id={fieldElementData.id}
      title={fieldElementData.labelText}
      className='form-input-field__text-area'
      form={formId}
      name={fieldElementData.name}
    >{}</textarea>
  )
}

export default FormTextArea
