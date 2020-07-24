import React from 'react'
import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import BeforeAfterGallerySection from '../components/BeforeAfterGallerySection'
import BeforeImage from '../assets/after-temp.jpg'
import AfterImage from '../assets/before-temp.jpg'
import ReviewList from '../components/ReviewList'

const OurWork = () => {

  const beforeAfterImages = [
    { beforeImage: BeforeImage, afterImage: AfterImage },
    { beforeImage: BeforeImage, afterImage: AfterImage },
    { beforeImage: BeforeImage, afterImage: AfterImage },
    { beforeImage: BeforeImage, afterImage: AfterImage },
    { beforeImage: BeforeImage, afterImage: AfterImage },
    { beforeImage: BeforeImage, afterImage: AfterImage },
    { beforeImage: BeforeImage, afterImage: AfterImage }
  ]

  return (
    <>
      <BodyHeader pageHeader='Our Work' buttonText='Contact Us'>
        <p>
          Third Generation Construction uses affordable, quality products to convert mundane spaces into beautiful
          homes and guarantee well-built projects that ensure customer satisfaction.
        </p>
        <p className='p--top-spacing'>
          View our gallery to see dramatic
          before-and-after transformations.
        </p>
      </BodyHeader>
      <BodySection styleClasses='color-primary' sectionTitle='Gallery'>
        <BeforeAfterGallerySection galleryImages={beforeAfterImages}/>
      </BodySection>
      <BodySection buttonText='Reviews' styleClasses='color-primary' sectionTitle='Reviews' paddingXRem='0.5'>
        <ReviewList randomCount='5'/>
      </BodySection>
    </>
  )
}

export default OurWork
