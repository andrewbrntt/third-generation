import React from 'react'
import FormInputField from './FormInputField'
import ThemeButton from './ThemeButton'

const ContactForm = () => {

  const fullName = {
    id: 'full-name',
    name: 'full-name',
    labelText: 'Full Name'
  }

  const email = {
    id: 'email',
    name: 'email',
    labelText: 'Email (email@domain.com)'
  }

  const phone = {
    id: 'phone',
    name: 'phone',
    labelText: 'Phone (XXX-XXX-XXXX)'
  }

  const message = {
    id: 'message',
    name: 'message',
    labelText: 'Message'
  }

  return (

    <>
      <form id='contact-form'>
        <FormInputField fieldData={fullName}/>
        <FormInputField fieldData={phone}/>
        <FormInputField fieldData={email}/>
        <FormInputField textArea formId='contact-form' fieldData={message}/>
        <div className='contact-form__button--spacing'>
        <ThemeButton text='Submit'/>
        </div>
      </form>
    </>
  )
}

export default ContactForm
