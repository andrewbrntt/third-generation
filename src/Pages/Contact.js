import React from 'react'
import ContactForm from '../components/ContactForm'
import BodySection from '../components/BodySection'

const Contact = () => {
  return (
    <>
      <BodySection pageHeader='Contact Us' paddingXRem='1.25'>
        <ContactForm/>
      </BodySection>
    </>
  )
}

export default Contact
