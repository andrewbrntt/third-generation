import React from 'react'

const createThumbnails = (images, sortImageArray) => {
  let thumbnails = images.filter(image => image.public_id.includes('small'))

  return sortImageArray(thumbnails)

  // if (JSON.stringify(sortedThumbnailImages) !== JSON.stringify(galleryThumbnailImages)) {
  //   setGalleryThumbnailImages(sortedThumbnailImages)
  // }
}

export default createThumbnails
