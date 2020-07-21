import React from 'react'
import BodySection from '../components/BodySection'
import AboutImage from '../assets/group-people.jpg'
import BeforeImage from '../assets/after-temp.jpg'
import AfterImage from '../assets/before-temp.jpg'
import BeforeAfterGallerySection from '../components/BeforeAfterGallerySection'
import AlliedLogo from '../assets/vendor-assets/allied/allied-logo.png'
import CaterLogo from '../assets/vendor-assets/carter/carterlumber.png'
import GAFLogo from '../assets/vendor-assets/gaf/gaf-logo.png'
import Tools from '../assets/icon-tools.svg'

const beforeAfterImages = [
  { beforeImage: BeforeImage, afterImage: AfterImage },
  { beforeImage: BeforeImage, afterImage: AfterImage },
  { beforeImage: BeforeImage, afterImage: AfterImage }
]

const Remodel = () => {
  return (
    <>
      <BodySection buttonText='Contact Us' pageHeader='Remodel'>
        <img className='remodel__hero--img' src={AboutImage}/>
        <p>
          Whether you’re updating your kitchen or upgrading your basement into the ultimate man cave, Third Generation
          Construction is here.
        </p>
        <p className='p--top-spacing'>
          We pride ourselves in using quality products to create beautiful projects at an
          affordable price.
        </p>
      </BodySection>
      <BodySection styleClasses='background-color-primary color-white' title='Free Consultation'
                   iconName={Tools} buttonText='Contact Us'>
        <p>
          You have questions.
        </p>
        <p className='p--top-spacing'>
          We have answers.
        </p>
        <p className='p--top-spacing'>
          Schedule a free consultation and let us help you turn your current house into the home you're dreaming of.
        </p>
      </BodySection>
      <BodySection buttonText='FAQ' styleClasses='color-primary'>
        <p>Still need to do a little more research before committing?</p>
        <p className='p--top-spacing'>No problem. Check out our Home Remodel FAQ today.</p>
      </BodySection>
      <BodySection styleClasses='background-color-primary color-white' title='Our Work' buttonText='View Gallery'>
        <p>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing p--bottom-margin-40'>Let Third Generation Construction transform your current
          space into the home of your dreams.</p>
        <BeforeAfterGallerySection galleryImages={beforeAfterImages}/>
      </BodySection>
      <BodySection title='Our Suppliers' styleClasses='color-primary'>
        <p>
          We're proud to be local and support local.
        </p>
        <p className='p--top-spacing p--bottom-margin-40'>
          Third Generation Construction uses proven products from trusted local suppliers to offer affordable home
          remodeling projects.
        </p>
        <div className='remodel__vendor-section--alignment'>
          <div className='remodel__vendor-section'>
            <img src={CaterLogo} alt='Carter Lumber Logo' className='remodel__vendor-item--margin-bottom'/>
            <img src={GAFLogo} className='remodel__vendor-item--margin-bottom'/>
            <img src={AlliedLogo} />
          </div>
        </div>
      </BodySection>
    </>
  )
}

export default Remodel
