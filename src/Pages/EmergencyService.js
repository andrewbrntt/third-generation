import React from 'react'
import BodySection from '../components/BodySection'
import AboutImage from '../assets/group-people.jpg'
import ReviewList from '../components/ReviewList'
import ReviewSitesSection from '../components/ReviewSitesSection'
import DecorativeImage from '../components/DecorativeImage'
import { mockGallerySections, reviewSites } from '../DataObjects/mockData'
import ImageGallery from '../components/ImageGallery'

const EmergencyService = () => {

  return (
    <>
      <BodySection linkRoute='/contact' styleClasses='color-primary' pageHeader='24-Hour Emergency Service'
                   linkText='Contact Us'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <div className='padding-x-standard desktop__p--margin-bottom-80'>
          <p>Life is full of curveballs and emergencies happen.</p>
          <p className='p--top-spacing'>Let Third Generation Construction help keep your home safe.</p>
          <p className='p--top-spacing'>We're available 24/7 and can help fix urgent needs as they happen.</p>
        </div>
      </BodySection>
      <BodySection linkRoute='/our-work' styleClasses='color-white background-color-primary body-section--width-full' sectionTitle='Our Work'
                   linkText='View Gallery'>
        <div className='padding-x-standard'>
          <p>We're proud of our work and love showing it off.</p>
          <p className='p--top-spacing desktop__p--margin-bottom-80'>
            Let 3RD Generation Construction transform your current space into the home of your dreams.</p>
          {/*<BeforeAfterGallerySection galleryImages={beforeAfterMockData}/>*/}
          <ImageGallery gallerySections={mockGallerySections} />
        </div>
      </BodySection>
      <BodySection linkRoute='/reviews' linkText='Reviews' sectionTitle='Reviews'
                   styleClasses='body-section__reviews-section--padding padding-x-standard color-primary'>
        <div className='desktop__p--margin-bottom-80'>
        <ReviewList randomCount='1'/>
        </div>
      </BodySection>
      <BodySection styleClasses='desktop--padding-top-0 mobile--padding-top-0'>
        <p className='padding-x-standard align-text--center color-primary body-section--width-965 desktop__p--margin-bottom-80 desktop--margin-top-0'>
          Third Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on the
          quality of work as well as our commitment to outstanding results.
        </p>
        <ReviewSitesSection containerStyleClasses='body-section--width-965 desktop--margin-bottom-0' reviewSites={reviewSites}/>
      </BodySection>
    </>
  )
}

export default EmergencyService
