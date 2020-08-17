import React from 'react'
import ImageGalleryModal from '../components/ImageGalleryModal'
import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import BeforeAfterGallerySection from '../components/BeforeAfterGallerySection'
import { beforeAfterMockData } from '../helpers/mockData'
import ReviewList from '../components/ReviewList'

const Test = () => {

  return (
  <>
    <ImageGalleryModal/>
    <BodyHeader pageHeader='Our Work' linkText='Contact Us'>
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
      <BeforeAfterGallerySection galleryImages={beforeAfterMockData}/>
    </BodySection>
    <BodySection linkText='Reviews' styleClasses='color-primary' sectionTitle='Reviews'>
      <ReviewList randomCount='5'/>
    </BodySection>
  </>
  )
}
export default Test
