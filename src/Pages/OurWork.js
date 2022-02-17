import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import BodySection from '../Components/BodySection'
import BodyHeader from '../Components/BodyHeader'
import { accreditationSites } from '../DataObjects/socialMediaData'
import ReviewList from '../Components/ReviewList'
import AccreditedSitesSection from '../Components/AccreditedSitesSection'
import { routesData } from '../DataObjects/routes'
import { randomReviews } from '../DataObjects/reviewsData'
import getImageGroup from '../Helpers/ImageCDN/getImageGroup'
import toTitleCase from '../Helpers/toTitleCase'
import FullGallery from '../Components/ImageGallery/FullGallery'

const OurWork = ({ galleryName }) => {

  const [imageGallerySections, setImageGallerySections] = useState(null)

  useEffect(() => {
    const galleryImageGroup = getImageGroup(galleryName)

    galleryImageGroup
      .then(res => {
        setImageGallerySections(res)
      })

  }, [galleryName])

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | {`${toTitleCase(galleryName)} Gallery`}</title>
        <meta name="description" content={`Third Generation Construction ${toTitleCase(galleryName)} Gallery Page`}/>
      </Helmet>
      <BodyHeader pageHeader={`${toTitleCase(galleryName)} Gallery`} linkText={ routesData.contactUs.routeName } heroImageName="our-work"
                  linkRoute={ routesData.contactUs.routeTo }>
        <p>
          Third Generation Construction uses affordable, quality products to convert mundane spaces into beautiful homes
          and guarantee well-built projects that ensure customer satisfaction.
        </p>
        <p className="p--top-spacing">
          View our gallery to see the beautiful results of our work and dramatic transformations.
        </p>
      </BodyHeader>
      <BodySection styleClasses="color-primary">
        {galleryName === 'kitchen' && <h3 className="image-gallery-section__title">Finished Project</h3>}
        <FullGallery imageGallerySections={imageGallerySections}/>
        {/*{imageGalleryPhotos && <ImageGallerySection sectionImages={imageGalleryPhotos}/>}*/}
      </BodySection>
      <BodySection linkRoute="/reviews" linkText="Reviews"
                   styleClasses="padding-x-standard body-section__reviews-section--padding background-color-primary color-white body-section--width-full"
                   sectionTitle="Reviews">
        <div className="desktop__p--margin-bottom-80">
          <ReviewList containerClasses="background-color-primary" reviewClasses="background-color-white color-primary"
                      reviewsList={ randomReviews }/>
        </div>
      </BodySection>
      <BodySection>
        <AccreditedSitesSection containerStyleClasses="body-section--width-965 desktop--margin-bottom-0"
                                accreditationSites={ accreditationSites }/>
      </BodySection>
    </>
  )
}
export default OurWork
