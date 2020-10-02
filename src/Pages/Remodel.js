import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import BodySection from '../components/BodySection'

import { alliedLogo, carterLogo, gafLogo } from '../helpers/vendorAssetLibrary'
import Tools from '../assets/icon-tools.svg'
import DesktopBodySectionHeader from '../components/DesktopBodySectionHeader'
import ImageGallerySection from '../components/ImageGallerySection'
import { useImagesCDN, useImagesCDNSingleStockArt } from '../helpers/useImageCDN'
import { Image } from 'cloudinary-react'
import SuppliersSection from '../components/SuppliersSection'

const Remodel = () => {
  const [imageGalleryImages, setImageGalleryImages] = useState([])
  const [heroImage, setHeroImage] = useState([])

  const suppliers = [
    { logo: carterLogo, altText: 'Carter Lumber Logo', styleClasses: 'vendor__carter-lumber' },
    { logo: gafLogo, altText: 'GAF Roofing Shingles and Materials Logo', styleClasses: 'vendor__gaf' },
    { logo: alliedLogo, altText: 'Allied Roofing Supply Company Logo', styleClasses: 'vendor__allied' }
  ]

  useImagesCDN(setImageGalleryImages, 'group-3')
  useImagesCDNSingleStockArt(setHeroImage, 'remodel')

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
        {heroImage && <Image className='body-section__hero-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME}
                             publicId={heroImage.public_id}/>}
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
          <p className='p--top-spacing p--bottom-margin-40 body-section--width-965'>
            Let us help you turn your house into the home you're dreaming of.
          </p>
          <p>
            Schedule your free consultation and estimate today.
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
