import React from 'react'
import BodySection from '../components/BodySection'
import VendorSection from '../components/VendorSection'
import AboutImage from '../assets/group-people.jpg'
import { alliedLogo, carterLogo, gafLogo } from '../helpers/vendorAssetLibrary'
import Tools from '../assets/icon-tools.svg'
import DecorativeImage from '../components/DecorativeImage'
import { mockGalleryImageObjects1 } from '../helpers/mockData'
import DesktopBodySectionHeader from '../components/DesktopBodySectionHeader'
import ImageGallerySection from '../components/ImageGallerySection'

const vendors = [
  { logo: carterLogo, altText: 'Carter Lumber Logo', styleClasses: 'vendor__carter-lumber' },
  { logo: gafLogo, altText: 'GAF Roofing Shingles and Materials Logo', styleClasses: 'vendor__gaf' },
  { logo: alliedLogo, altText: 'Allied Roofing Supply Company Logo', styleClasses: 'vendor__allied' }
]

const Remodel = () => {
  return (
    <>
      <BodySection isMobile={true} linkRoute='/contact' linkText='Contact Us' pageHeader='Remodel'
                   styleClasses='body-section--display remove-padding-x color-primary'>
        <DecorativeImage className='body-section__hero-img' src={AboutImage}/>
        <p className='padding-x-standard'>
          Whether you’re updating your kitchen or upgrading your basement into the ultimate man cave, Third Generation
          Construction is here.
        </p>
        <p className='p--top-spacing padding-x-standard'>
          We pride ourselves in using quality products to create beautiful projects at an
          affordable price.
        </p>
      </BodySection>
      <DesktopBodySectionHeader linkText='Contact Us' linkRoute='/contact' sectionTitle='Remodel'
                                heroImage={AboutImage}>
        <p>
          Whether you’re updating your kitchen or upgrading your basement into the ultimate man cave, Third Generation
          Construction is here.
        </p>
        <p className='p--top-spacing'>
          We pride ourselves in using quality products to create beautiful projects at an
          affordable price.
        </p>
      </DesktopBodySectionHeader>
      <BodySection linkRoute='/contact'
                   styleClasses='body-section__has-line background-color-primary color-white body-section--width-full'
                   sectionTitle='Free Consultation'
                   iconName={Tools} linkText='Contact Us'>
        <p>
          You have questions.
        </p>
        <p className='p--top-spacing p--bottom-margin-40 body-section--width-965'>
          We have answers.
        </p>
        <p className='p--top-spacing padding-x-standard body-section--width-965'>
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
        styleClasses='background-color-primary color-white body-section--width-full'
        sectionTitle='Our Work'
        linkText='View Gallery'>
        <p className='padding-x-standard body-section--width-965'>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing p--bottom-margin-40 padding-x-standard body-section--width-965'>
          Let Third Generation Construction transform your current space into the home of your dreams.
        </p>
        <ImageGallerySection title='Booty Sweat' images={mockGalleryImageObjects1} isSection={true}/>
        {/*<BeforeAfterGallerySection galleryImages={galleryImages}/>*/}
      </BodySection>
      <BodySection sectionTitle='Our Suppliers' styleClasses='color-primary body-section--width-965'>
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
