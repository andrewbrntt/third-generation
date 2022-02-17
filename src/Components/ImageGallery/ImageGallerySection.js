import React, { useEffect, useRef, useReducer } from 'react'
import { GALLERY_REDUCER_ACTIONS } from '../../Helpers/GLOBAL_DEFS'
import imageGalleryReducer from '../ImageGallery/imageGalleryReducer'
import createThumbnails from '../../Helpers/ImageCDN/createThumbnails'
import createModalImages from '../../Helpers/ImageCDN/createModalImages'
import ImageGroupType from './ImageGroupType'
import ImageGalleryModal from './ImageGalleryModal'

const initState = {
  isModalOpen: false,
  selectedImageIndex: -1,
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

  useEffect(() => {

    if (sectionImages.images && sectionImages.images.length > 0) {

      const modalImages = createModalImages(sectionImages.images)

      const imageThumbnails = createThumbnails(sectionImages)

      dispatch({ type: GALLERY_REDUCER_ACTIONS.THUMBNAILS, payload: imageThumbnails })

      dispatch({ type: GALLERY_REDUCER_ACTIONS.MODAL_IMAGES, payload: modalImages })
    }
  }, [sectionImages])

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
        { !isSection && <h3 className="image-gallery-section__title">{ title }</h3> }
        <div ref={ ImageGallerySectionContainer } className="image-gallery-section__img-container">
          <ImageGroupType galleryThumbnailImages={ state.galleryThumbnailImages } onImageClick={ onImageClick }/>
        </div>
      </div>
    </>
  )
}

export default ImageGallerySection
