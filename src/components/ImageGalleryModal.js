import React, { useEffect, useLayoutEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageGalleryArrow from './ImageGalleryArrow'

const ImageGalleryModal = ({ styleClasses, initialImageId, gallerySectionImages, handleModalClose, isModalOpen }) => {

  const arrows = {
    PREVIOUS: 'previous',
    NEXT: 'next'
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [modalPreviousArrowVisible, setModalPreviousArrowVisible] = useState(false)
  const [modalNextArrowVisible, setModalNextArrowVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  const handleArrowClick = (direction) => {

    if (arrows.PREVIOUS === direction && !isFirstImage()) {
        setCurrentImageIndex(currentImageIndex - 1)
    } else if (arrows.NEXT === direction && !isFinalImage()) {
        setCurrentImageIndex(currentImageIndex + 1)
    }
  }
  const isFirstImage = () => {
    return currentImageIndex === 0 && gallerySectionImages.length > 1
  }

  const isFinalImage = () => {
    return currentImageIndex === gallerySectionImages.length - 1 && gallerySectionImages.length > 1
  }

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
  }, [currentImageIndex])


  useEffect(() => {
    if (isModalOpen) {
      const initialImageIndex = gallerySectionImages.findIndex(image => image.id === initialImageId)
      setCurrentImageIndex(initialImageIndex)
      setCurrentImage(gallerySectionImages[initialImageIndex])
    }
  }, [isModalOpen])

  return (
    <div
      className={`image-gallery__modal ${isModalOpen ? 'modal--display-block' : 'modal--display-none'} ${styleClasses || ''}`}>
      <div className='image-gallery__close-btn-container'>
        <button className='image-gallery__modal-btn modal__close-btn' onClick={() => handleModalClose(!isModalOpen)}>
          <FontAwesomeIcon className='modal__times-icon' icon={['fa', 'times']}/>
        </button>
      </div>
      <div className='image-gallery--display-flex'>
        <div className='image-gallery__container'>
          <div style={{ visibility: modalPreviousArrowVisible ? 'visible' : 'hidden' }}
               className='image-gallery__arrow-btn-container image-gallery__modal-arrow-btn-left'>
            <button className='image-gallery__modal-arrow-btn image-gallery__modal-btn'
                    onClick={() => handleArrowClick(arrows.PREVIOUS)}>
              <ImageGalleryArrow styleClasses='image-gallery__arrow-icon' icon={['far', 'arrow-circle-left']}/>
            </button>
          </div>
          <div className={`image-gallery__img-container ${currentImage.subText ? 'background-color-primary' : ''}`}>
            <div className='image-gallery__img--display-block'>
              <img className='image-gallery__img'
                   src={currentImage.src}
                   alt={currentImage.altText}/>
              {currentImage.subText &&
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
