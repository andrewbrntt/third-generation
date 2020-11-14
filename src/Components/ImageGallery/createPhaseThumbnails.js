import createThumbnails from '../../Helpers/ImageCDN/createThumbnails'
import createImagePhases from './createImagePhases'

const createPhaseThumbnails = (sectionImages) => {
  let imagePhaseThumbnails = []

  const imagePhases = createImagePhases(sectionImages)
  for (const currentImagePhase in imagePhases) {
    let currentThumbnailObject = {}
    currentThumbnailObject[currentImagePhase] = createThumbnails(imagePhases[currentImagePhase])
    imagePhaseThumbnails.push(currentThumbnailObject)
  }
  return imagePhaseThumbnails
}

export default createPhaseThumbnails
