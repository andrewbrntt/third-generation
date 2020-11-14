import { getGroupImagesCDN } from './useImageCDN'
import createImage from './createImageObject'

const getImageGroup = (groupId) => {
  return getGroupImagesCDN(groupId)
    .then(rawImageGroupRes => {
      let imageGroup = {
        phases: false,
        images: []
      }
      imageGroup.images = rawImageGroupRes.data.resources.map(image => {
        let altText = ''
        let phase = ''
        if (image.context && image.context.custom) {
          if (image.context.custom.alt && image.context.custom.alt !== '') {
            altText = image.context.custom.alt
          }

          if (image.context.custom.phase && image.context.custom.phase !== '') {
            imageGroup.phases = true
            phase = image.context.custom.phase
          }
        }
        return createImage(image.public_id, altText, phase)
      })
      return imageGroup
    })
}

export default getImageGroup
