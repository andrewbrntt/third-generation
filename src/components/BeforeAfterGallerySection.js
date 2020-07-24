import React from 'react'
import shortId from 'shortid'
import BeforeAfter from './BeforeAfter'

const BeforeAfterGallerySection = ({ galleryImages }) => {
  return (
    <div className='before-after-container'>
      {galleryImages.map(images =>
        <div key={shortId.generate()} className='before-after-set--margin'>
          <BeforeAfter beforeSrc={images.beforeImage} afterSrc={images.afterImage}/>
        </div>
      )}
    </div>
  )
}

export default BeforeAfterGallerySection
