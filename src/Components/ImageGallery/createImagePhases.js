import GLOBAL_DEFS from '../../Helpers/GLOBAL_DEFS'

const createImagePhases = (imageGroup) => {
  const beforeImages = imageGroup.filter(image => image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.BEFORE)
  const duringImages = imageGroup.filter(image => image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.BEFORE)
  const afterImages = imageGroup.filter(image => image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.BEFORE)

  return {
    beforeImages,
    duringImages,
    afterImages
  }
}

export default createImagePhases
