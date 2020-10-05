import React from 'react'
import { Helmet } from 'react-helmet-async'

import ContactForm from '../Components/ContactForm'
import BodySection from '../Components/BodySection'
import AccreditedSitesSection from '../Components/AccreditedSitesSection'
import { accreditationSites } from '../DataObjects/socialMediaData'
import ContactPhoneLink from '../Components/ContactPhoneLink'

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
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | Contact Us</title>
        <meta name="description" content="Third Generation Construction Contact Us Page"/>
      </Helmet>
      <BodySection styleClasses='color-primary body-section--width-965' pageHeader='Contact Us'>
        <div className='contact-us__header-p'>
          <div>We are here to help you with whatever home repair needs you may have.</div>
          <div className='p--top-spacing' style={{ position: 'relative' }}>Third Generation Construction is available to
            our clients 24/7.
          </div>
          <div className='contact__phone-link-mobile'>Call us at:</div>
          <ContactPhoneLink className='contact__phone-link-mobile'/>
          <div className='contact__phone-link-desktop'>Call us at: <ContactPhoneLink/></div>
          <div>Or email us by filling out the contact form below, and we will get back to you within three business
            days.
          </div>
        </div>
        <ContactForm formStyleClasses={formStyles}/>
      </BodySection>
      <div
        className='padding-x-standard p--margin-bottom-standard body-section--width-965 color-primary align-text--center'>
        <p>
          Third Generation Construction is licensed, bonded, and insured. Our team prides itself on quality and is committed to guaranteeing outstanding results.
        </p>
      </div>
      <BodySection styleClasses='color-primary desktop--padding-top-0'>
        <AccreditedSitesSection
          containerStyleClasses='body-section--width-965 desktop--margin-bottom-0 desktop--margin-top-0'
          accreditationSites={accreditationSites}/>
      </BodySection>
    </>
  )
}
export default Contact
