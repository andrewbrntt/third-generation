import sortImageArray from '../sortImageArray'
import createImage from './createImageObject'

const createThumbnails = (images) => {
  let smallImages = images.filter(image => image.thumbnail)

  let thumbnails = smallImages.map(thumbnail =>
    createImage(
      thumbnail.src,
      thumbnail.altText,
      thumbnail.phase,
      thumbnail.name,
      thumbnail.device,
      thumbnail.gallery,
      thumbnail.order
    ))

  return sortImageArray(thumbnails)
}

export default createThumbnails
