import GLOBAL_DEFS from '../GLOBAL_DEFS'

const getImageNameFromPublicId = (publicId, small) => {
  if (small) {
    const test = publicId.substring(publicId.lastIndexOf(GLOBAL_DEFS.THIRD_GEN_DOMAIN), publicId.indexOf(GLOBAL_DEFS.CDN_DEFS.SMALL_SLUG))
    return test
  } else {
    const test = publicId.substring(publicId.lastIndexOf(GLOBAL_DEFS.THIRD_GEN_DOMAIN) + 1, publicId.indexOf('_'))
  return test
  }
}

export default getImageNameFromPublicId
