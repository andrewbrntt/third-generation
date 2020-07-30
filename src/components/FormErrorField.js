import React, {forwardRef} from 'react'
import shortId from 'shortid'

const FormErrorField = ({ errors }) => {

  const errorListItems = (errors) => {
    return errors.map(error => {
        return (
          <li key={shortId.generate()} className='form-error-field__li'>
            {error.message}
          </li>
        )
      }
    )
  }

  return (
    <div className='form-error-field__container color-primary'>
      <span className='form-error-field__text'>There was an error your submission:</span>
      <ul className='form-error-field__ul'>
        {errorListItems(errors)}
      </ul>
    </div>
  )
}

export default FormErrorField
