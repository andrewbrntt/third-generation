import sortImageArray from '../sortImageArray'
import GLOBAL_DEFS from '../GLOBAL_DEFS'

const createThumbnails = (sectionImages) => {
  let thumbnailImages = sectionImages.images.filter(image => image.thumbnail)

  if (sectionImages.phases) {
    const beforeImages = thumbnailImages.filter(image => image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.BEFORE)
    const duringImages = thumbnailImages.filter(image => image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.DURING)
    const afterImages = thumbnailImages.filter(image => image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.AFTER)

    return [{
      phases: true,
      beforeImages: sortImageArray(beforeImages),
      duringImages: sortImageArray(duringImages),
      afterImages:  sortImageArray(afterImages)

    }]
  } else {
    return sortImageArray(thumbnailImages)
  }
}

export default createThumbnails
