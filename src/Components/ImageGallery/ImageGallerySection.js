import React, { useLayoutEffect, useMemo, useRef, useReducer } from 'react'
import shortId from 'shortid'

import derivedPublicId from '../../Helpers/ImageCDN/derivePublicId'
import getImageNameFromPublicId from '../../Helpers/ImageCDN/getImageNameFromPublicId'
import ImageGallerySectionHero from './ImageGallerySectionHero'
import createPhaseThumbnails from './createPhaseThumbnails'
import GLOBAL_DEFS from '../../Helpers/GLOBAL_DEFS'
import createThumbnails from '../../Helpers/ImageCDN/createThumbnails'
import createHeroImage from './createHeroImage'
import createModalImages from '../../Helpers/ImageCDN/createModalImages'
import ImageGallerySingleImageGroup from './ImageGallerySingleImageGroup'
import ImageGalleryPhaseGroup from './ImageGalleryPhaseGroup'
import ImageGalleryModal from './ImageGalleryModal'

const REDUCER_ACTIONS = {
  CURRENT_IMAGE: 'current_image',
  PREVIOUS_ARROW: 'previous_arrow',
  NEXT_ARROW: 'next_arrow',
  CURRENT_INDEX: 'current_index'
}

const imageGalleryReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTIONS.CURRENT_IMAGE:
      return { ...state, currentImage: action.payload }
    case REDUCER_ACTIONS.PREVIOUS_ARROW:
      return { ...state, previousArrowVisible: action.payload }
    case REDUCER_ACTIONS.NEXT_ARROW:
      return { ...state, nextArrowVisible: action.payload }
    case REDUCER_ACTIONS.CURRENT_INDEX:
      return { ...state, currentImageIndex: action.payload }
    default:
      return state
  }
}



const ImageGallerySection = ({ title, sectionImages, isSection }) => {

  const ImageGallerySectionContainer = useRef(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [heroImage, setHeroImage] = useState(null)
  const [galleryThumbnailImages, setGalleryThumbnailImages] = useState(null)
  const [galleryModalImages, setGalleryModalImages] = useState([])

  const onImageClick = (e) => {
    e.preventDefault()
    const element = e.target
    const currentElementPublicId = derivedPublicId(element.src)
    let imageName = ''
    if (currentElementPublicId.includes(GLOBAL_DEFS.HERO)) {
      imageName = getImageNameFromPublicId(currentElementPublicId, false)
    } else {
      imageName = getImageNameFromPublicId(currentElementPublicId, true)
    }
    const selectedImageIndex = galleryModalImages.findIndex(image => image.src.includes(imageName))
    setSelectedImageIndex(selectedImageIndex)
    setIsModalOpen(true)
  }

  useLayoutEffect(() => {
    if (sectionImages.images && sectionImages.images.length > 0) {
      const hero = createHeroImage(sectionImages.images)
      // Check to see if it is different
      if (hero && JSON.stringify(hero) !== JSON.stringify(heroImage)) {
        setHeroImage(hero)
      }

      let imageThumbnails
      let modalImages

      if (sectionImages.phases) {
        imageThumbnails = createPhaseThumbnails(sectionImages.images)
      } else {
        imageThumbnails = createThumbnails(sectionImages.images)

      }
      modalImages = createModalImages(sectionImages.images, hero)
      // Check to see if the thumbnails have changed
      if (JSON.stringify(imageThumbnails) !== JSON.stringify(galleryThumbnailImages)) {
        setGalleryThumbnailImages(imageThumbnails)
      }

      // Check to see if the modal images have changed
      if (JSON.stringify(modalImages) !== JSON.stringify(galleryModalImages)) {
        setGalleryModalImages(modalImages)
      }
    }
  }, [sectionImages, heroImage])

  const ImageGroups = () => {
    if (galleryThumbnailImages && galleryThumbnailImages[0] && (galleryThumbnailImages[0].beforeImages || galleryThumbnailImages[0].duringImages || galleryThumbnailImages[0].afterImages)) {
      return galleryThumbnailImages.map(currentGroup => {
        return <ImageGalleryPhaseGroup key={shortId.generate()} onImageClick={onImageClick}
                                       currentImageGroup={currentGroup}/>
      })
    } else {
      return (
        <ImageGallerySingleImageGroup onImageClick={onImageClick} groupImages={galleryThumbnailImages}/>
      )
    }
  }

  const GallerySection = useMemo(() => {
    return (
      // <LazyLoad>
      <div className='image-gallery-section__container'>
        {!isSection && <span className='image-gallery-section__title'>{title}</span>}
        {heroImage && <ImageGallerySectionHero onImageClick={onImageClick} heroImage={heroImage}/>}
        <div ref={ImageGallerySectionContainer} className='image-gallery-section__img-container'>
          <ImageGroups/>
        </div>
      </div>
      // </LazyLoad>
    )
  }, [heroImage, isSection, title])

  return (
    <>
      {isModalOpen &&
      <ImageGalleryModal
        isModalOpen={isModalOpen}
        handleModalClose={setIsModalOpen}
        gallerySectionImages={galleryModalImages}
        initialImageIndex={selectedImageIndex}
      />}
      {GallerySection}
    </>
  )
}

export default ImageGallerySection
