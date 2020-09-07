import React from 'react'
import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import ReviewList from '../components/ReviewList'
import ReviewSitesSection from '../components/ReviewSitesSection'
import { reviewSites } from '../helpers/mockData'

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
      <BodySection>
        <ReviewList randomCount='5'/>
      </BodySection>
      <BodySection styleClasses='color-primary'>
        <h2 className='default-text padding-x-standard reviews__review-list-title remove-margin-y'>Find More Reviews</h2>
        <ReviewSitesSection reviewSites={reviewSites}/>
      </BodySection>
    </>
  )
}

export default Reviews
