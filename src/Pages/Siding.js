import React from 'react'
import SidingInfographic from '../components/SidingInfographic'
import BodySection from '../components/BodySection'
import VendorSection from '../components/VendorSection'
import AboutImage from '../assets/group-people.jpg'
import CaterLogo from '../assets/vendor-assets/carter/carterlumber.png'
import GAFLogo from '../assets/vendor-assets/gaf/gaf-logo.png'
import AlliedLogo from '../assets/vendor-assets/allied/allied-logo.png'
import DecorativeImage from '../components/DecorativeImage'

const Siding = () => {

  const vendors = [
    { logo: CaterLogo, altText: 'Carter Lumber Logo' },
    { logo: GAFLogo, altText: 'GAF Roofing Shingles and Materials Logo' },
    { logo: AlliedLogo, altText: 'Allied Roofing Supply Company Logo' }
  ]

  return (
    <>
      <BodySection pageHeader='Siding' linkText='Contact Us'>
        <DecorativeImage className='remodel__hero--img' src={AboutImage}/>
        <p>Durable siding and energy-efficient doors and windows are all part of what makes your home beautiful.</p>
        <p className='p--top-spacing'>
          Third Generation Construction is here to help increase your curb appeal and secure your home.
        </p>
        <p className='p--top-spacing'>
          Our team are well-trained to handle fiber, vinyl, steel, and cement siding.
        </p>
      </BodySection>
      <BodySection styleClasses='background-color-primary color-white' paddingXRem='0.5' sectionTitle='Pros to Siding'
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
        <SidingInfographic/>
      </BodySection>
      <BodySection styleClasses='color-primary' paddingXRem='0.5' sectionTitle='Outlast the Elements' linkText='FAQ'>
        <p>
          Extreme weather ranging from scorching, humid summers to frigid, icy winters wreaks havoc on Lorain County
          homes.
        </p>
        <p className='p--top-spacing'>
          Replacing your home’s weather-worn or damaged siding can increase your home’s value, curb appeal, and safety.
        </p>
      </BodySection>
      <BodySection styleClasses='background-color-primary color-white' sectionTitle='Our Work' linkText='View Gallery'>
        <DecorativeImage className='remodel__hero--img' src={AboutImage}/>
        <p>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing'>
          Let 3RD Generation Construction transform your current space into the home of your dreams.
        </p>
      </BodySection>
      <BodySection styleClasses='color-primary' sectionTitle='Materials' paddingXRem='0.5'>
        <p>
          We're proud to use trusted quality materials that give you peace of mind.
        </p>
        <p className='p--top-spacing p--bottom-margin-40'>
          Third Generation Construction uses dependable and affordable products to ensure your project is secure, beautiful, and reliable.
        </p>
        <VendorSection vendors={vendors} />
      </BodySection>
    </>
  )
}

export default Siding
