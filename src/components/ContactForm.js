import React, { useEffect, useState } from 'react'
import FormInputField from './FormInputField'
import ThemedButton from './ThemedButton'
import ContactFormModal from './ContactFormModal'
import FormErrorField from './FormErrorField'
import { formFieldsData } from '../helpers/mockData'
import {
  validateEmail,
  validateFullName,
  validateMessage,
  validatePhoneNumber,
  validateService
} from '../helpers/formValidation'
import BodySection from './BodySection'

const ContactForm = ({ formStyleClasses }) => {

  const [fullName, setFullName] = useState(formFieldsData.fullName)
  const [email, setEmail] = useState(formFieldsData.email)
  const [phone, setPhone] = useState(formFieldsData.phone)
  const [services, setServices] = useState(formFieldsData.services)
  const [message, setMessage] = useState(formFieldsData.message)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [fieldsDataArray, setFieldsDataArray] = useState([])

  const handleReviewModalSubmit = (e) => {
    e.preventDefault()
    toggleModal()
    validateForm()
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    toggleModal()
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
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
      let updatedName = { ...fullName, hasError: true, errorMessage: 'Full Name: must only contain letters' }
      setFullName(updatedName)
      validationArray.push(updatedName)
    }

    if (!validateEmail(email.value)) {
      let updatedEmail = {
        ...email,
        hasError: true,
        errorMessage: `Email: ${email.value || ''} must be formatted as name@domain.com`
      }
      setEmail(updatedEmail)
      validationArray.push(updatedEmail)
    }

    if (!validatePhoneNumber(phone.value)) {
      let updatedPhone = {
        ...phone,
        hasError: true,
        errorMessage: `Phone Number: ${phone.value || ''} can only contain parentheses, numbers and dashes`
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

    setFieldsDataArray(validationArray)
  }

  useEffect(() => {
    if (isModalOpen) {
      const body = document.getElementsByTagName('body')[0]
      console.log(body)
      body.setAttribute('style', 'position: fixed;')
    } else {
      const body = document.getElementsByTagName('body')[0]
      body.setAttribute('style', 'position: initial;')

    }
  }, [isModalOpen])

  return (
    <>
      <ContactFormModal
        handleClose={toggleModal}
        handleSubmit={handleReviewModalSubmit}
        isModalOpen={isModalOpen}
        formInputData={[fullName, email, phone, services, message]}
      />
        {fieldsDataArray.length > 0 && <FormErrorField formFieldsData={fieldsDataArray}/>}
        <form id='contact-form' className={formStyleClasses} onSubmit={handleFormSubmit}>
          <FormInputField fieldData={fullName} handleStateChange={handleFormValueChange}/>
          <FormInputField fieldData={phone} handleStateChange={handleFormValueChange}/>
          <FormInputField fieldData={email} handleStateChange={handleFormValueChange}/>
          <FormInputField fieldData={services} handleStateChange={handleFormValueChange}/>
          <FormInputField fieldData={message} textArea formId='contact-form' handleStateChange={handleFormValueChange}/>
          <div className='contact-form__button--spacing'>
            <ThemedButton type='submit' text='Submit'/>
          </div>
        </form>
    </>
  )
}

export default ContactForm
