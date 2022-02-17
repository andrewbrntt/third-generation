import React from 'react'
import ImageGalleryPhotoGroup from './ImageGalleryPhotoGroup'
import shortId from 'shortid'

const ImageGalleryPhaseGroup = ({currentImageGroup, onImageClick}) => {
let groupTitle = ''
let groupImages = ''
let beforeImages = currentImageGroup.beforeImages
let duringImages = currentImageGroup.duringImages
let afterImages = currentImageGroup.afterImages

  const BeforeImages = () => {
    if (Array.isArray(beforeImages) && beforeImages.length > 0) {
      groupTitle = 'Before'
      groupImages = currentImageGroup.beforeImages
      return (
        <ImageGalleryPhotoGroup
          key={shortId.generate()}
          groupTitle={groupTitle}
          galleryThumbnailImages={groupImages}
          onImageClick={onImageClick}
        />
      )
    } else {
      return null
    }
  }

  const DuringImages = () => {
    if (Array.isArray(duringImages) && duringImages.length > 0) {
      groupTitle = 'During'
      groupImages = currentImageGroup.duringImages
      return (
        <ImageGalleryPhotoGroup
          key={shortId.generate()}
          groupTitle={groupTitle}
          galleryThumbnailImages={groupImages}
          onImageClick={onImageClick}
        />
      )
    } else {
      return null
    }
  }

  const AfterImages = () => {
    if (Array.isArray(afterImages) && afterImages.length > 0) {
      groupTitle = 'After'
      groupImages = currentImageGroup.afterImages
      return (
        <ImageGalleryPhotoGroup
          key={shortId.generate()}
          groupTitle={groupTitle}
          galleryThumbnailImages={groupImages}
          onImageClick={onImageClick}
        />
      )
    } else {
      return null
    }
  }

  return (
    <>
    <BeforeImages />
    <DuringImages />
    <AfterImages />
    </>
  )
}

export default ImageGalleryPhaseGroup
