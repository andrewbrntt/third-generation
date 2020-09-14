import React from 'react'
import ContactForm from '../components/ContactForm'
import BodySection from '../components/BodySection'
import ReviewSitesSection from '../components/ReviewSitesSection'
import { reviewSites } from '../helpers/mockData'

const Contact = () => {

  const formStyles = {
    formClasses: 'padding-x-standard',
    fieldContainerClasses: '',
    labelElementClasses: '',
    labelTextClasses: 'color-primary',
    requiredTextClasses: 'color-red'
  }

  return (
    <BodySection styleClasses='color-primary body-section--width-965' pageHeader='Contact Us'>
      <ContactForm formStyleClasses={formStyles}/>
      <div className='padding-x-standard p--margin-bottom-standard body-section--width-965'>
        <p>
          Third Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on the
          quality of work as well as our commitment to outstanding results.
        </p>
      </div>
      <ReviewSitesSection reviewSites={reviewSites}/>
    </BodySection>
  )
}
export default Contact
