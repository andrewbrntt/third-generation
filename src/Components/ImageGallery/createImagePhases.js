import GLOBAL_DEFS from '../../Helpers/GLOBAL_DEFS'

const createImagePhases = (imageGroup) => {
  let beforeImages = []
  let duringImages = []
  let afterImages = []

  imageGroup.forEach(image => {
    switch (image.phase) {
      case GLOBAL_DEFS.IMAGE_GALLERY_PHASES.BEFORE:
        beforeImages.push(image)
        break
      case GLOBAL_DEFS.IMAGE_GALLERY_PHASES.DURING:
        duringImages.push(image)
        break
      case GLOBAL_DEFS.IMAGE_GALLERY_PHASES.AFTER:
        afterImages.push(image)
        break
      default:
        break
    }
  })

  return {
    beforeImages,
    duringImages,
    afterImages
  }
}

export default createImagePhases
