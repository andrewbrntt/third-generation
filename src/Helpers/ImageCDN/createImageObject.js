import shortId from 'shortid'
import toTitleCase from '../toTitleCase'

const createImage = (src, altText, phase, name, device, gallery, order, thumbnail, project) => {
  return {
    id: shortId.generate(),
    src,
    altText,
    phase,
    name,
    device,
    gallery,
    order,
    thumbnail,
    subText: toTitleCase(phase),
    project
  }
}

export default createImage


