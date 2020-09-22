import React from 'react'
import { Helmet } from 'react-helmet-async'

import BodySection from '../components/BodySection'
import DecorativeImage from '../components/DecorativeImage'
import ReviewSitesSection from '../components/ReviewSitesSection'
import ReviewList from '../components/ReviewList'
import VendorSection from '../components/VendorSection'
import { reviewSites } from '../DataObjects/socialMediaData'
import AboutImage from '../assets/group-people.jpg'
import {
  alsideLogo,
  certainteedSidingLogo,
  firestoneLogo,
  jamesHardieLogo,
  owensCorningLogo,
  royalSidingLogo
} from '../helpers/vendorAssetLibrary'
import DesktopBodySectionHeader from '../components/DesktopBodySectionHeader'
import { roofReviews } from '../DataObjects/reviewsData'

const Roofing = () => {

  const vendors = [
    { logo: jamesHardieLogo, altText: 'James Hardie Siding Logo', styleClasses: 'vendor__james-hardie' },
    { logo: owensCorningLogo, altText: 'Owens Corning Logo', styleClasses: 'vendor__owens-corning' },
    { logo: certainteedSidingLogo, altText: 'Certainteed Siding Logo', styleClasses: 'vendor__certainteed' },
    { logo: royalSidingLogo, altText: 'Royal Building Products Logo', styleClasses: 'vendor__royal-building' },
    { logo: alsideLogo, altText: 'Alside Siding Logo', styleClasses: 'vendor__alside' },
    { logo: firestoneLogo, altText: 'Firestone Building Products Logo', styleClasses: 'vendor__firestone' }
  ]

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>3rd Generation Construction | Roofing</title>
        <meta name="description" content="Third Generation Construction Roofing Page" />
      </Helmet>
      <BodySection pageHeaderStyleClasses='body-section--mobile-display' linkRoute='/contact' pageHeader='Roofing' linkText='Contact Us' styleClasses='color-primary body-section--mobile-display'>
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
      <DesktopBodySectionHeader linkText='Contact Us' linkRoute='/contact' sectionTitle='Roofing'
                                heroImage={AboutImage}>
        <div className='padding-x-standard desktop__p--margin-bottom-50'>
        <p className='desktop--margin-0'>
          Third Generation Construction has you covered, whether you need routine-roof repair or a complete tear-off and
          roof replacement.
        </p>
        <p className='p--top-spacing desktop--margin-bottom-0'>
          Our trained staff are experts at professionally installing all types of roofing systems, including asphalt,
          metal, tile, or slate.
        </p>
        </div>
      </DesktopBodySectionHeader>
      <BodySection linkRoute='/our-work' styleClasses='background-color-primary color-white body-section--width-full' sectionTitle='Our Work'
                   linkText='View Gallery'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <div className='p--margin-bottom-standard body-section--width-965 padding-x-standard'>
        <p>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing'>
          Let Third Generation Construction transform your current space into the home of your dreams.
        </p>
        </div>
      </BodySection>
      <BodySection sectionTitle='Materials' styleClasses='color-primary padding-x-standard body-section--width-965'>
        <div className='p--margin-bottom-standard padding-x-standard'>
        <p>
          We're proud to use trusted quality materials that give you peace of mind.
        </p>
        <p className='p--top-spacing'>
          Third Generation Construction uses dependable and affordable products to ensure your project is secure,
          beautiful, and reliable.
        </p>
        </div>
        <div className='vendor-section--alignment'>
          <VendorSection vendors={vendors}/>
        </div>
      </BodySection>
      <BodySection
        linkRoute='/reviews'
        styleClasses='background-color-primary color-white padding-x-standard body-section__reviews-section--padding body-section--width-full' sectionTitle='Reviews'
                   linkText='Reviews'>
        <div className='p--margin-bottom-standard'>
        <ReviewList containerClasses='background-color-primary' reviewClasses='background-color-white color-primary'  reviewsList={roofReviews}/>
        </div>
      </BodySection>
      <BodySection styleClasses='color-primary body-section--width-965'>
        <p className='desktop--margin-0 padding-x-standard'>
          Third Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on the
          quality of work as well as our commitment to outstanding results.
        </p>
      </BodySection>
      <ReviewSitesSection containerStyleClasses='body-section--width-965' reviewSites={reviewSites}/>

    </>
  )
}

export default Roofing
