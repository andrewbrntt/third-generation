import { getGroupImagesCDN } from './useImageCDN'
import createImage from './createImageObject'

const getImageGroup = (galleryName) => {
  return getGroupImagesCDN(galleryName)
    .then(rawImageGroupRes => {
      let imageGroup = {
        phases: false,
        images: []
      }
      // noinspection JSUnresolvedVariable
      imageGroup.images = rawImageGroupRes.data.resources.map(image => {

        let altText = ''
        let phase = ''
        let name = ''
        let device = ''
        let gallery = ''
        let order = ''
        let thumbnail = ''

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
            thumbnail = (image.context.custom.thumbnail === 'true')
          }
        }
        // noinspection JSUnresolvedVariable
        return createImage(image.public_id, altText, phase, name, device, gallery, order, thumbnail)
      })
      return imageGroup
    })
}

export default getImageGroup
