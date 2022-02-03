import React, { useLayoutEffect, useRef, useReducer } from 'react'
import ImageGallerySectionHero from './ImageGallerySectionHero'
import createPhaseThumbnails from './createPhaseThumbnails'
import { GALLERY_REDUCER_ACTIONS } from '../../Helpers/GLOBAL_DEFS'
import imageGalleryReducer from '../ImageGallery/imageGalleryReducer'
import createThumbnails from '../../Helpers/ImageCDN/createThumbnails'
import createHeroImage from './createHeroImage'
import createModalImages from '../../Helpers/ImageCDN/createModalImages'
import ImageGroups from './ImageGroups'
import ImageGalleryModal from './ImageGalleryModal'

const initState = {
  isModalOpen: false,
  selectedImageIndex: -1,
  heroImage: {},
  galleryThumbnailImages: [],
  galleryModalImages: []
}

const ImageGallerySection = ({ title, sectionImages, isSection }) => {

  const ImageGallerySectionContainer = useRef(null)

  const [state, dispatch] = useReducer(imageGalleryReducer, initState, initState => initState)

  const onImageClick = (e, imageInfo) => {

    e.preventDefault()

    const selectedImageIndex = state.galleryModalImages.findIndex(image => image.order === imageInfo.order)

    dispatch({ type: GALLERY_REDUCER_ACTIONS.CURRENT_INDEX, payload: selectedImageIndex })
    dispatch({ type: GALLERY_REDUCER_ACTIONS.MODAL_STATE, payload: true })

  }

  const closeModal = () => {
    dispatch({ type: GALLERY_REDUCER_ACTIONS.MODAL_STATE, payload: false })
  }

  useLayoutEffect(() => {

    if (sectionImages.images && sectionImages.images.length > 0) {
      let imageThumbnails

      const hero = createHeroImage(sectionImages.images)
      let modalImages = createModalImages(sectionImages.images, hero)

      // Check to see if it is different
      if (hero && JSON.stringify(hero) !== JSON.stringify(state.heroImage)) {
        dispatch({ type: GALLERY_REDUCER_ACTIONS.HERO_IMAGE, payload: hero })
      }

      if (sectionImages.phases) {
        imageThumbnails = createPhaseThumbnails(sectionImages.images)
      } else {
        imageThumbnails = createThumbnails(sectionImages.images)
      }

      // Check to see if the thumbnails have changed
      if (JSON.stringify(imageThumbnails) !== JSON.stringify(state.galleryThumbnailImages)) {
        dispatch({ type: GALLERY_REDUCER_ACTIONS.THUMBNAILS, payload: imageThumbnails })
      }

      // Check to see if the modal images have changed
      if (JSON.stringify(modalImages) !== JSON.stringify(state.galleryModalImages)) {
        dispatch({ type: GALLERY_REDUCER_ACTIONS.MODAL_IMAGES, payload: modalImages })
      }
    }
  }, [sectionImages, state.heroImage])

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
        { state.heroImage && <ImageGallerySectionHero onImageClick={ onImageClick } heroImage={ state.heroImage }/> }
        <div ref={ ImageGallerySectionContainer } className="image-gallery-section__img-container">
          <ImageGroups galleryThumbnailImages={state.galleryThumbnailImages} onImageClick={onImageClick}/>
        </div>
      </div>
    </>
  )
}

export default ImageGallerySection
