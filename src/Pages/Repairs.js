import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import BodySection from '../components/BodySection'

import Tools from '../assets/icon-tools.svg'
import VendorSection from '../components/VendorSection'
import ReviewList from '../components/ReviewList'
import { alliedLogo, carterLogo, gafLogo } from '../helpers/vendorAssetLibrary'
import DesktopBodySectionHeader from '../components/DesktopBodySectionHeader'
import ImageGallerySection from '../components/ImageGallerySection'
import { repairReviews } from '../DataObjects/reviewsData'
import { useImagesCDN, useImagesCDNSingleStockArt } from '../helpers/useImageCDN'
import { Image } from 'cloudinary-react'

const Repairs = () => {

  const [imageGalleryImages, setImageGalleryImages] = useState([])
  const [heroImage, setHeroImage] = useState([])

  const vendors = [
    { logo: carterLogo, altText: 'Carter Lumber Logo', styleClasses: 'vendor__carter-lumber' },
    { logo: gafLogo, altText: 'GAF Roofing Shingles and Materials Logo', styleClasses: 'vendor__gaf' },
    { logo: alliedLogo, altText: 'Allied Roofing Supply Company Logo', styleClasses: 'vendor__allied' }
  ]

  useImagesCDN(setImageGalleryImages, 'group-2')
  useImagesCDNSingleStockArt(setHeroImage, 'repairs')

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | Repairs</title>
        <meta name="description" content="Third Generation Construction Repairs Page"/>
      </Helmet>
      <BodySection pageHeaderStyleClasses='body-section--mobile-display' linkRoute='/contact'
                   styleClasses='color-primary body-section--mobile-display'
                   pageHeader='Repairs'
                   linkText='Contact Us'>
        {heroImage && <Image className='body-section__hero-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME}
                             publicId={heroImage.public_id}/>}
        <div className='padding-x-standard'>
          <p>
            Sometimes all it takes to transform your home is a few minor fixes.
          </p>
          <p className='p--top-spacing'>
            Large projects or small, Third Generation Construction is here to help you love your home for years to come.
          </p>
          <p className='p--top-spacing'>
            Our services include painting, fence building, flooring, and more.
          </p>
        </div>
      </BodySection>
      <DesktopBodySectionHeader linkText='Contact Us' linkRoute='/contact' sectionTitle='Repairs'
                                heroImage={heroImage}>
        <div className='desktop-header--width-492 desktop__p--margin-bottom-60'>
          <p className='desktop--margin-0'>
            Sometimes all it takes to transform your home is a few minor fixes.
          </p>
          <p className='p--top-spacing'>
            Large projects or small, Third Generation Construction is here to help you love your home for years to come.
          </p>
          <p className='p--top-spacing desktop--margin-bottom-0'>
            Our services include painting, fence building, flooring, and more.
          </p>
        </div>
      </DesktopBodySectionHeader>
      <BodySection linkRoute='/contact'
                   styleClasses='body-section__has-line background-color-primary color-white body-section--width-full'
                   sectionTitle='Free Consultation'
                   iconName={Tools} linkText='Contact Us'>
        <div className='p--margin-bottom-standard'>
          <p>
            You have questions.
          </p>
          <p className='p--top-spacing p--bottom-margin-40 body-section--width-965'>
            We have answers.
          </p>
          <p className='p--top-spacing padding-x-standard body-section--width-965'>
            Schedule a free consultation and let us help you turn your current house into the home you're dreaming of.
          </p>
        </div>
      </BodySection>
      <BodySection linkRoute='/contact' sectionTitle='24-Hour Emergency Service' linkText='Contact Us'
                   styleClasses='color-primary padding-x-standard'>
        <div className='p--margin-bottom-standard'>
          <p className='desktop--margin-0'>Life happens.</p>
          <p className='p--top-spacing'> Third Generation Construction is here.</p>
          <p className='p--top-spacing'>We are available 24/7 to help you fix whatever goes wrong in your home.</p>
        </div>
      </BodySection>
      <BodySection linkRoute='/our-work' styleClasses='background-color-primary color-white body-section--width-full'
                   sectionTitle='Our Work'
                   linkText='View Gallery'>
        <div className='p--margin-bottom-standard padding-x-standard'>
          <p className='body-section--width-965'>
            We're proud of our work and love showing it off.
          </p>
          <p className='p--top-spacing body-section--width-965 body-section--margin-bottom-100-lg'>
            Let Third Generation Construction transform your current space into the home of your dreams.
          </p>
        </div>
        <ImageGallerySection images={imageGalleryImages}/>
      </BodySection>
      <BodySection styleClasses='color-primary body-section--width-965' sectionTitle='Our Suppliers'>
        <div className='padding-x-standard desktop__p--margin-bottom-80'>
          <p>
            We're proud to be local and support local.
          </p>
          <p className='p--top-spacing'>
            Third Generation Construction uses proven products from trusted local suppliers to offer affordable home
            remodeling projects.
          </p>
        </div>
        <div className='vendor-section--alignment'>
          <VendorSection vendors={vendors}/>
        </div>
      </BodySection>
      <BodySection linkRoute='/reviews' linkText='Reviews'
                   styleClasses='padding-x-standard body-section__reviews-section--padding background-color-primary color-white repairs__review-list body-section--width-full'
                   sectionTitle='Reviews'>
        <div className='desktop__p--margin-bottom-80'>
          <ReviewList containerClasses='background-color-primary' reviewClasses='background-color-white color-primary'
                      reviewsList={repairReviews}/>
        </div>
      </BodySection>
    </>
  )
}

export default Repairs
