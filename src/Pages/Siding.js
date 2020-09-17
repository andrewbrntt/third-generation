import React from 'react'
import {Helmet} from 'react-helmet-async'

import SidingInfographic from '../components/SidingInfographic'
import BodySection from '../components/BodySection'
import VendorSection from '../components/VendorSection'
import AboutImage from '../assets/group-people.jpg'
import {
  alsideLogo,
  certainteedSidingLogo,
  firestoneLogo,
  jamesHardieLogo,
  owensCorningLogo,
  royalSidingLogo
} from '../helpers/vendorAssetLibrary'
import DecorativeImage from '../components/DecorativeImage'
import DesktopBodySectionHeader from '../components/DesktopBodySectionHeader'

const Siding = () => {

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
        <title>3rd Generation Construction | Siding</title>
        <meta name="description" content="Third Generation Construction Siding Page" />
      </Helmet>
      <BodySection linkRoute='/contact' styleClasses='color-primary body-section--mobile-display' pageHeaderStyleClasses='body-section--mobile-display' pageHeader='Siding' linkText='Contact Us'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <p className='padding-x-standard'>Durable siding and energy-efficient doors and windows are all part of what
          makes your home beautiful.</p>
        <p className='p--top-spacing padding-x-standard'>
          Third Generation Construction is here to help increase your curb appeal and secure your home.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Our team are well-trained to handle fiber, vinyl, steel, and cement siding.
        </p>
      </BodySection>
      <DesktopBodySectionHeader linkText='Contact Us' linkRoute='/contact' sectionTitle='Siding'
                                heroImage={AboutImage}>
        <div className='padding-x-standard desktop-header--width-492 desktop__p--margin-bottom-50'>
        <p className='desktop--margin-0'>
          Durable siding and energy-efficient doors and windows are all part of what
          makes your home beautiful.</p>
        <p className='p--top-spacing'>
          Third Generation Construction is here to help increase your curb appeal and secure your home.
        </p>
        <p className='p--top-spacing'>
          Our team are well-trained to handle fiber, vinyl, steel, and cement siding.
        </p>
        </div>
      </DesktopBodySectionHeader>
      <BodySection linkRoute='our-work' styleClasses='background-color-primary color-white padding-x-standard body-section--width-full' sectionTitle='Pros to Siding'
                   linkText='View Gallery'>
        <div className='body-section--width-965 p--margin-bottom-standard'>
        <p>
          Replacing your siding has a number of benefits, including increase the value of your home.
        </p>
        <p className='p--top-spacing'>A home's siding not only protects your most valuable asset from the harsh Lake
          Erie weather, but it can also
          play a huge role in your maintenance and utility costs.</p>
        <p className='p--top-spacing body-section--width-full'>Ensure your house is protected and economically efficient by
          scheduling a free inspection and consultation
          with our team today.</p>
        </div>
        <div className='p--margin-bottom-standard'>
          <SidingInfographic/>
        </div>
      </BodySection>
      <BodySection styleClasses='color-primary padding-x-standard body-section--width-965' sectionTitle='Outlast the Elements' linkRoute='/contact' linkText='Contact Us'>
        <div className='p--margin-bottom-standard'>
        <p>
          Extreme weather ranging from scorching, humid summers to frigid, icy winters wreaks havoc on Lorain County
          homes.
        </p>
        <p className='p--top-spacing'>
          Replacing your home’s weather-worn or damaged siding can increase your home’s value, curb appeal, and safety.
        </p>
        </div>
      </BodySection>
      <BodySection linkRoute='/our-work' styleClasses='background-color-primary color-white body-section--width-full' sectionTitle='Our Work' linkText='View Gallery'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <div className='p--margin-bottom-standard'>
        <p className='padding-x-standard body-section--width-965'>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing padding-x-standard body-section--width-965'>
          Let 3RD Generation Construction transform your current space into the home of your dreams.
        </p>
        </div>
      </BodySection>
      <BodySection styleClasses='color-primary padding-x-standard body-section--width-965' sectionTitle='Our Materials'>
        <p>
          We're proud to use trusted quality materials that give you peace of mind.
        </p>
        <p className='p--top-spacing p--bottom-margin-40 p--bottom-margin-100'>
          Third Generation Construction uses dependable and affordable products to ensure your project is secure,
          beautiful, and reliable.
        </p>
        <div className='vendor-section--alignment'>
          <VendorSection vendors={vendors}/>
        </div>
      </BodySection>
    </>
  )
}

export default Siding
