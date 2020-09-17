import React from 'react'
import {Helmet} from 'react-helmet-async'

import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import LinkCard from '../components/LinkCard'
import ReviewSitesSection from '../components/ReviewSitesSection'
import ContactForm from '../components/ContactForm'
import ReviewList from '../components/ReviewList'
import DecorativeImage from '../components/DecorativeImage'
import {mockGalleryImageObjects1 } from '../DataObjects/mockData.js'
import {formFieldsData} from '../DataObjects/contactFormData'
import {reviewSites} from '../DataObjects/socialMediaData'
import {routesData} from '../DataObjects/routes'

import RemodelImage from '../assets/service-placeholder-man.jpg'
import RepairImage from '../assets/service-placeholder-man-2.jpg'
import RoofingImage from '../assets/service-placeholder-women.jpg'
import SidingImage from '../assets/service-placeholder-women-2.jpg'
import AboutImage from '../assets/group-people.jpg'
import ImageGallerySection from '../components/ImageGallerySection'

const Home = () => {

  const formStyles = {
    formClasses: '',
    fieldContainerClasses: '',
    labelElementClasses: '',
    labelTextClasses: 'color-white',
    requiredTextClasses: 'color-white'
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>3rd Generation Construction | Home</title>
        <meta name="description" content="Third Generation Construction Home Page" />
      </Helmet>
      <BodyHeader linkRoute={routesData.contactUs.routeTo} linkText={routesData.contactUs.routeName} pageHeader='Transform Your House Into Your Dream Home'>
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
      <BodySection styleClasses='color-primary section-container--1200' sectionTitle='Our Services'>
        <div
          className='home__our-services-p-container--mobile padding-x-standard p--margin-bottom-standard'>
          <p>
            Whatever your home needs. Third Generation Construction can help.
          </p>
          <p className='p--top-spacing'>
            We offer quality home remodeling and roofing services from a team with more than 15 years of experience.
          </p>
        </div>
        <div className='home__service-cards--center'>
          <div className='home__service-cards-mobile-container'>
            <div className='home__service-cards-row home__service-cards--margin-bottom'>
              <LinkCard urlPath='remodel' imgSrc={RemodelImage} cardTitle='Remodel'/>
              <LinkCard urlPath='roofing' imgSrc={RoofingImage} cardTitle='Roofing'/>
            </div>
            <div className='home__service-cards-row'>
              <LinkCard urlPath='siding' imgSrc={SidingImage} cardTitle='Siding'/>
              <LinkCard urlPath='repairs' imgSrc={RepairImage} cardTitle='Repairs'/>
            </div>
          </div>
          <div className='home__service-cards-desktop-container'>
            <LinkCard urlPath='remodel' imgSrc={RemodelImage} cardTitle='Remodel'/>
            <LinkCard urlPath='roofing' imgSrc={RoofingImage} cardTitle='Roofing'/>
            <LinkCard urlPath='siding' imgSrc={SidingImage} cardTitle='Siding'/>
            <LinkCard urlPath='repairs' imgSrc={RepairImage} cardTitle='Repairs'/>
          </div>
        </div>
        <div
          className='home__our-services-p-container--desktop p--margin-bottom-standard padding-x-standard'>
          <p>
            Whatever your home needs. Third Generation Construction can help.
          </p>
          <p className='p--top-spacing'>
            We offer quality home remodeling and roofing services from a team with more than 15 years of experience.
          </p>
        </div>
      </BodySection>
      <BodySection linkRoute='/about' linkText='About Us'
                   styleClasses='background-color-primary color-white about-us__body-section' sectionTitle='About Us'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <div className='p--margin-bottom-standard padding-x-standard'>
          <p>
            Third Generation Construction is proud to be a local, Lorain County company.
          </p>
          <p className='p--top-spacing'>
            We believe in using our skills to beautify the community we love and its surrounding areas.
          </p>
        </div>
      </BodySection>
      <BodySection linkRoute='our-work' linkText='View Gallery' styleClasses='body-section--width-965 color-primary'
                   sectionTitle='Our Work'>
        <div
          className='p--margin-bottom-standard body-section__p-container home__our-work-p-container padding-x-standard'>
          <p>
            We offer a personal experience for each customer by ensuring every project is unique.
          </p>
          <p className='p--top-spacing'>
            Let Third Generation Construction transform your current space into the home of your dreams.
          </p>
        </div>
        <ImageGallerySection title='Booty Sweat' images={mockGalleryImageObjects1}/>
        {/*<BeforeAfterGallerySection galleryImages={beforeAfterMockData}/>*/}
      </BodySection>
      <BodySection styleClasses='home__contact-us-section padding-x-standard background-color-primary color-white'
                   sectionTitle='Contact Us'>
        <ContactForm formStyleClasses={formStyles} formFieldsData={formFieldsData}/>
      </BodySection>
      <BodySection linkRoute='/reviews' linkText='Reviews'
                   styleClasses='body-section__reviews-section--padding color-primary padding-x-standard'
                   sectionTitle='Reviews'>
        <div className='p--margin-bottom-standard'>
        <ReviewList randomCount='5'/>
        </div>
      </BodySection>
        <ReviewSitesSection containerStyleClasses='body-section--width-965' reviewSites={reviewSites}/>
    </>
  )
}

export default Home
