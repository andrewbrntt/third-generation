import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import SidingInfographic from '../Components/SidingInfographic'
import BodySection from '../Components/BodySection'
import VendorSection from '../Components/VendorSection'

import { vendors } from '../Helpers/vendorAssetLibrary'
import DesktopBodySectionHeader from '../Components/DesktopBodySectionHeader'
import getStockArtImage from '../Helpers/ImageCDN/getStockArtImage'
import GLOBAL_DEFS from '../Helpers/GLOBAL_DEFS'
import DynamicImage from '../Components/DynamicImage'

const Siding = () => {

  const [heroImage, setHeroImage] = useState(null)
  const [ourWorkSectionImage, setOurWorkSectionImage] = useState(null)

  useEffect(() => {
    const sidingHero = getStockArtImage(GLOBAL_DEFS.PAGE_HEROS.SIDING)
    const ourWorkHero = getStockArtImage(GLOBAL_DEFS.PAGE_HEROS.OUR_WORK_SECTION)

    Promise.all([sidingHero, ourWorkHero])
      .then(res => {
        setHeroImage(res[0])
        setOurWorkSectionImage(res[1])
      })
  }, [])

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | Siding</title>
        <meta name="description" content="Third Generation Construction Siding Page"/>
      </Helmet>
      <BodySection linkRoute='/contact' styleClasses='color-primary body-section--mobile-display'
                   pageHeaderStyleClasses='body-section--mobile-display' pageHeader='Siding' linkText='Contact Us'>
        {heroImage &&
        <DynamicImage styleClasses='body-section__hero-img' imageObject={heroImage}/>}
        <p className='padding-x-standard'>
          Durable siding, energy-efficient doors, and windows are all part of what makes your home beautiful.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Third Generation Construction is here to help increase your curb appeal and secure your home.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Our team is well-trained to handle fiber, vinyl, steel, and cement siding.
        </p>
      </BodySection>
      <DesktopBodySectionHeader linkText='Contact Us' linkRoute='/contact' sectionTitle='Siding'
                                heroImage={heroImage}>
        <div className='desktop-header--width-492 desktop__p--margin-bottom-50'>
          <p className='desktop--margin-0'>
            Durable siding, energy-efficient doors, and windows are all part of what makes your home beautiful.</p>
          <p className='p--top-spacing'>
            Third Generation Construction is here to help increase your curb appeal and secure your home.
          </p>
          <p className='p--top-spacing'>
            Our team is well-trained to handle fiber, vinyl, steel, and cement siding.
          </p>
        </div>
      </DesktopBodySectionHeader>
      <BodySection linkRoute='/other-photos'
                   styleClasses='background-color-primary color-white padding-x-standard body-section--width-full'
                   sectionTitle='Pros to Siding'
                   linkText='View Gallery'>
        <div className='body-section--width-965 p--margin-bottom-standard'>
          <p>
            Replacing your siding has many benefits, including increasing the value of your home.
          </p>
          <p className='p--top-spacing'>
            A home's siding not only protects your most valuable asset from the harsh Lake Erie weather, but it can also
            play a massive role in your maintenance and utility costs.
          </p>
          <p className='p--top-spacing body-section--width-full'>
            Ensure your house is protected and economically efficient by scheduling a free inspection and consultation
            with our team today.
          </p>
        </div>
        <div className='p--margin-bottom-standard'>
          <SidingInfographic/>
        </div>
      </BodySection>
      <BodySection styleClasses='color-primary padding-x-standard body-section--width-965'
                   sectionTitle='Outlast the Elements' linkRoute='/contact' linkText='Contact Us'>
        <div className='p--margin-bottom-standard'>
          <p>
            Extreme weather ranging from scorching, humid summers to frigid, icy winters wreaks havoc on Lorain County
            homes.
          </p>
          <p className='p--top-spacing'>
            Replacing your home’s weather-worn or damaged siding can increase its value, curb appeal, and safety.
          </p>
        </div>
      </BodySection>
      <BodySection linkRoute='/other-photos' styleClasses='background-color-primary color-white body-section--width-full'
                   sectionTitle='Our Work' linkText='View Gallery'>
        {ourWorkSectionImage &&
        <DynamicImage styleClasses='body-section__hero-img' imageObject={ourWorkSectionImage}/>}
        <div className='p--margin-bottom-standard'>
          <p className='padding-x-standard body-section--width-965'>
            We're proud of our work and love showing it off.
          </p>
          <p className='p--top-spacing padding-x-standard body-section--width-965'>
            Let Third Generation Construction transform your current space into the home of your dreams.
          </p>
        </div>
      </BodySection>
      <BodySection styleClasses='color-primary padding-x-standard body-section--width-965' sectionTitle='Our Materials'>
        <p>
          We use trusted quality materials to give you peace of mind.
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
