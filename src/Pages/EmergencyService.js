import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import BodySection from '../components/BodySection'

import ReviewList from '../components/ReviewList'
import AccreditedSitesSection from '../components/AccreditedSitesSection'
import { accreditationSites } from '../DataObjects/socialMediaData'
import { remodelReviews } from '../DataObjects/reviewsData'

import ImageGallerySection from '../components/ImageGallerySection'

import { useImagesCDN, useImagesCDNSingleStockArt } from '../helpers/useImageCDN'
import { Image } from 'cloudinary-react'


const EmergencyService = () => {
  const [imageGalleryImages, setImageGalleryImages] = useState([])
  const [heroImage, setHeroImage] = useState([])

  useImagesCDN(setImageGalleryImages, 'group-2')
  useImagesCDNSingleStockArt(setHeroImage,'emergency')

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | 24-Hour Emergency Services</title>
        <meta name="description" content="Third Generation Construction 24 Hour Emergency Services Page"/>
      </Helmet>
      <BodySection linkRoute='/contact' styleClasses='color-primary' pageHeader='24-Hour Emergency Service'
                   linkText='Contact Us'>
        {heroImage && <Image className='body-section__hero-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME} publicId={heroImage.public_id}/>}
        <div className='padding-x-standard desktop__p--margin-bottom-80'>
          <p>Life is full of curveballs, and emergencies happen.</p>
          <p className='p--top-spacing'>Let Third Generation Construction help keep your home safe.</p>
          <p className='p--top-spacing'>We're available 24/7 and can help fix urgent needs as they happen.</p>
        </div>
      </BodySection>
      <BodySection
        linkRoute='/our-work'
        styleClasses='background-color-primary color-white body-section--width-full'
        sectionTitle='Our Work'
        linkText='View Gallery'>
        <div className='p--margin-bottom-standard'>
          <p className='padding-x-standard body-section--width-965 desktop--margin-0'>
            We're proud of our work and love showing it off.
          </p>
          <p className='p--top-spacing p--bottom-margin-40 padding-x-standard body-section--width-965'>
            Let Third Generation Construction transform your current space into the home of your dreams.
          </p>
        </div>
        <ImageGallerySection images={imageGalleryImages} isSection={true}/>
        {/*<BeforeAfterGallerySection galleryImages={galleryImages}/>*/}
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
          Third Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on the
          quality of work as well as our commitment to outstanding results.
        </p>
        <AccreditedSitesSection containerStyleClasses='body-section--width-965 desktop--margin-bottom-0'
                                accreditationSites={accreditationSites}/>
      </BodySection>
    </>
  )
}

export default EmergencyService
