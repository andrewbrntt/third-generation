import GLOBAL_DEFS from '../GLOBAL_DEFS'

const derivedPublicId = (imageSrc) => {
  return imageSrc.substring(imageSrc.indexOf(GLOBAL_DEFS.IMAGE_GALLERY_PATH) + 1)
}

export default derivedPublicId
