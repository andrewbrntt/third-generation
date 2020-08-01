import React from 'react'
import ContactForm from '../components/ContactForm'
import BodySection from '../components/BodySection'
import { formFieldsData } from '../helpers/mockData'

const Contact = () => {

  return (
    <BodySection pageHeader='Contact Us' paddingXRem='1.25'>
      <ContactForm formFieldsData={formFieldsData}/>
    </BodySection>
  )
}

export default Contact
