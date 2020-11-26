import sortImageArray from '../sortImageArray'
import createImage from './createImageObject'
import GLOBAL_DEFS from '../GLOBAL_DEFS'

const createModalImages = (images, hero) => {

  let sortedModalImages = []
  let fullImages

if(images.length > 0) {
  fullImages = images.filter(image => !image.src.includes(GLOBAL_DEFS.SMALL) && !image.src.includes(GLOBAL_DEFS.HERO))
  let modalImages = fullImages.map(modalImage => createImage(modalImage.src, modalImage.altText, modalImage.phase, modalImage.name))

  sortedModalImages = sortImageArray(modalImages)
}
    sortedModalImages.unshift(hero)

    if(sortedModalImages[1].phase !== '') {
     sortedModalImages = phaseGrouper(sortedModalImages)
    }

    return sortedModalImages
}
export default createModalImages


function phaseGrouper (images) {
 const beforeImages = images.filter(image => {
    return image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.BEFORE
  })

  const duringImages = images.filter(image => {
    return image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.DURING
  })

  const afterImages = images.filter(image => {
    return image.phase === GLOBAL_DEFS.IMAGE_GALLERY_PHASES.AFTER
  })

  const heroImage = images.find(image => image.phase === 'hero')

  let sortedBeforeImages = sortImageArray(beforeImages)
  let sortedDuringImages = sortImageArray(duringImages)
  let sortedAfterImages = sortImageArray(afterImages)

  let beforeDuring = sortedBeforeImages.concat(sortedDuringImages)
  let completePhaseArray = beforeDuring.concat(sortedAfterImages)

  completePhaseArray.unshift(heroImage)

  return completePhaseArray
}
