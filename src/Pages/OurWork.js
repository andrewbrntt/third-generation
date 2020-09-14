import React from 'react'
import BodySection from '../components/BodySection'
import BodyHeader from '../components/BodyHeader'
import { mockGallerySections } from '../helpers/mockData'
import ReviewList from '../components/ReviewList'
import ImageGallery from '../components/ImageGallery'

const OurWork = () => {
  return (
    <>
      <BodyHeader pageHeader='Our Work' linkText='Contact Us'>
        <div className='p--margin-bottom-standard'>
        <p>
          Third Generation Construction uses affordable, quality products to convert mundane spaces into beautiful
          homes and guarantee well-built projects that ensure customer satisfaction.
        </p>
        <p className='p--top-spacing'>
          View our gallery to see dramatic
          before-and-after transformations.
        </p>
        </div>
      </BodyHeader>
      <BodySection styleClasses='color-primary padding-x-standard' sectionTitle='Gallery'>
        <ImageGallery gallerySections={mockGallerySections} />
      </BodySection>
      <BodySection linkRoute='/reviews' linkText='Reviews' styleClasses='padding-x-standard body-section__reviews-section--padding' sectionTitle='Reviews'>
        <ReviewList styleClasses='background-color-white color-primary' randomCount='5'/>
      </BodySection>
    </>
  )
}
export default OurWork
