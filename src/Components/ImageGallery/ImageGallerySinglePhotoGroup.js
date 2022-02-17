import React from 'react'
import ImageGalleryPhotoGroup from './ImageGalleryPhotoGroup'
import shortId from 'shortid'

const ImageGallerySinglePhotoGroup = ({groupImages, onImageClick}) => {
  return (
    <ImageGalleryPhotoGroup
      key={shortId.generate()}
      galleryThumbnailImages={groupImages}
      onImageClick={onImageClick}
    />
  )
}

export default ImageGallerySinglePhotoGroup
