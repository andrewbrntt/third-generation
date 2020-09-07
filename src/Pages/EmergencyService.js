import React from 'react'
import BodySection from '../components/BodySection'
import AboutImage from '../assets/group-people.jpg'
import BeforeAfterGallerySection from '../components/BeforeAfterGallerySection'
import ReviewList from '../components/ReviewList'
import ReviewSitesSection from '../components/ReviewSitesSection'
import DecorativeImage from '../components/DecorativeImage'
import { beforeAfterMockData, reviewSites } from '../helpers/mockData'

const EmergencyService = () => {

  return (
    <>
      <BodySection linkRoute='/contact' styleClasses='color-primary' pageHeader='24-Hour Emergency Service' linkText='Contact Us'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <p>Life is full of curveballs and emergencies happen.</p>
        <p className='p--top-spacing'>Let Third Generation Construction help keep your home safe.</p>
        <p className='p--top-spacing'>We're available 24/7 and can help fix urgent needs as they happen.</p>
      </BodySection>
      <BodySection linkRoute='/our-work' styleClasses='color-white background-color-primary' sectionTitle='Our Work'
                   linkText='View Gallery'>
        <p>We're proud of our work and love showing it off.</p>
        <p className='p--top-spacing'>
          Let 3RD Generation Construction transform your current space into the home of your dreams.</p>
        <BeforeAfterGallerySection galleryImages={beforeAfterMockData}/>
      </BodySection>
      <BodySection linkRoute='/reviews' linkText='Reviews' styleClasses='color-primary'>
        <ReviewList randomCount='1'/>
      </BodySection>
      <BodySection styleClasses='color-primary'>
        <p>
          Third Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on the
          quality of work as well as our commitment to outstanding results.
        </p>
        <ReviewSitesSection reviewSites={reviewSites}/>
      </BodySection>
    </>
  )
}

export default EmergencyService
