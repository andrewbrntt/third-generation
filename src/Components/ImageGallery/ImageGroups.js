import React from 'react'
import ImageGalleryPhaseGroup from './ImageGalleryPhaseGroup'
import shortId from 'shortid'
import ImageGallerySingleImageGroup from './ImageGallerySingleImageGroup'

const ImageGroups = ({galleryThumbnailImages, onImageClick}) => {

  if (galleryThumbnailImages && galleryThumbnailImages[0] && ( galleryThumbnailImages[0].beforeImages || galleryThumbnailImages[0].duringImages || galleryThumbnailImages[0].afterImages )) {
    return galleryThumbnailImages.map(currentGroup => {
      return <ImageGalleryPhaseGroup key={ shortId.generate() } onImageClick={ onImageClick }
                                     currentImageGroup={ currentGroup }/>
    })
  } else {
    return (
      <ImageGallerySingleImageGroup onImageClick={ onImageClick } groupImages={ galleryThumbnailImages }/>
    )
  }

}

export default ImageGroups
