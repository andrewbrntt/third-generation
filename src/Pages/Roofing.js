import React from 'react'
import BodySection from '../components/BodySection'
import DecorativeImage from '../components/DecorativeImage'
import ReviewSitesSection from '../components/ReviewSitesSection'
import ReviewList from '../components/ReviewList'
import VendorSection from '../components/VendorSection'
import { reviewSites } from '../helpers/mockData'
import AboutImage from '../assets/group-people.jpg'
import owensCorningLogo from '../assets/vendor-assets/owens-corning/owens-corning.png'
import JamesHardieLogo from '../assets/vendor-assets/james-hardie/siding-james-hardie-logo.png'
import royalSidingLogo from '../assets/vendor-assets/royal-building/siding-royal-building-logo-color.png'
import alsideLogo from '../assets/vendor-assets/alside/alside.png'
import firestoneLogo from '../assets/vendor-assets/firestone/firestone_logo.png'
import certainteedSidingLogo from '../assets/vendor-assets/certainteed/siding-certainteed-logo.png'

const Roofing = () => {

  const vendors = [
    { logo: owensCorningLogo, altText: 'Carter Lumber Logo' },
    { logo: JamesHardieLogo, altText: 'James Hardie Siding Logo' },
    { logo: royalSidingLogo, altText: 'Royal Building Products Logo' },
    { logo: alsideLogo, altText: 'Alside Siding Logo' },
    { logo: firestoneLogo, altText: 'Firestone Building Products Logo', styleClasses: 'roofing__firestone-logo' },
    { logo: certainteedSidingLogo, altText: 'Certainteed Siding Logo' }
  ]

  return (
    <>
      <BodySection pageHeader='Roofing' linkText='Contact Us'>
        <DecorativeImage className='remodel__hero--img' src={AboutImage}/>
        <p className='padding-x-standard'>
          Third Generation Construction has you covered, whether you need routine-roof repair or a complete tear-off and
          roof replacement.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Our trained staff are experts at professionally installing all types of roofing systems, including asphalt,
          metal, tile, or slate.
        </p>
      </BodySection>
      <BodySection styleClasses='background-color-primary color-white' sectionTitle='Our Work'
                   linkText='View Gallery'>
        <DecorativeImage className='remodel__hero--img' src={AboutImage}/>
        <p>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing'>
          Let Third Generation Construction transform your current space into the home of your dreams.
        </p>
      </BodySection>
      <BodySection sectionTitle='Materials' paddingXRem='0.5' styleClasses='color-primary'>
        <p>
          We're proud to use trusted quality materials that give you peace of mind.
        </p>
        <p className='p--top-spacing'>
          Third Generation Construction uses dependable and affordable products to ensure your project is secure,
          beautiful, and reliable.
        </p>
        <div className='remodel__vendor-section--alignment'>
          <VendorSection vendors={vendors}/>
        </div>
      </BodySection>
      <BodySection styleClasses='background-color-primary color-white' sectionTitle='Reviews' paddingXRem='0.5'
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
