import React from 'react'

const FormInputField = ({ formId, fieldData, textArea }) => {

  return (
    <div className='form-input__container'>
      {textArea ?
        <textarea
          id={fieldData.id}
          title={fieldData.labelText}
          className='form-input-field__text-area'
          form={formId}
          name={fieldData.name}
        >
                    {}
                  </textarea> :
        <input
          id={fieldData.id}
          title={fieldData.labelText}
          className='form-input-field__input'
          type='text'
        />
      }
      <label htmlFor={fieldData.id} style={{ display: 'block' }}
             className='form-input-field__label action-text'>
        <span aria-hidden='true' style={{ display: 'block' }}>{fieldData.labelText}</span>
      </label>
    </div>
  )
}

export default FormInputField
