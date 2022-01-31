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
  MODAL_STATE: 'modal_state',
  CURRENT_INDEX: 'image_index',
  HERO_IMAGE: 'hero_image',
  THUMBNAILS: 'thumbnails',
  MODAL_IMAGES: 'modal_images'
}

const initState = {
  isModalOpen: false,
  selectedImageIndex: -1,
  heroImage: {},
  galleryThumbnailImages: [],
  galleryModalImages: []
}

const imageGalleryReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTIONS.MODAL_STATE:
      return { ...state, isModalOpen: action.payload }
    case REDUCER_ACTIONS.CURRENT_INDEX:
      return { ...state, selectedImageIndex: action.payload }
    case REDUCER_ACTIONS.HERO_IMAGE:
      return { ...state, heroImage: action.payload }
    case REDUCER_ACTIONS.THUMBNAILS:
      return { ...state, galleryThumbnailImages: action.payload }
    case REDUCER_ACTIONS.MODAL_IMAGES:
      return { ...state, galleryModalImages: action.payload }
    default:
      return state
  }
}

const ImageGallerySection = ({ title, sectionImages, isSection }) => {

  const ImageGallerySectionContainer = useRef (null)

  const [state, dispatch] = useReducer (imageGalleryReducer, initState, initState => initState)

  const onImageClick = (e) => {
    e.preventDefault ()
    const element = e.target
    const currentElementPublicId = derivedPublicId (element.src)
    let imageName = ''
    if (currentElementPublicId.includes (GLOBAL_DEFS.HERO)) {
      imageName = getImageNameFromPublicId (currentElementPublicId, false)
    } else {
      imageName = getImageNameFromPublicId (currentElementPublicId, true)
    }
    const selectedImageIndex = state.galleryModalImages.findIndex (image => image.src.includes (imageName))
    dispatch ({ type: REDUCER_ACTIONS.CURRENT_INDEX, payload: selectedImageIndex })
    dispatch ({ type: REDUCER_ACTIONS.MODAL_STATE, payload: true })

  }

  const closeModal = () => {
    dispatch ({ type: REDUCER_ACTIONS.MODAL_STATE, payload: false })
  }

  useLayoutEffect (() => {

    if (sectionImages.images && sectionImages.images.length > 0) {
      const hero = createHeroImage (sectionImages.images)

      // Check to see if it is different
      if (hero && JSON.stringify (hero) !== JSON.stringify (state.heroImage)) {
        dispatch ({ type: REDUCER_ACTIONS.HERO_IMAGE, payload: hero })
      }

      let imageThumbnails
      let modalImages

      if (sectionImages.phases) {
        imageThumbnails = createPhaseThumbnails (sectionImages.images)
      } else {
        imageThumbnails = createThumbnails (sectionImages.images)

      }
      modalImages = createModalImages (sectionImages.images, hero)
      // Check to see if the thumbnails have changed
      if (JSON.stringify (imageThumbnails) !== JSON.stringify (state.galleryThumbnailImages)) {
        dispatch ({ type: REDUCER_ACTIONS.THUMBNAILS, payload: imageThumbnails })
      }

      // Check to see if the modal images have changed
      if (JSON.stringify (modalImages) !== JSON.stringify (state.galleryModalImages)) {
        dispatch ({ type: REDUCER_ACTIONS.MODAL_IMAGES, payload: modalImages })
      }
    }
  }, [sectionImages, state.heroImage])

  const ImageGroups = () => {
    if (state.galleryThumbnailImages && state.galleryThumbnailImages[0] && ( state.galleryThumbnailImages[0].beforeImages || state.galleryThumbnailImages[0].duringImages || state.galleryThumbnailImages[0].afterImages )) {
      return state.galleryThumbnailImages.map (currentGroup => {
        return <ImageGalleryPhaseGroup key={ shortId.generate () } onImageClick={ onImageClick }
                                       currentImageGroup={ currentGroup }/>
      })
    } else {
      return (
        <ImageGallerySingleImageGroup onImageClick={ onImageClick } groupImages={ state.galleryThumbnailImages }/>
      )
    }
  }

  return (
    <>
      { state.isModalOpen &&
        <ImageGalleryModal
          isModalOpen={ state.isModalOpen }
          handleModalClose={ closeModal }
          gallerySectionImages={ state.galleryModalImages }
          initialImageIndex={ state.selectedImageIndex }
        /> }
      <div className="image-gallery-section__container">
        { !isSection && <span className="image-gallery-section__title">{ title }</span> }
        {state.heroImage && <ImageGallerySectionHero onImageClick={onImageClick} heroImage={state.heroImage} />}
        <div ref={ ImageGallerySectionContainer } className="image-gallery-section__img-container">
          <ImageGroups/>
        </div>
      </div>
    </>
  )
}

export default ImageGallerySection
