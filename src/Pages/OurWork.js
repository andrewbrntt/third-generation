import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import shortId from 'shortid'
import BodySection from '../Components/BodySection'
import BodyHeader from '../Components/BodyHeader'
import { accreditationSites } from '../DataObjects/socialMediaData'
import ReviewList from '../Components/ReviewList'
import AccreditedSitesSection from '../Components/AccreditedSitesSection'
import { routesData } from '../DataObjects/routes'
import { randomReviews } from '../DataObjects/reviewsData'
import getImageGroup from '../Helpers/ImageCDN/getImageGroup'
import GLOBAL_DEFS from '../Helpers/GLOBAL_DEFS'
import ImageGallerySection from '../Components/ImageGallery/ImageGallerySection'

const OurWork = () => {
  const [imageGallerySections, setImageGallerySections] = useState(null)

  useEffect(() => {
    let allGroupSections = []

    const galleryImageGroup1 = getImageGroup(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_1)
    const galleryImageGroup2 = getImageGroup(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_2)
    const galleryImageGroup3 = getImageGroup(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_3)
    const galleryImageGroup4 = getImageGroup(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_4)
    const galleryImageGroup5 = getImageGroup(GLOBAL_DEFS.IMAGE_GROUPS.PROJECT_5)
    Promise.all([galleryImageGroup1, galleryImageGroup2, galleryImageGroup3, galleryImageGroup4, galleryImageGroup5])
      .then(res => {
        allGroupSections.push(res[0])
        allGroupSections.push(res[1])
        allGroupSections.push(res[2])
        allGroupSections.push(res[3])
        allGroupSections.push(res[4])

        setImageGallerySections(allGroupSections)
      })
  }, [])

  const ImageGalleryGroups = () => {
    if (imageGallerySections && imageGallerySections.length > 0) {
      return imageGallerySections.map(currentImageSection => {
        return (
          <ImageGallerySection key={shortId.generate()} sectionImages={currentImageSection}/>
        )
      })
    }

    return null
  }

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
          Third Generation Construction uses affordable, quality products to convert mundane spaces into beautiful homes
          and guarantee well-built projects that ensure customer satisfaction.
        </p>
        <p className='p--top-spacing'>
          View our gallery to see the beautiful results of our work and dramatic transformations.
        </p>
      </BodyHeader>
      <BodySection styleClasses='color-primary' sectionTitle='Gallery'>
        <ImageGalleryGroups/>
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
