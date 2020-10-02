import React from 'react'
import { Helmet } from 'react-helmet-async'
import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import ReviewList from '../components/ReviewList'
import { allReviews } from '../DataObjects/reviewsData'
import ReviewSitesSection from '../components/ReviewSitesSection'

const Reviews = () => {

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | Reviews</title>
        <meta name="description" content="Third Generation Construction Reviews Page"/>
      </Helmet>
      <BodyHeader linkRoute='/contact' pageHeader='Reviews' linkText='Contact Us' heroImageName='reviews'>
        <p>
          We are proud to be endorsed by Angie's List, Home Advisor, and the Better Business Bureau.
        </p>
        <p className='p--top-spacing'>
          However, those accreditation's pale in comparison to client feedback as we're committed to outstanding results
          and customer satisfaction.
        </p>
      </BodyHeader>
      <BodySection styleClasses='body-section__reviews-section--padding padding-x-standard color-primary'>
        <ReviewList reviewsList={allReviews}/>
      </BodySection>
      <BodySection styleClasses='color-primary desktop--padding-top-0 body-section--width-965'
                   sectionTitle='Find More Reviews'>
        <ReviewSitesSection/>
      </BodySection>
    </>
  )
}

export default Reviews
