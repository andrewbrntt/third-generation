const derivedPublicId = (imageSrc) => {
  return imageSrc.substring(imageSrc.indexOf('/image-gallery') + 1)
}

export default derivedPublicId
