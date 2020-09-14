import React from 'react'
import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import ReviewList from '../components/ReviewList'
import ReviewSitesSection from '../components/ReviewSitesSection'
import { reviewSites } from '../DataObjects/mockData'

const Reviews = () => {

  return (
    <>
      <BodyHeader linkRoute='/contact' pageHeader='Reviews' linkText='Contact Us'>
        <p>
          We are proud to be endorsed by Angie's List, Home Advisor, and the Better Business Bureau.
        </p>
        <p className='p--top-spacing'>
          However, those accreditation's pale in comparison to client feedback as we're committed to outstanding results
          and customer satisfaction.
        </p>
      </BodyHeader>
      <BodySection styleClasses='body-section__reviews-section--padding padding-x-standard color-primary'>
        <ReviewList randomCount='5'/>
      </BodySection>
      <BodySection styleClasses='color-primary desktop--padding-top-0' sectionTitle='Find More Reviews'>
        <ReviewSitesSection containerStyleClasses='body-section--width-965 desktop--margin-bottom-0' reviewSites={reviewSites}/>
      </BodySection>
    </>
  )
}

export default Reviews
