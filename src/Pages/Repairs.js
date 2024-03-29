import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import BodySection from '../Components/BodySection'

import Tools from '../assets/icon-tools.svg'
import VendorSection from '../Components/VendorSection'
import ReviewList from '../Components/ReviewList'
import { alliedLogo, carterLogo, gafLogo } from '../Helpers/vendorAssetLibrary'
import DesktopBodySectionHeader from '../Components/DesktopBodySectionHeader'
import ImageGallerySection from '../Components/ImageGallery/ImageGallerySection'
import { repairReviews } from '../DataObjects/reviewsData'
import getStockArtImage from '../Helpers/ImageCDN/getStockArtImage'
import GLOBAL_DEFS, { GALLERY_NAMES_BY_PROJECT } from '../Helpers/GLOBAL_DEFS'
import getImageGroup from '../Helpers/ImageCDN/getImageGroup'
import DynamicImage from '../Components/DynamicImage'

const Repairs = () => {

  const [imageGalleryImages, setImageGalleryImages] = useState(null)
  const [heroImage, setHeroImage] = useState(null)

  const vendors = [
    { logo: carterLogo, altText: 'Carter Lumber Logo', styleClasses: 'vendor__carter-lumber' },
    { logo: gafLogo, altText: 'GAF Roofing Shingles and Materials Logo', styleClasses: 'vendor__gaf' },
    { logo: alliedLogo, altText: 'Allied Roofing Supply Company Logo', styleClasses: 'vendor__allied' }
  ]

  useEffect(() => {
    const remodelHero = getStockArtImage(GLOBAL_DEFS.PAGE_HEROS.REPAIRS)
    const galleryImageGroup = getImageGroup(GALLERY_NAMES_BY_PROJECT.BASEMENT_PROJECT_1, true)

    Promise.all([remodelHero, galleryImageGroup])
      .then(res => {
        setHeroImage(res[0])
        setImageGalleryImages(res[1])
      })
  }, [])

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
        {heroImage &&
        <DynamicImage styleClasses='body-section__hero-img' imageObject={heroImage}/>}}
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
                   sectionTitle='Free consultation. Free estimate.'
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
      <BodySection linkRoute='/basement-photos' styleClasses='background-color-primary color-white body-section--width-full'
                   sectionTitle='Our Work'
                   linkText='View Basement Gallery'>
        <div className='p--margin-bottom-standard padding-x-standard'>
          <p className='body-section--width-965'>
            We're proud of our work and love showing it off.
          </p>
          <p className='p--top-spacing body-section--width-965 body-section--margin-bottom-100-lg'>
            Let Third Generation Construction transform your current space into the home of your dreams.
          </p>
          {imageGalleryImages && <ImageGallerySection sectionImages={imageGalleryImages}/>}
        </div>
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
