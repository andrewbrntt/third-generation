import React from 'react'
import BeforeAfter from './BeforeAfter'

const BeforeAfterGallerySection = ({ galleryImages }) => {
  return (
    <div className='before-after-container'>
      {galleryImages.map(images =>
        <div className='before-after-set--margin'>
          <BeforeAfter beforeSrc={images.beforeImage} afterSrc={images.afterImage}/>
        </div>
      )}
    </div>
  )
}

export default BeforeAfterGallerySection
