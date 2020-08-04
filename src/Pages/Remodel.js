import React from 'react'
import BodySection from '../components/BodySection'
import VendorSection from '../components/VendorSection'
import BeforeAfterGallerySection from '../components/BeforeAfterGallerySection'
import AboutImage from '../assets/group-people.jpg'
import AlliedLogo from '../assets/vendor-assets/allied/allied-logo.png'
import CaterLogo from '../assets/vendor-assets/carter/carterlumber.png'
import GAFLogo from '../assets/vendor-assets/gaf/gaf-logo.png'
import Tools from '../assets/icon-tools.svg'
import DecorativeImage from '../components/DecorativeImage'
import { beforeAfterMockData } from '../helpers/mockData'

const galleryImages = beforeAfterMockData

const vendors = [
  { logo: CaterLogo, altText: 'Carter Lumber Logo' },
  { logo: GAFLogo, altText: 'GAF Roofing Shingles and Materials Logo' },
  { logo: AlliedLogo, altText: 'Allied Roofing Supply Company Logo' }
]

const Remodel = () => {
  return (
    <>
      <BodySection linkText='Contact Us' pageHeader='Remodel' styleClasses='remove-padding-x'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <p className='padding-x-standard'>
          Whether you’re updating your kitchen or upgrading your basement into the ultimate man cave, Third Generation
          Construction is here.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          We pride ourselves in using quality products to create beautiful projects at an
          affordable price.
        </p>
      </BodySection>
      <BodySection styleClasses='background-color-primary color-white' sectionTitle='Free Consultation'
                   iconName={Tools} linkText='Contact Us'>
        <p>
          You have questions.
        </p>
        <p className='p--top-spacing'>
          We have answers.
        </p>
        <p className='p--top-spacing'>
          Schedule a free consultation and let us help you turn your current house into the home you're dreaming of.
        </p>
      </BodySection>
      <BodySection linkText='FAQ' styleClasses='color-primary'>
        <p>Still need to do a little more research before committing?</p>
        <p className='p--top-spacing'>No problem. Check out our Home Remodel FAQ today.</p>
      </BodySection>
      <BodySection styleClasses='background-color-primary color-white'
                   sectionTitle='Our Work'
                   linkText='View Gallery'>
        <p className='padding-x-standard'>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing p--bottom-margin-40 padding-x-standard'>Let Third Generation Construction transform your
          current
          space into the home of your dreams.</p>
        <BeforeAfterGallerySection galleryImages={galleryImages}/>
      </BodySection>
      <BodySection sectionTitle='Our Suppliers' styleClasses='color-primary'>
        <p className='padding-x-standard'>
          We're proud to be local and support local.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Third Generation Construction uses proven products from trusted local suppliers to offer affordable home
          remodeling projects.
        </p>
        <div className='remodel__vendor-section--alignment'>
          <VendorSection vendors={vendors}/>
        </div>
      </BodySection>
    </>
  )
}

export default Remodel
