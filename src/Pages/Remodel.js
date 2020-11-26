import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import BodySection from '../Components/BodySection'

import { alliedLogo, carterLogo, gafLogo } from '../Helpers/vendorAssetLibrary'
import Tools from '../assets/icon-tools.svg'
import DesktopBodySectionHeader from '../Components/DesktopBodySectionHeader'
import ImageGallerySection from '../Components/ImageGallery/ImageGallerySection'
import SuppliersSection from '../Components/SuppliersSection'
import getImageGroup from '../Helpers/ImageCDN/getImageGroup'
import GLOBAL_DEFS from '../Helpers/GLOBAL_DEFS'
import getStockArtImage from '../Helpers/ImageCDN/getStockArtImage'
import DynamicImage from '../Components/DynamicImage'

const Remodel = () => {
  const [imageGalleryImages, setImageGalleryImages] = useState(null)
  const [heroImage, setHeroImage] = useState(null)

  const suppliers = [
    { logo: carterLogo, altText: 'Carter Lumber Logo', styleClasses: 'vendor__carter-lumber' },
    { logo: gafLogo, altText: 'GAF Roofing Shingles and Materials Logo', styleClasses: 'vendor__gaf' },
    { logo: alliedLogo, altText: 'Allied Roofing Supply Company Logo', styleClasses: 'vendor__allied' }
  ]

  useEffect(() => {
    const remodelHero = getStockArtImage(GLOBAL_DEFS.PAGE_HEROS.REMODEL)
    const galleryImageGroup = getImageGroup(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_3)

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
        <title>3rd Generation Construction | Remodeling</title>
        <meta name="description" content="Third Generation Construction Remodeling Page"/>
      </Helmet>
      <BodySection pageHeaderStyleClasses='body-section--mobile-display' linkRoute='/contact' linkText='Contact Us'
                   pageHeader='Remodel'
                   styleClasses='remove-padding-x color-primary body-section--mobile-display'>
        {heroImage &&
        <DynamicImage styleClasses='body-section__hero-img' imageObject={heroImage}/>}
        <div className='p--margin-bottom-standard'>
          <p className='padding-x-standard'>
            Whether you’re updating your kitchen or upgrading your basement into the ultimate man cave, Third Generation
            Construction can help.
          </p>
          <p className='p--top-spacing padding-x-standard'>
            We pride ourselves in using quality products to create beautiful projects at an affordable price.
          </p>
        </div>
      </BodySection>
      <DesktopBodySectionHeader linkText='Contact Us' linkRoute='/contact' sectionTitle='Remodel'
                                heroImage={heroImage}>
        <div className='desktop__p--margin-bottom-80'>
          <p className='desktop--margin-0'>
            Whether you’re updating your kitchen or upgrading your basement into the ultimate man cave, Third Generation
            Construction is here.
          </p>
          <p className='p--top-spacing desktop--margin-bottom-0'>
            We pride ourselves in using quality products to create beautiful projects at an
            affordable price.
          </p>
        </div>
      </DesktopBodySectionHeader>
      <BodySection linkRoute='/contact'
                   styleClasses='body-section__has-line background-color-primary color-white body-section--width-full padding-x-standard'
                   sectionTitle='Free Consultation. Free Estimate.'
                   iconName={Tools} linkText='Contact Us'>
        <div className='p--margin-bottom-standard'>
          <p className='p--top-spacing p--bottom-margin-40'>
            Let us help you turn your house into the home you're dreaming of.
          </p>
          <p>
            Schedule your free consultation and estimate today.
          </p>
          <div className='background-color-white remodel__services'>
            We offer a wide variety of services that can help you improve your home.
            <hr className='remodel__services-hr'/>
            <ul className='remodel__services-list'>
              <li className='remodel__services-list-item'>Windows</li>
              <li className='remodel__services-list-item'>Drywall</li>
              <li className='remodel__services-list-item'>
                Flooring
              </li>
              <li>
                <ul className='remodel__services-flooring-sub-list'>
                  <li className='remodel__services-flooring-sub-list-item'>Hardwood</li>
                  <li className='remodel__services-flooring-sub-list-item'>Vinyl/Laminate</li>
                  <li className='remodel__services-flooring-sub-list-item'>Tile</li>
                </ul>
              </li>
            </ul>
          </div>
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
        {imageGalleryImages && <ImageGallerySection sectionImages={imageGalleryImages}/>}
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
          <SuppliersSection suppliers={suppliers}/>
        </div>
      </BodySection>
    </>
  )
}

export default Remodel
