import React, { useEffect, useState } from 'react'
import FormInputField from './FormInputField'
import ThemedButton from './ThemedButton'
import ContactFormReviewModal from './ContactFormReviewModal'
import FormErrorField from './FormErrorField'
import { formFieldsData } from '../DataObjects/mockData'
import {
  validateEmail,
  validateFullName,
  validateMessage,
  validatePhoneNumber,
  validateService
} from '../helpers/formValidation'
import ContactFormSuccessModal from './ContactFormSuccessModal'

const ContactForm = ({ formStyleClasses = {} }) => {

  const [fullName, setFullName] = useState(formFieldsData.fullName)
  const [email, setEmail] = useState(formFieldsData.email)
  const [phone, setPhone] = useState(formFieldsData.phone)
  const [services, setServices] = useState(formFieldsData.services)
  const [message, setMessage] = useState(formFieldsData.message)
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const [fieldErrors, setFieldErrors] = useState([])

  const handleReviewModalSubmit = (e) => {
    e.preventDefault()
    toggleReviewModal()
    let formErrors = validateForm()
    if(formErrors.length === 0) {
      toggleSuccessModal()
      clearState()
    } else {
      setFieldErrors(formErrors)
    }
  }

  const clearState = () => {
    setFullName({...fullName, value: ''})
    setPhone({...phone, value: ''})
    setEmail({...email, value: ''})
    setServices({...services, value: ''})
    setMessage({...message, value: ''})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    toggleReviewModal()
  }

  const toggleReviewModal = () => {
    setIsReviewModalOpen(!isReviewModalOpen)
  }

  const toggleSuccessModal = () => {
    setIsSuccessModalOpen(!isSuccessModalOpen)
  }

  const handleFormValueChange = (currentElementData, newValue) => {
    let newElementData = Object.assign({}, currentElementData, { value: newValue.value })

    switch (currentElementData.name) {
      case 'full-name':
        setFullName(newElementData)
        break
      case 'email':
        setEmail(newElementData)
        break
      case 'phone':
        setPhone(newElementData)
        break
      case 'message':
        setMessage(newElementData)
        break
      case 'services':
        setServices(newElementData)
        break
      default:
        break
    }
  }

  const validateForm = () => {
    let validationArray = []

    if (!validateFullName(fullName.value)) {
      let updatedName = { ...fullName, hasError: true, errorMessage: 'Full Name: must only contain letters and spaces' }
      setFullName(updatedName)
      validationArray.push(updatedName)
    }

    if (!validateEmail(email.value)) {
      let updatedEmail = {
        ...email,
        hasError: true,
        errorMessage: `Email: "${email.value}" must be formatted as name@domain.com`
      }
      setEmail(updatedEmail)
      validationArray.push(updatedEmail)
    }

    if (!validatePhoneNumber(phone.value)) {
      let updatedPhone = {
        ...phone,
        hasError: true,
        errorMessage: `Phone Number: "${phone.value}" can only contain parentheses, numbers and dashes`
      }
      setPhone(updatedPhone)
      validationArray.push(updatedPhone)
    }

    if (!validateService(services.value)) {
      let updatedService = { ...services, hasError: true, errorMessage: 'You must select a type of service' }
      setServices(updatedService)
      validationArray.push(updatedService)
    }

    if (!validateMessage(message.value)) {
      let updatedMessage = { ...message, hasError: true, errorMessage: 'Your message cannot contain HTML tags' }
      setMessage(updatedMessage)
      validationArray.push(updatedMessage)
    }

    return validationArray
  }

  useEffect(() => {
    if (isReviewModalOpen || isSuccessModalOpen) {
      const body = document.getElementsByTagName('body')[0]
      body.setAttribute('style', 'position: fixed;')
    } else {
      const body = document.getElementsByTagName('body')[0]
      body.setAttribute('style', 'position: initial;')
    }
  }, [isReviewModalOpen, isSuccessModalOpen])

  return (
    <>
      <ContactFormReviewModal
        handleClose={toggleReviewModal}
        handleSubmit={handleReviewModalSubmit}
        isModalOpen={isReviewModalOpen}
        formInputData={[fullName, email, phone, services, message]}
      />
      <ContactFormSuccessModal handleClose={toggleSuccessModal} isSuccessModalOpen={isSuccessModalOpen} />
        {fieldErrors.length > 0 && <FormErrorField formFieldsData={fieldErrors}/>}
        <form id='contact-form' className={`contact-form ${formStyleClasses.formClasses}`} onSubmit={handleFormSubmit}>
          <FormInputField inputFieldStylesClasses={formStyleClasses} fieldData={fullName} handleStateChange={handleFormValueChange}/>
          <FormInputField inputFieldStylesClasses={formStyleClasses} fieldData={phone} handleStateChange={handleFormValueChange}/>
          <FormInputField inputFieldStylesClasses={formStyleClasses} fieldData={email} handleStateChange={handleFormValueChange}/>
          <FormInputField inputFieldStylesClasses={formStyleClasses} fieldData={services} handleStateChange={handleFormValueChange}/>
          <FormInputField inputFieldStylesClasses={formStyleClasses} fieldData={message} textArea formId='contact-form' handleStateChange={handleFormValueChange}/>
          <div className='contact-form__button-container contact-form__button--spacing'>
            <ThemedButton type='submit' text='Submit'/>
          </div>
        </form>
    </>
  )
}

export default ContactForm
