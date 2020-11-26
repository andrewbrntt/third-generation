import sortImageArray from '../sortImageArray'
import createImage from './createImageObject'
import GLOBAL_DEFS from '../GLOBAL_DEFS'

const createThumbnails = (images) => {
  let smallImages = images.filter(image => image.src.includes(GLOBAL_DEFS.SMALL))

  let thumbnails = smallImages.map(thumbnail => createImage(thumbnail.src, thumbnail.altText, thumbnail.phase, thumbnail.name))

  return sortImageArray(thumbnails)
}

export default createThumbnails
