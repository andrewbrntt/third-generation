import React from 'react'
import BodySection from '../components/BodySection'
import BodyHeader from '../components/BodyHeader'
import { mockGallerySections } from '../helpers/mockData'
import ReviewList from '../components/ReviewList'
import ImageGallery from '../components/ImageGallery'

const Test = () => {
  return (
    <>
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
      <BodySection styleClasses='color-primary padding-x-standard' sectionTitle='Gallery'>
        <ImageGallery gallerySections={mockGallerySections} />
      </BodySection>
      <BodySection linkText='Reviews' styleClasses='color-primary' sectionTitle='Reviews'>
        <ReviewList randomCount='5'/>
      </BodySection>
    </>
  )
}
export default Test
