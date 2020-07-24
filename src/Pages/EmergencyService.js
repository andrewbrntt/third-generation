import React from 'react'
import BodySection from '../components/BodySection'
import AboutImage from '../assets/group-people.jpg'
import BeforeAfterGallerySection from '../components/BeforeAfterGallerySection'
import BeforeImage from '../assets/after-temp.jpg'
import AfterImage from '../assets/before-temp.jpg'
import ReviewList from '../components/ReviewList'
import ReviewSitesSection from '../components/ReviewSitesSection'
import AngiesList from '../assets/angies-list-seal.png'
import HomeAdvisor from '../assets/home-advisor-seal.png'
import BBB from '../assets/bbb-seal.svg'

const EmergencyService = () => {

  const beforeAfterImages = [
    { beforeImage: BeforeImage, afterImage: AfterImage }
  ]

  const reviewSites = [
    { img: AngiesList, id: 'AL', altText: 'Angie\\\'s List Certified seal' },
    { img: HomeAdvisor, id: 'HA', altText: 'Home Advisor Approved Seal' },
    { img: BBB, id: 'bbb', altText: 'Better Business Bureau Accredited Seal' }
  ]

  return (
    <>
      <BodySection styleClasses='color-primary' pageHeader='24-Hour Emergency Service' buttonText='Contact Us'>
        <img className='remodel__hero--img' src={AboutImage}/>
        <p>Life is full of curveballs and emergencies happen.</p>
        <p className='p--top-spacing'>Let Third Generation Construction help keep your home safe.</p>
        <p className='p--top-spacing'>We're available 24/7 and can help fix urgent needs as they happen.</p>
      </BodySection>
      <BodySection styleClasses='color-white background-color-primary' sectionTitle='Our Work'
                   buttonText='View Gallery'>
        <p>We're proud of our work and love showing it off.</p>
        <p className='p--top-spacing'>
          Let 3RD Generation Construction transform your current space into the home of your dreams.</p>
        <BeforeAfterGallerySection galleryImages={beforeAfterImages}/>
      </BodySection>
      <BodySection buttonText='Reviews' styleClasses='color-primary' paddingXRem='0.5'>
        <ReviewList randomCount='1'/>
      </BodySection>
      <BodySection styleClasses='color-primary' paddingXRem='0.5'>
        <p>
          Third Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on the
          quality of work as well as our commitment to outstanding results.
        </p>
        <ReviewSitesSection reviewSites={reviewSites} />
      </BodySection>
    </>
  )
}

export default EmergencyService
