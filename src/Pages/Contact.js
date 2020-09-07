import React from 'react'
import ContactForm from '../components/ContactForm'
import BodySection from '../components/BodySection'
import ReviewSitesSection from '../components/ReviewSitesSection'
import { reviewSites } from '../helpers/mockData'

const Contact = () => {

  const formStyles = {
    formClasses: '',
    fieldContainerClasses: '',
    labelElementClasses: '',
    labelTextClasses:'color-primary',
    requiredTextClasses: 'color-red'
  }

  return (
    <BodySection styleClasses='padding-x-standard' pageHeader='Contact Us'>
      <ContactForm formStyleClasses={formStyles}/>
      <p className='contact__p'>
        Third Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on the
        quality of work as well as our commitment to outstanding results.
      </p>
      <ReviewSitesSection reviewSites={reviewSites} />
    </BodySection>
  )
}
export default Contact
