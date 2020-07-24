import React from 'react'
import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import ReviewList from '../components/ReviewList'
import ReviewSitesSection from '../components/ReviewSitesSection'
import AngiesList from '../assets/angies-list-seal.png'
import HomeAdvisor from '../assets/home-advisor-seal.png'
import BBB from '../assets/bbb-seal.svg'

const Reviews = () => {

  const reviewSites = [
    { img: AngiesList, id: 'AL', altText: 'Angie\\\'s List Certified seal' },
    { img: HomeAdvisor, id: 'HA', altText: 'Home Advisor Approved Seal' },
    { img: BBB, id: 'bbb', altText: 'Better Business Bureau Accredited Seal' }
  ]

  return (
    <>
      <BodyHeader pageHeader='Reviews' buttonText='Contact Us'>
        <p>
          We are proud to be endorsed by Angie's List, Home Advisor, and the Better Business Bureau.
        </p>
        <p className='p--top-spacing'>
          However, those accreditation's pale in comparison to client feedback as we're committed to outstanding results
          and customer satisfaction.
        </p>
      </BodyHeader>
      <BodySection paddingXRem='0.5'>
        <ReviewList randomCount='5'/>
      </BodySection>
      <BodySection styleClasses='color-primary'>
        <h2 className='default-text padding-x-8 reviews__review-list-title remove-margin-y'>Find More Reviews</h2>
        <ReviewSitesSection reviewSites={reviewSites} />
      </BodySection>
    </>
  )
}

export default Reviews
