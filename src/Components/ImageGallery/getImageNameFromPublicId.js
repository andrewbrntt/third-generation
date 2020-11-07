const getImageNameFromPublicId = (publicId, small) => {
  if (small) {
    return publicId.substring(publicId.lastIndexOf('.third-generation'), publicId.indexOf('-small_'))
  } else {
    return publicId.substring(publicId.lastIndexOf('.third-generation') + 1, publicId.indexOf('_'))
  }
}

export default getImageNameFromPublicId
