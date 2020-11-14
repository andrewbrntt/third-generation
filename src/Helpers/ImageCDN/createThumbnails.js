import React from 'react'
import sortImageArray from '../sortImageArray'
import createImage from './createImageObject'
import GLOBAL_DEFS from '../GLOBAL_DEFS'

const createThumbnails = (images) => {
  let smallImages = images.filter(image => image.src.includes(GLOBAL_DEFS.SMALL))

  let thumbnails = smallImages.map(thumbnail => createImage(thumbnail.src, thumbnail.altText, thumbnail.phase, thumbnail.name))

  let test = sortImageArray(thumbnails)

  console.log(test)

  return test
}

export default createThumbnails
