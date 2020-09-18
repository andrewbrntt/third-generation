import React from 'react'
import ImageGallerySection from './ImageGallerySection'
import shortId from 'shortid'

const ImageGallery = ({ gallerySections }) => {
  return (
    <>
      {gallerySections.map(section => {
        return (
          <ImageGallerySection key={shortId.generate()} images={section.images}
                               title={section.title}/>
        )
      })
      }
    </>
  )
}

export default ImageGallery