import React from 'react'
import shortId from 'shortid'
import ImageGallerySection from './ImageGallerySection'

const FullGallery = ({ imageGallerySections }) => {

  if (imageGallerySections && imageGallerySections.length > 0) {
    return imageGallerySections.map(currentImageGroup => {
      return (
        <ImageGallerySection
          key={ shortId.generate() }
          sectionImages={ currentImageGroup }
        />
      )
    })
  }
  return null
}

export default FullGallery
