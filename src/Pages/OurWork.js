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
import ImageGallerySection from '../Components/ImageGallery/ImageGallerySection'
import toTitleCase from '../Helpers/toTitleCase'

const OurWork = ({gallery}) => {

  const [imageGalleryPhotos, setImageGalleryPhotos] = useState(null)

  useEffect(() => {

    const galleryImageGroup = getImageGroup(gallery)

    galleryImageGroup
      .then(res => {
        setImageGalleryPhotos(res)
      })

  }, [gallery])

  // const ImageGalleryGroups = () => {
  //   if (imageGallerySections && imageGallerySections.length > 0) {
  //     return imageGallerySections.map(currentImageSection => {
  //       return (
  //         <ImageGallerySection key={ shortId.generate() } sectionImages={ currentImageSection }/>
  //       )
  //     })
  //   }
  //
  //   return null
  // }

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | {`${toTitleCase(gallery)} Gallery`}</title>
        <meta name="description" content={`Third Generation Construction ${toTitleCase(gallery)} Gallery Page`}/>
      </Helmet>
      <BodyHeader pageHeader={`${toTitleCase(gallery)} Gallery`} linkText={ routesData.contactUs.routeName } heroImageName="our-work"
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
        {/*<ImageGalleryGroups />*/}
        {imageGalleryPhotos && <ImageGallerySection sectionImages={imageGalleryPhotos}/>}

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
