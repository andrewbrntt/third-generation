import React from 'react'
import shortId from 'shortid'
import BeforeAfter from './BeforeAfter'

const BeforeAfterGallerySection = ({ setImagePair, galleryImages, handleModalOpen }) => {

  const handleImageClick = (images) => {
    setImagePair(images)
    handleModalOpen()
  }

  return (
    <div className='before-after-container'>
      {galleryImages.map(images =>
        <div key={shortId.generate()} onClick={() => handleImageClick(images)} className='before-after-set--margin'>
          <BeforeAfter before={images.before} after={images.after}/>
        </div>
      )}
    </div>
  )
}

export default BeforeAfterGallerySection
