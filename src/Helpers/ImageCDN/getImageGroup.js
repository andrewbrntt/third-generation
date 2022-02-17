import { getGalleryImagesCDN, getProjectImagesCDN } from './useImageCDN'
import createImage from './createImageObject'
import createGallerySections from './createGallerySections'

const parseImages = (groupName, rawImageGroup) => {

  let imageGroup = {
    phases: false,
    images: []
  }

  imageGroup.images = rawImageGroup.map(image => {
    let altText = ''
    let phase = ''
    let name = ''
    let device = ''
    let gallery = ''
    let order = ''
    let thumbnail = ''
    let project = ''

    if (image.context && image.context.custom) {
      if (image.context.custom.alt && image.context.custom.alt !== '') {
        altText = image.context.custom.alt
      }

      if (image.context.custom.phase && image.context.custom.phase !== '') {
        imageGroup.phases = true
        phase = image.context.custom.phase
      }

      if (image.context.custom.name && image.context.custom.name !== '') {
        name = image.context.custom.name
      }

      if (image.context.custom.device && image.context.custom.device !== '') {
        device = image.context.custom.device
      }

      if (image.context.custom.gallery && image.context.custom.gallery !== '') {
        gallery = image.context.custom.gallery
      }

      if (image.context.custom.order && image.context.custom.order !== '') {
        order = image.context.custom.order
      }

      if (image.context.custom.thumbnail && image.context.custom.thumbnail !== '') {
        thumbnail = ( image.context.custom.thumbnail === 'true' )
      }

      if (image.context.custom.project && image.context.custom.project !== '') {
        project = image.context.custom.project
      }
    }
    // noinspection JSUnresolvedVariable
    return createImage(image.public_id, altText, phase, name, device, gallery, order, thumbnail, project)
  })

  return imageGroup
}

const getImageGroup = (groupName, isProject) => {

  if(isProject) {
    return getProjectImagesCDN(groupName)
      .then(rawImageGroupRes => {
        // noinspection JSUnresolvedVariable
        return parseImages(groupName, rawImageGroupRes.data.resources)
      })
  } else {
    return getGalleryImagesCDN(groupName)
      .then(rawImageGroupRes => {
        // noinspection JSUnresolvedVariable
        const allPhotos = parseImages(groupName, rawImageGroupRes.data.resources)
        return createGallerySections(groupName, allPhotos)
      })
  }
}

export default getImageGroup
