import React from 'react'
import BodySection from '../components/BodySection'
import AboutImage from '../assets/group-people.jpg'
import Tools from '../assets/icon-tools.svg'
import VendorSection from '../components/VendorSection'
import ReviewList from '../components/ReviewList'
import DecorativeImage from '../components/DecorativeImage'
import {carterLogo, gafLogo, alliedLogo} from '../helpers/vendorAssetLibrary'
import DesktopBodySectionHeader from '../components/DesktopBodySectionHeader'

const Repairs = () => {

  const vendors = [
    { logo: carterLogo, altText: 'Carter Lumber Logo' },
    { logo: gafLogo, altText: 'GAF Roofing Shingles and Materials Logo' },
    { logo: alliedLogo, altText: 'Allied Roofing Supply Company Logo' }
  ]

  return (
    <>
      <BodySection linkRoute='/contact' styleClasses='color-primary' pageHeader='Repairs' linkText='Contact Us'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <p className='padding-x-standard'>
          Sometimes all it takes to transform your home is a few minor fixes.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Large projects or small, Third Generation Construction is here to help you love your home for years to come.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Our services include painting, fence building, flooring, and more.
        </p>
      </BodySection>
      <DesktopBodySectionHeader />
      <BodySection linkRoute='/contact' styleClasses='background-color-primary color-white' iconName={Tools} sectionTitle='Free Consultation'
                   linkText='Contact Us'>
        <p>You have questions.</p>
        <p className='p--top-spacing'>We have answers.</p>
        <p className='p--top-spacing'>
          Schedule a free consultation and let us help you turn your current house into the home you're dreaming of.
        </p>
      </BodySection>
      <BodySection styleClasses='color-primary' linkText='FAQ'>
        <p>
          Need to do more research before committing?
        </p>
        <p className='p--top-spacing'> No problem.</p>
        <p className='p--top-spacing'> We have answers to common home-remodel questions.</p>
      </BodySection>
      <BodySection linkRoute='/our-work' styleClasses='background-color-primary color-white' sectionTitle='Our Work'
                   linkText='View Gallery'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <p>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing'>
          Let Third Generation Construction transform your current space into the home of your dreams.
        </p>
      </BodySection>
      <BodySection styleClasses='color-primary' sectionTitle='Our Suppliers'>
        <p>
          We're proud to be local and support local.
        </p>
        <p className='p--top-spacing p--bottom-margin-40'>
          Third Generation Construction uses proven products from trusted local suppliers to offer affordable home
          remodeling projects.
        </p>
        <VendorSection vendors={vendors}/>
      </BodySection>
      <BodySection linkRoute='/reviews' linkText='Reviews' styleClasses='body-section__reviews-section--padding color-primary' sectionTitle='Reviews'>
        <ReviewList randomCount='1'/>
      </BodySection>
    </>
  )
}

export default Repairs
