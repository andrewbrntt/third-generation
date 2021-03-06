import GLOBAL_DEFS from '../GLOBAL_DEFS'

const getImageNameFromPublicId = (publicId, small) => {
  if (small) {
    return publicId.substring(publicId.lastIndexOf(GLOBAL_DEFS.THIRD_GEN_DOMAIN) + 1, publicId.indexOf(GLOBAL_DEFS.CDN_DEFS.SMALL_SLUG))
  } else {
    return publicId.substring(publicId.lastIndexOf(GLOBAL_DEFS.THIRD_GEN_DOMAIN) + 1, publicId.indexOf('_'))
  }
}

export default getImageNameFromPublicId
