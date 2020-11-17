import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react'
import LazyLoad from 'react-lazyload'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Image } from 'cloudinary-react'
import ImageGalleryArrow from './ImageGalleryArrow'
import DynamicImage from '../DynamicImage'

const ImageGalleryModal = ({ styleClasses, initialImageIndex, gallerySectionImages, handleModalClose, isModalOpen }) => {

  const arrows = {
    PREVIOUS: 'previous',
    NEXT: 'next'
  }

  const modalContainer = useRef(null)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [modalPreviousArrowVisible, setModalPreviousArrowVisible] = useState(false)
  const [modalNextArrowVisible, setModalNextArrowVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState({})

  const handleArrowClick = (direction) => {
    if (arrows.PREVIOUS === direction && !isFirstImage()) {
      setCurrentImageIndex(currentImageIndex - 1)
    } else if (arrows.NEXT === direction && !isFinalImage()) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const isFirstImage = useCallback(() => {
    return currentImageIndex === 0 && gallerySectionImages.length > 1
  }, [gallerySectionImages.length, currentImageIndex])

  const isFinalImage = useCallback(() => {
    return currentImageIndex === gallerySectionImages.length - 1 && gallerySectionImages.length > 1
  }, [gallerySectionImages.length, currentImageIndex])

  useLayoutEffect(() => {
    setCurrentImage(gallerySectionImages[currentImageIndex])
    if (isFirstImage()) {
      setModalPreviousArrowVisible(false)
    } else {
      setModalPreviousArrowVisible(true)
    }

    if (isFinalImage()) {
      setModalNextArrowVisible(false)
    } else {
      setModalNextArrowVisible(true)
    }
  }, [currentImageIndex, isFirstImage, isFinalImage, gallerySectionImages])

  useLayoutEffect(() => {
    if (isModalOpen) {
      setCurrentImageIndex(initialImageIndex)
      setCurrentImage(gallerySectionImages[initialImageIndex])
    }
  }, [isModalOpen])

  useEffect(() => {
    if (isModalOpen) {
      disableBodyScroll(modalContainer.current)
    } else {
      enableBodyScroll(modalContainer.current)
    }

    return () => clearAllBodyScrollLocks()

  }, [isModalOpen])

  return (
    <div ref={modalContainer}
         className={`image-gallery__modal ${isModalOpen ? 'modal--display-block' : 'modal--display-none'} ${styleClasses || ''}`}>
      <div className='image-gallery__close-btn-container'>
        <button className='image-gallery__modal-btn modal__close-btn' onClick={() => handleModalClose(!isModalOpen)}>
          <FontAwesomeIcon className='modal__times-icon' icon={['fa', 'times']}/>
        </button>
      </div>
      <div className='image-gallery--display-flex'>
        <div className='image-gallery__modal-container'>
          <div style={{ visibility: modalPreviousArrowVisible ? 'visible' : 'hidden' }}
               className='image-gallery__arrow-btn-container image-gallery__modal-arrow-btn-left'>
            <button className='image-gallery__modal-arrow-btn image-gallery__modal-btn'
                    onClick={() => handleArrowClick(arrows.PREVIOUS)}>
              <ImageGalleryArrow styleClasses='image-gallery__arrow-icon' icon={['far', 'arrow-circle-left']}/>
            </button>
          </div>
          <div className={`image-gallery__img-container`}>
            <div className='image-gallery__img--display-block'>
              <LazyLoad once>
                <DynamicImage styleClasses='image-gallery__modal-image' imageObject={currentImage}/>
              </LazyLoad>
              {currentImage && currentImage.subText &&
              <div className='image-gallery__text default-text color-white'>
                {currentImage.subText}
              </div>}
            </div>
          </div>
          <div style={{ visibility: modalNextArrowVisible ? 'visible' : 'hidden' }}
               className='image-gallery__arrow-btn-container image-gallery__modal-arrow-btn-right'>
            <button className='image-gallery__modal-arrow-btn image-gallery__modal-btn'
                    onClick={() => handleArrowClick(arrows.NEXT)}>
              <ImageGalleryArrow styleClasses='image-gallery__arrow-icon' icon={['far', 'arrow-circle-right']}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGalleryModal
