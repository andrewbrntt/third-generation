import React, { useEffect, useState } from 'react'
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

const ContactForm = ({formStyleClasses}) => {

  const [fullName, setFullName] = useState(formFieldsData.fullName)
  const [email, setEmail] = useState(formFieldsData.email)
  const [phone, setPhone] = useState(formFieldsData.phone)
  const [services, setServices] = useState(formFieldsData.services)
  const [message, setMessage] = useState(formFieldsData.message)
  const [fieldsDataArray, setFieldsDataArray] = useState([email, fullName, phone, services, message])
  const [isModalOpen, setIsModalOpen] = useState(false)

  function updateFormData (formData, newValue) {
    let clone = Object.assign({}, formData)
    return Object.assign({}, clone, { value: newValue })
  }

  const addErrorProperties = (fieldData) => {
    switch (fieldData.name) {
      case 'full-name':
        let fullNameClone = { ...fieldData }
        fullNameClone.errorMessage = `${fullNameClone.value || ''} can only contain letters and spaces`
        fullNameClone.hasError = !validateFullName(fullNameClone.value)
        return fullNameClone
      case 'email':
        let emailClone = { ...fieldData }
        emailClone.errorMessage = `${emailClone.value || ''} must be formatted as name@domain.com`
        emailClone.hasError = !validateEmail(emailClone.value)
        return emailClone
      case 'phone':
        let phoneClone = { ...fieldData }
        phoneClone.errorMessage = `${phoneClone.value || ''} can only contain parentheses, numbers and dashes`
        phoneClone.hasError = !validatePhoneNumber(phoneClone.value)
        return phoneClone
      case 'services':
        let servicesClone = { ...fieldData }
        servicesClone.errorMessage = `You must select a type of service`
        servicesClone.hasError = !validateService(servicesClone.value)
        return servicesClone
      case 'message':
        let messageClone = { ...fieldData }
        messageClone.errorMessage = `Your message cannot contain HTML tags`
        messageClone.hasError = !validateMessage(messageClone.value)
        return messageClone
      default:
        return
    }
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

  const handleClose = () => {
    setIsModalOpen(!isModalOpen)
  }

  const validateForm = () => {
    const updatedFieldsDataArray = fieldsDataArray.map(fieldData => {
      const we = addErrorProperties(fieldData)
      return we
    })
    setFieldsDataArray(updatedFieldsDataArray)
  }

  useEffect(() => {
    // const handleChange = (e) => {
    //   e.preventDefault()
    //   e.stopPropagation()
    //
    //   let targetElement = e.target
    //
    //   switch (targetElement.id) {
    //     case fullName.id:
    //       setFullName(updateFormData(fullName, targetElement.value))
    //       break
    //     case phone.id:
    //       setPhone(updateFormData(phone, targetElement.value))
    //       break
    //     case email.id:
    //       setEmail(updateFormData(email, targetElement.value))
    //       break
    //     case services.id:
    //       setServices(updateFormData(services, targetElement.value))
    //       break
    //     case message.id:
    //       setMessage(updateFormData(message, targetElement.value))
    //       break
    //     default:
    //       return targetElement
    //   }
    // }
    // Object.keys(formFieldsData).forEach(fieldData => {
    //   let currentField = document.getElementById(formFieldsData[fieldData].id)
    //   currentField.addEventListener('change', handleChange)
    // })
    // return () => {
    //   Object.keys(formFieldsData).forEach(fieldData => {
    //     let currentField = document.getElementById(formFieldsData[fieldData].id)
    //     currentField.removeEventListener('change', handleChange)
    //   })
    // }
  }, [email.value, fullName.value, phone.value, services.value, message.value])

  useEffect(() => {
    const checkForSuccess = (fieldsDataArray) => {
      if (!(fieldsDataArray[0]).hasError &&
        !fieldsDataArray[1].hasError && !fieldsDataArray[2].hasError && !fieldsDataArray[3].hasError && !fieldsDataArray[4].hasError) {
        console.log('go to where ever')
        return false
      }
      console.log('Errors')
    }
    console.log('in effect', formFieldsData)
    checkForSuccess(fieldsDataArray)

  }, [fieldsDataArray[0].hasError, fieldsDataArray[1].hasError, fieldsDataArray[3].hasError, fieldsDataArray[4].hasError])

  return (
    <>
      <ContactFormModal
        handleClose={handleClose}
        handleSubmit={handleModalSubmit}
        isModalOpen={isModalOpen}
        formInputData={[fullName, email, phone, services, message]}
      />
      <FormErrorField errors={fieldsDataArray}/>
      <form id='contact-form' className={formStyleClasses} onSubmit={handleFormSubmit}>
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
