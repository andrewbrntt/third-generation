import GLOBAL_DEFS from '../GLOBAL_DEFS'
import sortImageArray from '../sortImageArray'

const createPhaseGroups = images => {
  const beforeImages = images.filter(image => {
    return !image.thumbnail && image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.BEFORE
  })

  const duringImages = images.filter(image => {
    return !image.thumbnail && image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.DURING
  })

  const afterImages = images.filter(image => {
    return !image.thumbnail && image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.AFTER
  })

  const sortedBeforeImages = sortImageArray(beforeImages)
  const sortedDuringImages = sortImageArray(duringImages)
  const sortedAfterImages = sortImageArray(afterImages)

return sortedBeforeImages.concat(sortedDuringImages).concat(sortedAfterImages)

}

export default createPhaseGroups