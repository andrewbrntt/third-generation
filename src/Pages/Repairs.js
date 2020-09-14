import React from 'react'
import BodySection from '../components/BodySection'
import AboutImage from '../assets/group-people.jpg'
import Tools from '../assets/icon-tools.svg'
import VendorSection from '../components/VendorSection'
import ReviewList from '../components/ReviewList'
import DecorativeImage from '../components/DecorativeImage'
import { alliedLogo, carterLogo, gafLogo } from '../helpers/vendorAssetLibrary'
import DesktopBodySectionHeader from '../components/DesktopBodySectionHeader'
import ImageGallerySection from '../components/ImageGallerySection'
import { mockGalleryImageObjects1 } from '../helpers/mockData'

const Repairs = () => {

  const vendors = [
    { logo: carterLogo, altText: 'Carter Lumber Logo', styleClasses: 'vendor__carter-lumber' },
    { logo: gafLogo, altText: 'GAF Roofing Shingles and Materials Logo', styleClasses: 'vendor__gaf' },
    { logo: alliedLogo, altText: 'Allied Roofing Supply Company Logo', styleClasses: 'vendor__allied' }
  ]

  return (
    <>
      <BodySection linkRoute='/contact' styleClasses='color-primary body-section--display' pageHeader='Repairs'
                   linkText='Contact Us'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
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
                                heroImage={AboutImage}>
        <p className='padding-x-standard'>
          Sometimes all it takes to transform your home is a few minor fixes.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Large projects or small, Third Generation Construction is here to help you love your home for years to come.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Our services include painting, fence building, flooring, and more.
        </p>

      </DesktopBodySectionHeader>
      <BodySection linkRoute='/contact' styleClasses='background-color-primary color-white body-section--width-full'
                   iconName={Tools} sectionTitle='Free Consultation'
                   linkText='Contact Us'>
        <div className='body-section--width-965 padding-x-standard'>
          <p>You have questions.</p>
          <p className='p--top-spacing'>We have answers.</p>
          <p className='p--top-spacing'>
            Schedule a free consultation and let us help you turn your current house into the home you're dreaming of.
          </p>
        </div>
      </BodySection>
      <BodySection linkRoute='/contact' sectionTitle='24-Hour Emergency Service' linkText='Contact Us'
                   styleClasses='color-primary padding-x-standard  body-section--width-965'>
        <p>Life happens.</p>
        <p className='p--top-spacing'> Third Generation Construction is here.</p>
        <p className='p--top-spacing'>We are available 24/7 to help you fix whatever goes wrong in your home.</p>
      </BodySection>
      <BodySection linkRoute='/our-work' styleClasses='background-color-primary color-white body-section--width-full'
                   sectionTitle='Our Work'
                   linkText='View Gallery'>
        <div className='padding-x-standard p--margin-bottom-standard'>
          <p className='body-section--width-965'>
            We're proud of our work and love showing it off.
          </p>
          <p className='p--top-spacing body-section--width-965 body-section--margin-bottom--100-lg'>
            Let Third Generation Construction transform your current space into the home of your dreams.
          </p>
        </div>
        <ImageGallerySection title='Booty Sweat' images={mockGalleryImageObjects1}/>
      </BodySection>
      <BodySection styleClasses='color-primary body-section--width-965' sectionTitle='Our Suppliers'>
        <div className='padding-x-standard'>
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
                   styleClasses='padding-x-standard body-section__reviews-section--padding color-primary'
                   sectionTitle='Reviews'>
        <ReviewList randomCount='1'/>
      </BodySection>
    </>
  )
}

export default Repairs
