import React from 'react'
import BodySection from '../components/BodySection'
import VendorSection from '../components/VendorSection'
import { alliedLogo, carterLogo, gafLogo } from '../helpers/vendorAssetLibrary'
import Tools from '../assets/icon-tools.svg'
import { beforeAfterMockData } from '../helpers/mockData'
import DesktopBodySectionHeader from '../components/DesktopBodySectionHeader'

const galleryImages = beforeAfterMockData

const vendors = [
  { logo: carterLogo, altText: 'Carter Lumber Logo' },
  { logo: gafLogo, altText: 'GAF Roofing Shingles and Materials Logo' },
  { logo: alliedLogo, altText: 'Allied Roofing Supply Company Logo' }
]

const Remodel = () => {
  return (
    <>
      <DesktopBodySectionHeader/>
      <BodySection linkRoute='/contact'
                   styleClasses='background-color-primary color-white'
                   sectionTitle='Free Consultation'
                   iconName={Tools} linkText='Contact Us'>
        <p>
          You have questions.
        </p>
        <p className='p--top-spacing'>
          We have answers.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Schedule a free consultation and let us help you turn your current house into the home you're dreaming of.
        </p>
      </BodySection>
      <BodySection linkRoute='/contact' sectionTitle='24-Hour Emergency Service' linkText='Contact Us'
                   styleClasses='color-primary padding-x-standard'>
        <p>Life happens.</p>
        <p className='p--top-spacing'> Third Generation Construction is here.</p>
        <p className='p--top-spacing'>We are available 24/7 to help you fix whatever goes wrong in your home.</p>
      </BodySection>
      <BodySection
        linkRoute='/our-work'
        styleClasses='background-color-primary color-white'
        sectionTitle='Our Work'
        linkText='View Gallery'>
        <p className='padding-x-standard'>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing p--bottom-margin-40 padding-x-standard'>
          Let Third Generation Construction transform your current space into the home of your dreams.
        </p>
        {/*<BeforeAfterGallerySection galleryImages={galleryImages}/>*/}
      </BodySection>
      <BodySection sectionTitle='Our Suppliers' styleClasses='color-primary'>
        <p className='padding-x-standard'>
          We're proud to be local and support local.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          Third Generation Construction uses proven products from trusted local suppliers to offer affordable home
          remodeling projects.
        </p>
        <div className='vendor-section--alignment'>
          <VendorSection vendors={vendors}/>
        </div>
      </BodySection>
    </>
  )
}

export default Remodel
