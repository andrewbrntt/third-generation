import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageGalleryArrow from './ImageGalleryArrow'

const ImageGalleryModal = ({ styleClasses, imageData, handleArrowClick, handleModalClose, isModalOpen }) => {

  console.log('image data in modal', imageData)

  return (
    <div
      className={`image-gallery__modal ${isModalOpen ? 'modal--display-block' : 'modal--display-none'} ${styleClasses || ''}`}>
      <div className='image-gallery__close-btn-container'>
        <button className='image-gallery__modal-btn modal__close-btn' onClick={handleModalClose}>
          <FontAwesomeIcon className='modal__times-icon' icon={['fa', 'times']}/>
        </button>
      </div>
      <div className='image-gallery--display-flex'>
        <div className='image-gallery__container'>
          <div className='image-gallery__arrow-btn-container image-gallery__modal-arrow-btn-left'>
            <button className='image-gallery__modal-arrow-btn image-gallery__modal-btn' onClick={handleArrowClick}>
              <ImageGalleryArrow styleClasses='image-gallery__arrow-icon' icon={['far', 'arrow-circle-left']}/>
            </button>
          </div>
          <div className='image-gallery__img-container background-color-primary'>
            <div className={`${'image-gallery__img--display-block'}`}>
              <img className='image-gallery__img image-gallery__img-before' src={imageData.src}
                   alt={imageData.altText}/>
              <div className='image-gallery__text default-text color-white'>{imageData.subText}</div>
            </div>
          </div>
          <div className='image-gallery__arrow-btn-container image-gallery__modal-arrow-btn-right'>
            <button className='image-gallery__modal-arrow-btn image-gallery__modal-btn' onClick={handleArrowClick}>
              <ImageGalleryArrow styleClasses='image-gallery__arrow-icon' icon={['far', 'arrow-circle-right']}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGalleryModal
