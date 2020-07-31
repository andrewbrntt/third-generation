import React, { useCallback, useEffect, useState } from 'react'
import FormInputField from './FormInputField'
import ThemedButton from './ThemedButton'
import { formFieldsData } from '../helpers/mockData'
import {
  validateEmail,
  validateFullName,
  validateMessage,
  validatePhoneNumber,
  validateService
} from '../helpers/formValidation'
import ContactFormModal from './ContactFormModal'
import FormErrorField from './FormErrorField'

const tempErrors = [
  { message: 'Name wrong' },
  { message: 'Phone Number wrong' },
  { message: 'Email wrong' },
  { message: 'Type of service wrong' },
  { message: 'Type of service wrong' }
]

const ContactForm = () => {

  const [fullName, setFullName] = useState(formFieldsData.fullName)
  const [email, setEmail] = useState(formFieldsData.email)
  const [phone, setPhone] = useState(formFieldsData.phone)
  const [services, setServices] = useState(formFieldsData.services)
  const [message, setMessage] = useState(formFieldsData.message)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [isErrorFieldOpen, setIsErrorFieldOpen] = useState(false)

  function updateFormData (formData, newValue) {
    let clone = Object.assign({}, formData)
    return Object.assign({}, clone, { value: newValue })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setIsModalOpen(!isModalOpen)
  }

  const handleModalSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    validateForm()
  }

  const addErrorProperties = (fieldData) => {
    switch (fieldData.name) {
      case 'full-name':
        let fullNameClone = { ...fieldData }
        let fullNameErrorMessage = `${fullNameClone.value || ''} can only contain letters and spaces`
        let fullName = Object.assign({}, { errorMessage: fullNameErrorMessage }, { isError: validateFullName(fullNameClone.value) }, { ...fullNameClone })
        setFullName(fullName)
        break
      case 'email':
        let emailClone = { ...fieldData }
        let emailErrorMessage = `${emailClone.value || ''} must be formatted as name@domain.com`
        let email = Object.assign({}, { errorMessage: emailErrorMessage }, { isError: validateEmail(emailClone.value) }, { ...emailClone })
        setEmail(email)
        break
      case 'phone':
        let phoneClone = { ...fieldData }
        let phoneErrorMessage = `${phoneClone.value || ''} can only contain parentheses, numbers and dashes`
        let phone = Object.assign({}, { phoneErrorMessage: phoneErrorMessage }, { isError: validatePhoneNumber(phoneClone.value) }, { ...phoneClone })
        setPhone(phone)
        break
      case 'services':
        let servicesClone = { ...fieldData }
        let servicesErrorMessage = `You must select a type of service`
        let services = Object.assign({}, { servicesErrorMessage: servicesErrorMessage }, { isError: validateService(servicesClone.value) }, { ...servicesClone })
        setServices(services)
        break
      case 'message':
        let messageClone = { ...fieldData }
        let messageErrorMessage = `Your message cannot contain HTML tags`
        let message = Object.assign({ messageErrorMessage: messageErrorMessage }, { isError: validateMessage(messageClone.value) }, { ...messageClone })
        setMessage(message)
        break
      default:
        return
    }
  }

  const handleClose = () => {
    setIsModalOpen(!isModalOpen)
  }

  const validateForm = () => {
    const fieldsDataArray = [email, fullName, phone, services, message]
    fieldsDataArray.map(fieldData => {
      addErrorProperties(fieldData)
    })

    checkForSuccess()
  }

  const checkForSuccess = useCallback(() => {
    if (!fullName.isError &&
      !email.isError &&
      !phone.isError &&
      !services.isError &&
      !message.isError) {
      console.log('go to where ever')
    } else {

    }
  }, [message.isError])
  const hasErrors = () => {
    return fullName.isError || email.isError || phone.isError || services.isError || message.isError
  }

  useEffect(() => {
    const handleChange = (e) => {
      e.preventDefault()
      e.stopPropagation()

      let targetElement = e.target

      switch (targetElement.id) {
        case fullName.id:
          setFullName(updateFormData(fullName, targetElement.value))
          break
        case phone.id:
          setPhone(updateFormData(phone, targetElement.value))
          break
        case email.id:
          setEmail(updateFormData(email, targetElement.value))
          break
        case services.id:
          setServices(updateFormData(services, targetElement.value))
          break
        case message.id:
          setMessage(updateFormData(message, targetElement.value))
          break
        default:
          return targetElement
      }
    }
    Object.keys(formFieldsData).forEach(fieldData => {
      let currentField = document.getElementById(formFieldsData[fieldData].id)
      currentField.addEventListener('change', handleChange)
    })
    return () => {
      Object.keys(formFieldsData).forEach(fieldData => {
        let currentField = document.getElementById(formFieldsData[fieldData].id)
        currentField.removeEventListener('change', handleChange)
      })
    }
  },)

  return (
    <>
      <ContactFormModal
        handleClose={handleClose}
        handleSubmit={handleModalSubmit}
        isModalOpen={isModalOpen}
        formInputData={[fullName, email, phone, services, message]}
      />
      {hasErrors() && <FormErrorField errors={[fullName, email, phone, services, message]}/>}
      <form id='contact-form' onSubmit={handleFormSubmit}>
        <FormInputField fieldData={fullName}/>
        <FormInputField fieldData={phone}/>
        <FormInputField fieldData={email}/>
        <FormInputField fieldData={services}/>
        <FormInputField fieldData={message} textArea formId='contact-form'/>
        <div className='contact-form__button--spacing'>
          <ThemedButton type='submit' text='Submit'/>
        </div>
      </form>
    </>
  )
}

export default ContactForm
