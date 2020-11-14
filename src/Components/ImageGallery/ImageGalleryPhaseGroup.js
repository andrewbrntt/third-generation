import React from 'react'
import ImageGalleryImageGroup from './ImageGalleryImageGroup'
import shortId from 'shortid'

const ImageGalleryPhaseGroup = ({currentImageGroup, onImageClick}) => {
  let groupTitle = ''
  let groupImages = ''

  if (currentImageGroup.beforeImages) {
    groupTitle = 'Before'
    groupImages = currentImageGroup.beforeImages
  } else if (currentImageGroup.duringImages) {
    groupTitle = 'During'
    groupImages = currentImageGroup.duringImages
  } else if (currentImageGroup.afterImages) {
    groupTitle = 'After'
    groupImages = currentImageGroup.afterImages
  }

  return (
    <ImageGalleryImageGroup key={shortId.generate()} groupTitle={groupTitle}
                            galleryThumbnailImages={groupImages}
                            onImageClick={onImageClick}
    />
  )
}

export default ImageGalleryPhaseGroup
