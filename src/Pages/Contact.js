import React from 'react'
import ContactForm from '../components/ContactForm'
import BodySection from '../components/BodySection'
import ReviewSitesSection from '../components/ReviewSitesSection'
import { reviewSites } from '../DataObjects/mockData'

const Contact = () => {

  const formStyles = {
    formClasses: 'padding-x-standard',
    fieldContainerClasses: '',
    labelElementClasses: '',
    labelTextClasses: 'color-primary',
    requiredTextClasses: 'color-red'
  }

  return (
    <>
      <BodySection styleClasses='color-primary body-section--width-965' pageHeader='Contact Us'>
        <ContactForm formStyleClasses={formStyles}/>
      </BodySection>
        <div className='padding-x-standard p--margin-bottom-standard body-section--width-965 color-primary align-text--center'>
          <p>
            Third Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on
            the
            quality of work as well as our commitment to outstanding results.
          </p>
        </div>
      <BodySection styleClasses='color-primary desktop--padding-top-0'>
        <ReviewSitesSection containerStyleClasses='body-section--width-965 desktop--margin-bottom-0 desktop--margin-top-0' reviewSites={reviewSites}/>
      </BodySection>
    </>
  )
}
export default Contact
