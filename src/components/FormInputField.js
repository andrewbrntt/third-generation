import React from 'react'
import FormSelect from './FormSelect'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'

const FormInputField = ({ ref, formId, fieldData, handleStateChange }) => {

  const getFieldElement = (fieldElementData) => {
    switch (fieldElementData.elementType) {
      case 'select':
        return <FormSelect fieldElementData={fieldData} handleOnChange={handleStateChange}/>
      case 'textarea':
        return <FormTextArea formId={formId} fieldElementData={fieldData} handleOnChange={handleStateChange}/>
      default:
        return <FormInput fieldElementData={fieldData} handleOnChange={handleStateChange}/>
    }
  }

  return (
    <div className='form-input-field__container'>
      {getFieldElement(fieldData)}
      <label htmlFor={fieldData.id} style={{ display: 'block' }}
             className='form-input-field__label action-text'>
        <span aria-hidden='true'
              style={{ display: 'block' }}>{fieldData.labelText}</span>
           {fieldData.isRequired && <span style={{ color: 'red', display: 'inline-block' }}>
          (Required)
        </span>}
      </label>
    </div>
  )
}

export default FormInputField
