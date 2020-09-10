import React from 'react'
import BodySection from '../components/BodySection'
import DecorativeImage from '../components/DecorativeImage'
import ReviewSitesSection from '../components/ReviewSitesSection'
import ReviewList from '../components/ReviewList'
import VendorSection from '../components/VendorSection'
import { reviewSites } from '../helpers/mockData'
import AboutImage from '../assets/group-people.jpg'
import {
  alsideLogo,
  certainteedSidingLogo,
  firestoneLogo,
  jamesHardieLogo,
  owensCorningLogo,
  royalSidingLogo
} from '../helpers/vendorAssetLibrary'

const Roofing = () => {

  const vendors = [
    { logo: owensCorningLogo, altText: 'Owens Corning Logo' },
    { logo: jamesHardieLogo, altText: 'James Hardie Siding Logo' },
    { logo: royalSidingLogo, altText: 'Royal Building Products Logo' },
    { logo: alsideLogo, altText: 'Alside Siding Logo' },
    { logo: firestoneLogo, altText: 'Firestone Building Products Logo', styleClasses: 'vendor__firestone' },
    { logo: certainteedSidingLogo, altText: 'Certainteed Siding Logo' }
  ]

  return (
    <>
      <BodySection linkRoute='/contact' pageHeader='Roofing' linkText='Contact Us' styleClasses='color-primary'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <p className='padding-x-standard'>
          Third Generation Construction has you covered, whether you need routine-roof repair or a complete tear-off and
          roof replacement.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Our trained staff are experts at professionally installing all types of roofing systems, including asphalt,
          metal, tile, or slate.
        </p>
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
      <BodySection sectionTitle='Materials' styleClasses='color-primary padding-x-standard'>
        <p>
          We're proud to use trusted quality materials that give you peace of mind.
        </p>
        <p className='p--top-spacing'>
          Third Generation Construction uses dependable and affordable products to ensure your project is secure,
          beautiful, and reliable.
        </p>
        <div className='vendor-section--alignment'>
          <VendorSection vendors={vendors}/>
        </div>
      </BodySection>
      <BodySection
        linkRoute='/reviews'
        styleClasses='background-color-primary color-white padding-x-standard body-section__reviews-section--padding' sectionTitle='Reviews'
                   linkText='Reviews'>
        <ReviewList styleClasses='background-color-white color-primary' randomCount='3'/>
      </BodySection>
      <BodySection styleClasses='color-primary'>
        <p className='padding-x-standard'>
          Third Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on the
          quality of work as well as our commitment to outstanding results.
        </p>
        <ReviewSitesSection reviewSites={reviewSites}/>
      </BodySection>
    </>
  )
}

export default Roofing
