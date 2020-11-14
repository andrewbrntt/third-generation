import React from 'react'
import ImageGalleryImageGroup from './ImageGalleryImageGroup'
import shortId from 'shortid'

const ImageGallerySingleImageGroup = ({groupImages, onImageClick}) => {
  return (
    <ImageGalleryImageGroup key={shortId.generate()}
                            galleryThumbnailImages={groupImages}
                            onImageClick={onImageClick}
    />
  )
}

export default ImageGallerySingleImageGroup
