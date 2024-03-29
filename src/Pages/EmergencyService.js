import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import BodySection from '../Components/BodySection'

import ReviewList from '../Components/ReviewList'
import AccreditedSitesSection from '../Components/AccreditedSitesSection'
import { accreditationSites } from '../DataObjects/socialMediaData'
import { remodelReviews } from '../DataObjects/reviewsData'

import ImageGallerySection from '../Components/ImageGallery/ImageGallerySection'
import getStockArtImage from '../Helpers/ImageCDN/getStockArtImage'
import GLOBAL_DEFS, { GALLERY_NAMES_BY_PROJECT } from '../Helpers/GLOBAL_DEFS'
import getImageGroup from '../Helpers/ImageCDN/getImageGroup'
import DynamicImage from '../Components/DynamicImage'

const EmergencyService = () => {
  const [imageGalleryImages, setImageGalleryImages] = useState(null)
  const [heroImage, setHeroImage] = useState(null)

  useEffect(() => {

    const emergencyHero = getStockArtImage(GLOBAL_DEFS.PAGE_HEROS.EMERGENCY)
    const galleryImageGroup = getImageGroup(GALLERY_NAMES_BY_PROJECT.OTHER_PROJECT_1, true)

    Promise.all([emergencyHero, galleryImageGroup])
      .then(res => {
        setHeroImage(res[0])
        setImageGalleryImages(res[1])
      })
  }, [])

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | 24-Hour Emergency Services</title>
        <meta name="description" content="Third Generation Construction 24 Hour Emergency Services Page"/>
      </Helmet>
      <BodySection linkRoute='/contact' styleClasses='color-primary' pageHeader='24-Hour Emergency Service'
                   linkText='Contact Us'>
        {heroImage &&
        <DynamicImage styleClasses='body-section__hero-img' imageObject={heroImage}/>}
        <div className='padding-x-standard desktop__p--margin-bottom-80'>
          <p>Life is full of curveballs, and emergencies happen.</p>
          <p className='p--top-spacing'>Let Third Generation Construction help keep your home safe.</p>
          <p className='p--top-spacing'>We're available 24/7 and can help fix urgent needs as they happen.</p>
        </div>
      </BodySection>
      <BodySection
        linkRoute='/other-photos'
        styleClasses='background-color-primary color-white body-section--width-full'
        sectionTitle='Our Work'
        linkText='View Other Gallery'>
        <div className='p--margin-bottom-standard'>
          <p className='padding-x-standard body-section--width-965 desktop--margin-0'>
            We're proud of our work and love showing it off.
          </p>
          <p className='p--top-spacing p--bottom-margin-40 padding-x-standard body-section--width-965'>
            Let Third Generation Construction transform your current space into the home of your dreams.
          </p>
        </div>
        {imageGalleryImages && <ImageGallerySection sectionImages={imageGalleryImages}/>}
      </BodySection>
      <BodySection linkRoute='/reviews' linkText='Reviews' sectionTitle='Reviews'
                   styleClasses='body-section__reviews-section--padding padding-x-standard color-primary'>
        <div className='desktop__p--margin-bottom-80'>
          <ReviewList reviewsList={remodelReviews}/>
        </div>
      </BodySection>
      <BodySection styleClasses='desktop--padding-top-0 mobile--padding-top-0'>
        <p
          className='padding-x-standard align-text--center color-primary body-section--width-965 desktop__p--margin-bottom-80 desktop--margin-top-0'>
          Third Generation Construction is <span className='font-weight-bold'>licensed, bonded, and insured</span>. Our
          team prides itself on quality and is committed to guaranteeing outstanding results.
        </p>
        <AccreditedSitesSection containerStyleClasses='body-section--width-965 desktop--margin-bottom-0'
                                accreditationSites={accreditationSites}/>
      </BodySection>
    </>
  )
}

export default EmergencyService
