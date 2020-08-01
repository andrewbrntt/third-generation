import React from 'react'
import FormSelect from './FormSelect'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'

const FormInputField = ({ formId, fieldData }) => {

  const getFieldElement = (fieldElementData) => {
    switch (fieldElementData.elementType) {
      case 'select':
        return <FormSelect fieldElementData={fieldData}/>
      case 'textarea':
        return <FormTextArea formId={formId} fieldElementData={fieldData}/>
      default:
        return <FormInput fieldElementData={fieldData}/>
    }
  }

  return (
    <div className='form-input__container'>
      {getFieldElement(fieldData)}
      <label htmlFor={fieldData.id} style={{ display: 'block' }}
             className='form-input-field__label action-text'>
        <span aria-hidden='true'
              style={{ display: 'block' }}>{`${fieldData.labelText} ${fieldData.isRequired ? '(Required)' : ''}`}</span>
      </label>
    </div>
  )
}

export default FormInputField
