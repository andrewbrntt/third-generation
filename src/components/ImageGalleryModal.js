import React from 'react'

const ImageGalleryModal = ({styleClasses}) => {
  return (
    <div className={`w3-modal modal--display-block padding-x-standard  ${styleClasses || ''}`}>
      <div style={{minHeight: '600px'}} className='image-gallery__container background-color-white'>
      </div>
    </div>
  )
}

export default ImageGalleryModal
