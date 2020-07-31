import React, { useEffect, useState } from 'react'
import useContactForm from '../helpers/useContactForm'
import ContactForm from '../components/ContactForm'
import BodySection from '../components/BodySection'
import FormErrorField from '../components/FormErrorField'
import {formFieldsData} from '../helpers/mockData'
import Modal from '../components/Modal'

const Contact = () => {



  return (
    <BodySection pageHeader='Contact Us' paddingXRem='1.25'>
      <ContactForm formFieldsData={formFieldsData}/>
    </BodySection>
  )
}

export default Contact
