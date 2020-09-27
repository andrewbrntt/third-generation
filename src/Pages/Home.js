import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useImagesCDN, useImagesCDNSingleStockArt } from '../helpers/useImageCDN'
import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import LinkCard from '../components/LinkCard'
import AccreditedSitesSection from '../components/AccreditedSitesSection'
import ContactForm from '../components/ContactForm'
import ReviewList from '../components/ReviewList'

import { formFieldsData } from '../DataObjects/contactFormData'
import { accreditationSites } from '../DataObjects/socialMediaData'
import { routesData } from '../DataObjects/routes'
import { randomReviews } from '../DataObjects/reviewsData'
import ImageGallerySection from '../components/ImageGallerySection'
import { Image } from 'cloudinary-react'

const Home = () => {
const [imageGalleryImages, setImageGalleryImages] = useState(null)
  const [aboutImage, setAboutImage] = useState({})
  const [remodelCardImage, setRemodelCardImage] = useState({})
  const [roofingCardImage, setRoofingCardImage] = useState({})
  const [sidingCardImage, setSidingCardImage] = useState({})
  const [repairsCardImage, setRepairsCardImage] = useState({})

  const formStyles = {
    formClasses: '',
    fieldContainerClasses: '',
    labelElementClasses: '',
    labelTextClasses: 'color-white',
    requiredTextClasses: 'color-white'
  }

  useImagesCDN(setImageGalleryImages, 'group-1')
  useImagesCDNSingleStockArt(setAboutImage,'about-us')
  useImagesCDNSingleStockArt(setRemodelCardImage,'remodel-card')
  useImagesCDNSingleStockArt(setRepairsCardImage,'repairs-card')
  useImagesCDNSingleStockArt(setSidingCardImage,'siding-card')
  useImagesCDNSingleStockArt(setRoofingCardImage,'roofing-card')

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | Home</title>
        <meta name="description" content="Third Generation Construction Home Page"/>
      </Helmet>
      <BodyHeader linkRoute={routesData.contactUs.routeTo} linkText={routesData.contactUs.routeName} heroImageName='home'
                  pageHeader='Transform Your House Into Your Dream Home'>
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
              <LinkCard urlPath='remodel' imgSrc={remodelCardImage} cardTitle='Remodel'/>
              <LinkCard urlPath='roofing' imgSrc={roofingCardImage} cardTitle='Roofing'/>
            </div>
            <div className='home__service-cards-row'>
              <LinkCard urlPath='siding' imgSrc={sidingCardImage} cardTitle='Siding'/>
              <LinkCard urlPath='repairs' imgSrc={repairsCardImage} cardTitle='Repairs'/>
            </div>
          </div>
          <div className='home__service-cards-desktop-container'>
            <LinkCard urlPath='remodel' imgSrc={remodelCardImage} cardTitle='Remodel'/>
            <LinkCard urlPath='roofing' imgSrc={roofingCardImage} cardTitle='Roofing'/>
            <LinkCard urlPath='siding' imgSrc={sidingCardImage} cardTitle='Siding'/>
            <LinkCard urlPath='repairs' imgSrc={repairsCardImage} cardTitle='Repairs'/>
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
        {aboutImage && <Image className='body-section__hero-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME} publicId={aboutImage.public_id}/>}
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
          <ImageGallerySection images={imageGalleryImages}/>
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
          <ReviewList reviewsList={randomReviews}/>
        </div>
      </BodySection>
      <AccreditedSitesSection containerStyleClasses='body-section--width-965' accreditationSites={accreditationSites}/>
    </>
  )
}

export default Home
