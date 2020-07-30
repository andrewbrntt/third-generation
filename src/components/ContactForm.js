import React, { useEffect, useState } from 'react'
import FormInputField from './FormInputField'
import ThemedButton from './ThemedButton'
import { formFieldsData } from '../helpers/mockData'
import Modal from './Modal'
import BodySection from './BodySection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalCard from './ModalCard'
import { validateEmail } from '../helpers/formValidation'

const ContactForm = () => {

  const [fullName, setFullName] = useState(formFieldsData.fullName)
  const [phone, setPhone] = useState(formFieldsData.phone)
  const [email, setEmail] = useState(formFieldsData.email)
  const [services, setServices] = useState(formFieldsData.services)
  const [message, setMessage] = useState(formFieldsData.message)


  const newEmailObject = (previousEmail, newValue) => {
    const emailCopy = { ...previousEmail }

    if (emailCopy.value) {
      emailCopy.value = emailCopy.value + newValue
    } else {
      emailCopy.value = newValue
    }

    emailCopy.value = emailCopy.value ? emailCopy.value + newValue : ''

    console.log(emailCopy)
    setEmail(emailCopy)
  }

  function updateFormData (formData, newValue) {
    let clone = Object.assign({}, formData)
    return Object.assign({}, clone, { value: newValue })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    validateEmail(email)
    console.log('form submit', `fullName.value ${fullName.value}`, `phone.value ${phone.value}`, `email.value ${email.value}`, `services.value ${services.value}`, `message.value ${message.value}`)
  }

  const createFormValuesList = () => {

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
  }, [email.value, fullName.value, phone.value, services.value, message.value])

  return (
    <>
      <Modal styleClasses='contact-form__modal color-primary'>
        <div className='padding-x-8 contact-form__modal-close-btn-container'>
          <button className='contact-form__modal-close-btn'>
            <FontAwesomeIcon className='contact-form__times-icon' icon={['fa', 'times']}/>
          </button>
        </div>
        <BodySection paddingXRem='0.5' sectionTitle='Verify Info'>
          <span className='default-text'>Please ensure the information is correct before submitting</span>
          <ul className='contact-form__ul'>
            {[fullName, email, phone, services, message].map(element => {
              return (
                <li className='contact-form__modal-card-container'>
                  <ModalCard inputName={element.labelText} inputValue={element.value} />
                </li>
              )
            })}
          </ul>
          <section className='contact-form__bottom-section'>
            <button className='contact-form__btn action-text'>Edit</button>
            <button className='contact-form__btn action-text'>Submit</button>
          </section>
          {/*<div className='contact-form__modal-card-container'>*/}
          {/*  <ModalCard inputName={}/>*/}
          {/*</div>*/}
          {/*<div className='contact-form__modal-card-container'>*/}
          {/*  <ModalCard/>*/}
          {/*</div>*/}
          {/*<div className='contact-form__modal-card-container'>*/}
          {/*  <ModalCard/>*/}
          {/*</div>*/}
          {/*<div className='contact-form__modal-card-container'>*/}
          {/*  <ModalCard/>*/}
          {/*</div>*/}
        </BodySection>
      </Modal>
      <form id='contact-form' onSubmit={handleSubmit}>
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
