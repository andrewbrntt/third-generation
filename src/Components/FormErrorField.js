import React from 'react'
import shortId from 'shortid'

const FormErrorField = ({ formFieldsData }) => {

  const errorListItems = (errors) => {
    return errors.map(error => {
        return (<li key={shortId.generate()} className='form-error-field__li'>
          {error.errorMessage}
        </li>)

      }
    )
  }

  const HasError = () => {
    return (
      <div className='form-error-field__container padding-x-standard color-red' role='alert' aria-atomic='true'>
        <span className='form-error-field__text'>There was an error your submission:</span>
        <ul className='form-error-field__ul'>
          {errorListItems(formFieldsData)}
        </ul>
      </div>
    )
  }

  return formFieldsData.length > 0 ? <HasError/> : ''
}

export default FormErrorField
