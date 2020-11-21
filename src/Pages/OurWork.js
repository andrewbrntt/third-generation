import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import BodySection from '../Components/BodySection'
import BodyHeader from '../Components/BodyHeader'
import { accreditationSites } from '../DataObjects/socialMediaData'
import ReviewList from '../Components/ReviewList'
import ImageGallery from '../Components/ImageGallery/ImageGallery'
import AccreditedSitesSection from '../Components/AccreditedSitesSection'
import { routesData } from '../DataObjects/routes'
import { randomReviews } from '../DataObjects/reviewsData'
import { useImagesCDNAllImages } from '../Helpers/ImageCDN/useImageCDN'

const OurWork = () => {
  const [imageGallerySections, setImageGallerySections] = useState(null)

  useImagesCDNAllImages(setImageGallerySections)

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | Our Work</title>
        <meta name="description" content="Third Generation Construction Our Work Page"/>
      </Helmet>
      <BodyHeader pageHeader='Our Work' linkText={routesData.contactUs.routeName} heroImageName='our-work'
                  linkRoute={routesData.contactUs.routeTo}>
        <p>
          Third Generation Construction uses affordable, quality products to convert mundane spaces into beautiful homes and guarantee well-built projects that ensure customer satisfaction.
        </p>
        <p className='p--top-spacing'>
          View our gallery to see the beautiful results of our work and dramatic transformations.
        </p>
      </BodyHeader>
      <BodySection styleClasses='color-primary' sectionTitle='Gallery'>
        <ImageGallery gallerySections={imageGallerySections}/>
      </BodySection>
      <BodySection linkRoute='/reviews' linkText='Reviews'
                   styleClasses='padding-x-standard body-section__reviews-section--padding background-color-primary color-white body-section--width-full'
                   sectionTitle='Reviews'>
        <div className='desktop__p--margin-bottom-80'>
          <ReviewList containerClasses='background-color-primary' reviewClasses='background-color-white color-primary'
                      reviewsList={randomReviews}/>
        </div>
      </BodySection>
      <BodySection>
        <AccreditedSitesSection containerStyleClasses='body-section--width-965 desktop--margin-bottom-0'
                                accreditationSites={accreditationSites}/>
      </BodySection>
    </>
  )
}
export default OurWork
