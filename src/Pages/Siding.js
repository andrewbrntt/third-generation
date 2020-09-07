import React from 'react'
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

const Siding = () => {

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
      <BodySection linkRoute='/contact' styleClasses='color-primary' pageHeader='Siding' linkText='Contact Us'>
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
      <BodySection linkRoute='our-work' styleClasses='background-color-primary color-white padding-x-standard' sectionTitle='Pros to Siding'
                   linkText='View Gallery'>
        <p>
          Replacing your siding has a number of benefits, including increase the value of your home.
        </p>
        <p className='p--top-spacing'>A home's siding not only protects your most valuable asset from the harsh Lake
          Erie weather, but it can also
          play a huge role in your maintenance and utility costs.</p>
        <p className='p--top-spacing p--bottom-margin-40'>Ensure your house is protected and economically efficient by
          scheduling a free inspection and consultation
          with our team today.</p>
        <div>
          <SidingInfographic/>
        </div>
      </BodySection>
      <BodySection styleClasses='color-primary padding-x-standard' sectionTitle='Outlast the Elements' linkText='FAQ'>
        <p>
          Extreme weather ranging from scorching, humid summers to frigid, icy winters wreaks havoc on Lorain County
          homes.
        </p>
        <p className='p--top-spacing'>
          Replacing your home’s weather-worn or damaged siding can increase your home’s value, curb appeal, and safety.
        </p>
      </BodySection>
      <BodySection linkRoute='/our-work' styleClasses='background-color-primary color-white' sectionTitle='Our Work' linkText='View Gallery'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <p className='padding-x-standard'>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Let 3RD Generation Construction transform your current space into the home of your dreams.
        </p>
      </BodySection>
      <BodySection styleClasses='color-primary padding-x-standard' sectionTitle='Materials'>
        <p>
          We're proud to use trusted quality materials that give you peace of mind.
        </p>
        <p className='p--top-spacing p--bottom-margin-40 p--bottom-margin-100'>
          Third Generation Construction uses dependable and affordable products to ensure your project is secure,
          beautiful, and reliable.
        </p>
        <VendorSection vendors={vendors}/>
      </BodySection>
    </>
  )
}

export default Siding
