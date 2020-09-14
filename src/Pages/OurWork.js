import React from 'react'
import BodySection from '../components/BodySection'
import BodyHeader from '../components/BodyHeader'
import { mockGallerySections, reviewSites } from '../DataObjects/mockData'
import ReviewList from '../components/ReviewList'
import ImageGallery from '../components/ImageGallery'
import ReviewSitesSection from '../components/ReviewSitesSection'

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
      <BodySection styleClasses='color-primary' sectionTitle='Gallery'>
        <ImageGallery gallerySections={mockGallerySections} />
      </BodySection>
      <BodySection linkRoute='/reviews' linkText='Reviews' styleClasses='padding-x-standard body-section__reviews-section--padding background-color-primary color-white body-section--width-full' sectionTitle='Reviews'>
        <div className='desktop__p--margin-bottom-80'>
        <ReviewList styleClasses='background-color-white color-primary' randomCount='5'/>
        </div>
        </BodySection>
      <BodySection>
      <ReviewSitesSection containerStyleClasses='body-section--width-965 desktop--margin-bottom-0' reviewSites={reviewSites}/>
      </BodySection>
    </>
  )
}
export default OurWork
