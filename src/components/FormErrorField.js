import React, {forwardRef} from 'react'
import shortId from 'shortid'

const FormErrorField = ({ formFieldsData }) => {

  const errorListItems = (errors) => {
    console.log('error list', errors)
    // return errors.map(error => {
    //     return error.hasError && (
    //       <li key={shortId.generate()} className='form-error-field__li'>
    //         {error.message}
    //       </li>
    //     )
    //   }
    // )
  }

  return (
    <div className='form-error-field__container color-primary'>
      <span className='form-error-field__text'>There was an error your submission:</span>
      Poop
      <ul className='form-error-field__ul'>
        {errorListItems(formFieldsData)}
      </ul>
    </div>
  )
}

export default FormErrorField
