import React from 'react'
import ContactForm from '../components/ContactForm'
import BodySection from '../components/BodySection'
import ReviewSitesSection from '../components/ReviewSitesSection'
import { reviewSites } from '../helpers/mockData'

const Test = () => {

  return (
    <BodySection styleClasses='padding-x-standard' pageHeader='Contact Us'>
      <ContactForm/>
      <p className='contact__p'>
        Third Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on the
        quality of work as well as our commitment to outstanding results.
      </p>
      <ReviewSitesSection reviewSites={reviewSites} />
    </BodySection>
  )
}
export default Test
