import sortImageArray from '../sortImageArray'

const createModalImages = (images) => {

  if (images.length > 0) {
    const modalImages = images.filter(image => !image.thumbnail)

    return sortImageArray(modalImages)
  }
}
export default createModalImages

