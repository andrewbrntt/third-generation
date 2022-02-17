import React from 'react'
import ImageGalleryPhaseGroup from './ImageGalleryPhaseGroup'
import shortId from 'shortid'
import ImageGallerySinglePhotoGroup from './ImageGallerySinglePhotoGroup'

const ImageGroupType = ({ galleryThumbnailImages, onImageClick }) => {

  if (galleryThumbnailImages && galleryThumbnailImages[0] && galleryThumbnailImages[0].phases) {
      return <ImageGalleryPhaseGroup
        key={ shortId.generate() }
        onImageClick={ onImageClick }
        currentImageGroup={ galleryThumbnailImages[0] }
      />

  } else {
    return (
      <ImageGallerySinglePhotoGroup
        onImageClick={ onImageClick }
        groupImages={ galleryThumbnailImages }
      />
    )
  }
}

export default ImageGroupType
