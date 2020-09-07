import React from 'react'
import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import LinkCard from '../components/LinkCard'
import ReviewSitesSection from '../components/ReviewSitesSection'
import ContactForm from '../components/ContactForm'
import BeforeAfterGallerySection from '../components/BeforeAfterGallerySection'
import ReviewList from '../components/ReviewList'
import DecorativeImage from '../components/DecorativeImage'
import { beforeAfterMockData, formFieldsData, reviewSites } from '../helpers/mockData.js'

import RemodelImage from '../assets/service-placeholder-man.jpg'
import RepairImage from '../assets/service-placeholder-man-2.jpg'
import RoofingImage from '../assets/service-placeholder-women.jpg'
import SidingImage from '../assets/service-placeholder-women-2.jpg'
import AboutImage from '../assets/group-people.jpg'

const Home = () => {

  return (
    <>
      <BodyHeader linkRoute='/contact' linkText='Contact Us' pageHeader='Transform Your House Into Your Dream Home'>
        <p>
          A home's exterior is made to beautiful through its siding, trim, and roofing.
        </p>
        <p className='p--top-spacing'>
          It's interior should frame your personal style.
        </p>
        <p className='p--top-spacing'>
          Let Third Generation Construction help you create the home of your dreams.
        </p>
      </BodyHeader>
      <BodySection styleClasses='color-primary' sectionTitle='Our Services'>
        <div className='default-text home__our-services-p-container--margin padding-x-standard'>
          <p>
            Whatever your home needs. Third Generation Construction can help.
          </p>
          <p className='p--top-spacing'>
            We offer quality home remodeling and roofing services from a team with more than 15 years of experience.
          </p>
        </div>
        <div className='home__service-cards--center'>
          <div className='home__service-cards-container'>
            <div className='home__service-cards-row'>
              <LinkCard urlPath='remodel' imgSrc={RemodelImage} cardTitle='Remodel'/>
              <LinkCard urlPath='roofing' imgSrc={RoofingImage} cardTitle='Roofing'/>
            </div>
            <div className='home__service-cards-row'>
              <LinkCard urlPath='siding' imgSrc={SidingImage} cardTitle='Siding'/>
              <LinkCard urlPath='repairs' imgSrc={RepairImage} cardTitle='Repairs'/>
            </div>
          </div>
        </div>
      </BodySection>
      <BodySection linkText='About Us' styleClasses='background-color-primary color-white' sectionTitle='About Us'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <div className='padding-x-standard'>
          <p>
            Third Generation Construction is proud to be a local, Lorain County company.
          </p>
          <p className='p--top-spacing'>
            We believe in using our skills to beautify the community we love and its surrounding areas.
          </p>
        </div>
      </BodySection>
      <BodySection linkText='View Gallery' styleClasses='color-primary' sectionTitle='Our Work'>
        <div className='body-section__p-container padding-x-standard'>
        <p>
          We offer a personal experience for each customer by ensuring every project is unique.
        </p>
        <p className='p--top-spacing'>
          Let Third Generation Construction transform your current space into the home of your dreams.
        </p>
        </div>
        <BeforeAfterGallerySection galleryImages={beforeAfterMockData}/>
      </BodySection>
      <BodySection styleClasses='padding-x-standard background-color-primary color-white' sectionTitle='Contact Us'>
        <ContactForm formStyleClasses='color-white' formFieldsData={formFieldsData}/>
      </BodySection>
      <BodySection linkText='Reviews' styleClasses='color-primary padding-x-standard' sectionTitle='Reviews'>
        <ReviewList randomCount='5'/>
      </BodySection>
      <ReviewSitesSection reviewSites={reviewSites}/>
    </>
  )
}

export default Home
