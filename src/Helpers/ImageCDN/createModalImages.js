import React from 'react'
import sortImageArray from '../sortImageArray'
import createImage from './createImageObject'
import GLOBAL_DEFS from '../GLOBAL_DEFS'

const createModalImages = (images, hero) => {

  let sortedModalImages = []
  let fullImages

if(images.length > 0) {
  fullImages = images.filter(image => !image.src.includes(GLOBAL_DEFS.SMALL) && !image.src.includes(GLOBAL_DEFS.HERO))
  let modalImages = fullImages.map(modalImage => createImage(modalImage.src, modalImage.altText, modalImage.phase))

  sortedModalImages = sortImageArray(modalImages)
}
    sortedModalImages.unshift(hero)
    return sortedModalImages
}
export default createModalImages
