import shortId from 'shortid'
import toTitleCase from '../toTitleCase'

const createImage = (src, altText, phase, name, device, gallery, order, thumbnail) => {
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
    subText: toTitleCase(phase)
  }
}

export default createImage


