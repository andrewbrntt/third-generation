import React from 'react'
import FormSelect from './FormSelect'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'

const FormInputField = ({ formId, fieldData, handleStateChange, inputFieldStylesClasses }) => {

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
    <div
      className={`form-input-field__container ${inputFieldStylesClasses.fieldContainerClasses ? inputFieldStylesClasses.fieldContainerClasses : ''}`}>
      {getFieldElement(fieldData)}
      <label htmlFor={fieldData.id}
             className={`form-input-field__label action-text ${inputFieldStylesClasses.labelElementClasses ? inputFieldStylesClasses.labelElementClasses : ''}`}>
          <span aria-hidden='true'
                className={`${inputFieldStylesClasses.labelTextClasses ? inputFieldStylesClasses.labelTextClasses : ''}`}>
          {`${fieldData.labelText} ${fieldData.inputFormat ? fieldData.inputFormat : ''} `}
        </span>
        {fieldData.isRequired &&
        <span
          className={`form-input-field__required-tag ${inputFieldStylesClasses.requiredTextClasses ? inputFieldStylesClasses.requiredTextClasses : ''}`}>
          (Required)
        </span>}
      </label>
    </div>
  )
}

export default FormInputField
