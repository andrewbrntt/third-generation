import React from 'react'
import ImageGalleryImageGroup from './ImageGalleryImageGroup'
import shortId from 'shortid'

const ImageGalleryPhaseGroup = ({currentImageGroup, onImageClick}) => {
  let groupTitle = ''
  let groupImages = ''
let beforeImages = currentImageGroup.beforeImages
let duringImages = currentImageGroup.duringImages
let afterImages = currentImageGroup.afterImages


  if (Array.isArray(beforeImages) && beforeImages.length > 0) {
    groupTitle = 'Before'
    groupImages = currentImageGroup.beforeImages
  } else if (Array.isArray(duringImages) && duringImages.length > 0) {
    groupTitle = 'During'
    groupImages = currentImageGroup.duringImages
  } else if (Array.isArray(afterImages) && afterImages.length > 0) {
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
